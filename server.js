require('dotenv').config({ override: true });
const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const { GoogleGenAI } = require('@google/genai');
const Groq = require('groq-sdk');
const Y = require('yjs');
const syncProtocol = require('y-protocols/sync');
const awarenessProtocol = require('y-protocols/awareness');
const encoding = require('lib0/encoding');
const decoding = require('lib0/decoding');
const rateLimit = require('express-rate-limit');


const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let ai = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

let groq = null;
if (process.env.GROQ_API_KEY) {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
}

// Supabase admin client (service role — bypasses RLS)
let supabaseAdmin = null;

// Get the key from environment variables (Make sure SUPABASE_SERVICE_ROLE_KEY is set in Render)
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;


if (SERVICE_KEY) {
  const { createClient } = require('@supabase/supabase-js');
  const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
  supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
  console.log(`[Supabase] Admin client ready. Key length: ${SERVICE_KEY.length}`);
} else {
  console.warn('[Supabase] SUPABASE_SERVICE_ROLE_KEY not set — guest profile creation will fail.');
}

// Redirect root
app.get('/', (req, res) => res.redirect('/auth.html'));

// Ensure profile exists (used by guest/anonymous users to bypass RLS)
app.post('/api/ensure-profile', async (req, res) => {
  const { userId, username } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId required' });

  if (!supabaseAdmin) return res.status(503).json({ error: 'Service role not configured' });

  try {
    // Check if profile already exists
    const { data: existing } = await supabaseAdmin
      .from('profiles')
      .select('id, username')
      .eq('id', userId)
      .single();

    if (existing) return res.json({ profile: existing });

    // Generate a unique guest name if 'Guest' was passed
    let finalUsername = username || 'Guest';
    if (finalUsername === 'Guest') {
      finalUsername = `Guest_${Math.floor(Math.random() * 100000)}`;
    }

    // Create the profile
    const { data: newProfile, error } = await supabaseAdmin
      .from('profiles')
      .insert([{ id: userId, username: finalUsername, color: '#10b981' }])
      .select()
      .single();

    if (error) throw error;
    res.json({ profile: newProfile });
  } catch (err) {
    console.error('ensure-profile error:', err);
    res.status(500).json({ error: err.message || 'Failed to create profile' });
  }
});

// AI Endpoint

const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 15, // limit each IP to 15 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});

app.post('/api/ai', aiLimiter, async (req, res) => {
  const { action, text, language } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });
  if (!ai && !groq) return res.status(500).json({ error: 'AI is not configured.' });

  const systemInstruction = `You are CoDoc AI, a writing assistant integrated into a collaborative document editor. Your goal is to help the user write, edit, and understand their document. You must ALWAYS respond with a valid JSON object.

JSON Schema:
{
  "reply": "Your conversational response here.",
  "action": "none" | "replace" | "insert",
  "content": "The exact text to inject or replace into the document. Leave empty if action is none."
}

Rules:
1. If the user asks to modify, rewrite, summarize, or translate the text, set 'action' to 'replace' or 'insert' and put the resulting text EXACTLY in 'content'.
2. If the user provided selected text and asks you to edit it, use 'replace' to replace that specific selection.
3. If the user asks to rewrite everything, use 'replace' to overwrite everything.
4. If the user asks to add something new (e.g., "continue writing"), use 'insert'.
5. Provide helpful feedback in 'reply'. Your reply MUST be plain text (no markdown).
6. CRITICAL: Output ONLY valid JSON. No markdown code blocks like \`\`\`json.`;

  try {
    let rawText = "";

    if (groq) {
      try {
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            { role: "system", content: systemInstruction },
            { role: "user", content: text }
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          temperature: 0.5,
        });
        rawText = chatCompletion.choices[0]?.message?.content || "";
        console.log('[AI] Used Groq');
      } catch (groqErr) {
        console.error('[AI] Groq failed, falling back to Gemini:', groqErr.message);
        if (ai) {
          const result = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: [{ role: 'user', parts: [{ text: systemInstruction + '\n\n' + text }] }]
          });
          rawText = result.text;
          console.log('[AI] Used Gemini Fallback');
        } else {
          throw groqErr;
        }
      }
    } else if (ai) {
      const result = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [{ role: 'user', parts: [{ text: systemInstruction + '\n\n' + text }] }]
      });
      rawText = result.text;
      console.log('[AI] Used Gemini');
    }

    // Defensive parsing: Strip markdown if the AI ignored instructions
    let cleanJson = rawText.trim();
    const firstBrace = cleanJson.indexOf('{');
    const lastBrace = cleanJson.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
    }
    
    const aiRes = JSON.parse(cleanJson);
    
    // Fallback response keys in case the LLM uses different keys for conversational chat
    let replyText = aiRes.reply || aiRes.response || aiRes.message || aiRes.text || aiRes.answer || "";
    if (!replyText && !aiRes.action && !aiRes.content) {
      replyText = Object.values(aiRes).find(v => typeof v === 'string') || "I couldn't generate a proper response.";
    }

    res.json({
      reply: replyText,
      action: aiRes.action || "none",
      content: aiRes.content || ""
    });
    console.log('[AI] Success – result:', aiRes);
  } catch (err) {
    console.error('[AI] Endpoint Error:', err);
    res.status(500).json({ error: 'Failed to generate AI content. ' + (err.message || '') });
  }
});

// History Endpoints
app.post('/api/save-history', async (req, res) => {
  const { userId, documentId, content } = req.body;
  if (!userId || !documentId || !content) return res.status(400).json({ error: 'Missing parameters' });
  if (!supabaseAdmin) return res.status(503).json({ error: 'Database service role not configured' });

  try {
    // 1. Get the latest version to avoid duplicate saves if content hasn't changed.
    const { data: latest } = await supabaseAdmin
      .from('document_history')
      .select('content')
      .eq('user_id', userId)
      .eq('document_id', documentId)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (latest && latest.length > 0 && latest[0].content === content) {
      return res.json({ success: true, message: 'Content unchanged, skipped save.' });
    }

    // 2. Insert new version
    const { data: newVersion, error } = await supabaseAdmin
      .from('document_history')
      .insert({ user_id: userId, document_id: documentId, content })
      .select()
      .single();

    if (error) throw error;

    // 3. Limit history to the last 20 entries per user per document.
    const { data: historyItems } = await supabaseAdmin
      .from('document_history')
      .select('id')
      .eq('user_id', userId)
      .eq('document_id', documentId)
      .order('created_at', { ascending: false });

    if (historyItems && historyItems.length > 20) {
      const idsToDelete = historyItems.slice(20).map(item => item.id);
      await supabaseAdmin
        .from('document_history')
        .delete()
        .in('id', idsToDelete);
    }

    res.json({ success: true, version: newVersion });
  } catch (err) {
    console.error('History Save Error:', err);
    res.status(500).json({ error: 'Failed to save history' });
  }
});

app.get('/api/history/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const { docId } = req.query;
  if (!supabaseAdmin) return res.status(503).json({ error: 'Database service role not configured' });

  try {
    let query = supabaseAdmin
      .from('document_history')
      .select('*')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false });
    
    if (docId) {
      query = query.eq('document_id', docId);
    }

    const { data: versions, error } = await query;

    if (error) {
      if (error.code === '22P02') return res.json({ versions: [] }); // Invalid UUID syntax, return empty
      console.error('[Supabase] History fetch error:', error);
      return res.status(500).json({ error: error.message || 'Database error occurred' });
    }
    res.json({ versions });
  } catch (err) {
    console.error('[Server] History Fetch Catch Error:', err);
    res.status(500).json({ error: 'Failed to fetch history: ' + (err.message || err) });
  }
});

// ── Yjs Document Store ──────────────────────────────────────────────────
const docs = new Map();      // roomName -> Y.Doc

const conns = new Map();     // WebSocket -> { room, awarenessIds }

const messageSync = 0;
const messageAwareness = 1;

function getYDoc(roomName) {
  if (!docs.has(roomName)) {
    const doc = new Y.Doc();

    doc._conns = new Set();
    doc._awareness = new awarenessProtocol.Awareness(doc);
    doc._awareness.setLocalState(null);

    // Broadcast document updates to all connected clients
    doc.on('update', (update, origin) => {
      const encoder = encoding.createEncoder();
      encoding.writeVarUint(encoder, messageSync);
      syncProtocol.writeUpdate(encoder, update);
      const buf = encoding.toUint8Array(encoder);

      doc._conns.forEach(conn => {
        // Don't echo back to the origin connection
        if (conn !== origin && conn.readyState === WebSocket.OPEN) {
          conn.send(buf);
        }
      });
    });

    doc._awareness.on('update', ({ added, updated, removed }, origin) => {
      const changedClients = added.concat(updated, removed);
      const encoder = encoding.createEncoder();
      encoding.writeVarUint(encoder, messageAwareness);
      encoding.writeVarUint8Array(encoder, awarenessProtocol.encodeAwarenessUpdate(doc._awareness, changedClients));
      const buf = encoding.toUint8Array(encoder);

      doc._conns.forEach(conn => {
        if (conn !== origin && conn.readyState === WebSocket.OPEN) {
          conn.send(buf);
        }
      });
    });

    docs.set(roomName, doc);
    console.log(`[Yjs] Created doc: ${roomName}`);
  }
  return docs.get(roomName);
}

// ── WebSocket Server ────────────────────────────────────────────────────
const wss = new WebSocket.Server({ noServer: true });

// Meta rooms for comments/versions (text JSON messages)
const metaRooms = new Map();

server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, ws => wss.emit('connection', ws, req));
});

wss.on('connection', (conn, req) => {
  const url = new URL(req.url, 'http://localhost');
  const roomName = url.pathname.slice(1) || 'default';
  const doc = getYDoc(roomName);

  doc._conns.add(conn);
  conns.set(conn, { room: roomName, awarenessIds: new Set() });

  console.log(`[WS] Client joined room ${roomName} (${doc._conns.size} clients)`);

  // Send initial sync step 1
  const encoder = encoding.createEncoder();
  encoding.writeVarUint(encoder, messageSync);
  syncProtocol.writeSyncStep1(encoder, doc);
  conn.send(encoding.toUint8Array(encoder));

  // Send current awareness states
  const awarenessStates = doc._awareness.getStates();
  if (awarenessStates.size > 0) {
    const encoder2 = encoding.createEncoder();
    encoding.writeVarUint(encoder2, messageAwareness);
    encoding.writeVarUint8Array(encoder2, awarenessProtocol.encodeAwarenessUpdate(doc._awareness, Array.from(awarenessStates.keys())));
    conn.send(encoding.toUint8Array(encoder2));
  }

  let metaDocId = null;

  conn.on('message', (data, isBinary) => {
    if (!isBinary && typeof data === 'string' || (!isBinary && Buffer.isBuffer(data) && data[0] === 0x7b)) {
      // Text/JSON message → custom meta protocol
      let msg;
      try { msg = JSON.parse(data.toString()); } catch { return; }

      if (msg.type === 'meta-join') {
        metaDocId = msg.docId;
        if (!metaRooms.has(metaDocId)) metaRooms.set(metaDocId, new Set());
        metaRooms.get(metaDocId).add(conn);
      } else if (msg.type === 'sync-state' && metaDocId) {
        const payload = JSON.stringify(msg);
        const room = metaRooms.get(metaDocId);
        if (room) room.forEach(c => { if (c !== conn && c.readyState === WebSocket.OPEN) c.send(payload); });
      }
      return;
    }

    // Binary message → Yjs sync protocol
    try {
      const buf = new Uint8Array(data);
      const decoder = decoding.createDecoder(buf);
      const msgType = decoding.readVarUint(decoder);

      switch (msgType) {
        case messageSync: {
          const encoder = encoding.createEncoder();
          encoding.writeVarUint(encoder, messageSync);
          // Pass `conn` as origin so doc.on('update') can skip echoing back
          syncProtocol.readSyncMessage(decoder, encoder, doc, conn);

          // Send sync response (e.g. sync step 2) back to the requesting client
          if (encoding.length(encoder) > 1) {
            conn.send(encoding.toUint8Array(encoder));
          }
          // Updates are broadcast automatically via doc.on('update')
          break;
        }
        case messageAwareness: {
          const update = decoding.readVarUint8Array(decoder);
          awarenessProtocol.applyAwarenessUpdate(doc._awareness, update, conn);
          // Track which awareness client IDs belong to this connection
          const connMeta = conns.get(conn);
          if (connMeta) {
            const decoded = awarenessProtocol.decodeAwarenessUpdate(update);
            decoded.forEach(u => connMeta.awarenessIds.add(u));
          }
          break;
        }
      }
    } catch (err) {
      console.error('[Yjs] Message error:', err.message);
    }
  });

  conn.on('close', () => {
    const meta = conns.get(conn);
    if (meta) {
      const doc = docs.get(meta.room);
      if (doc) {
        doc._conns.delete(conn);
        // Remove awareness states for this connection
        awarenessProtocol.removeAwarenessStates(doc._awareness, Array.from(meta.awarenessIds), null);
        console.log(`[WS] Client left room ${meta.room} (${doc._conns.size} clients)`);
        if (doc._conns.size === 0) {
          // Keep doc in memory for a while in case someone reconnects
          setTimeout(() => {
            if (doc._conns.size === 0) {
              doc.destroy();
              docs.delete(meta.room);
              console.log(`[Yjs] Destroyed doc: ${meta.room}`);
            }
          }, 30000);
        }
      }
      conns.delete(conn);
    }
    if (metaDocId) {
      const room = metaRooms.get(metaDocId);
      if (room) {
        room.delete(conn);
        if (room.size === 0) metaRooms.delete(metaDocId);
      }
    }
  });

  conn.on('error', err => console.error('[WS] Error:', err.message));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`✅ CoDoc server running on port ${PORT} (Yjs CRDT + WebSocket)`));
