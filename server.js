require('dotenv').config();
const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const { GoogleGenAI } = require('@google/genai');
const Y = require('yjs');
const syncProtocol = require('y-protocols/sync');
const awarenessProtocol = require('y-protocols/awareness');
const encoding = require('lib0/encoding');
const decoding = require('lib0/decoding');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let ai = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

// Redirect root
app.get('/', (req, res) => res.redirect('/auth.html'));

// AI Endpoint
app.post('/api/ai', async (req, res) => {
  const { action, text, language } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });
  if (!ai) return res.status(500).json({ error: 'AI is not configured.' });

  try {
    let prompt = '';
    if (action === 'summarize') prompt = `Provide a very concise summary of the following text. Do not add conversational filler:\n\n${text}`;
    else if (action === 'polish') prompt = `Fix any grammar mistakes and improve the tone of the following text to make it professional and clear. Just output the polished text directly:\n\n${text}`;
    else if (action === 'translate') prompt = `Translate the following text to ${language || 'Spanish'} accurately. Output only the translated text:\n\n${text}`;
    else if (action === 'chat') prompt = text;
    else return res.status(400).json({ error: 'Invalid action' });

    const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
    res.json({ result: response.text });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: 'Failed to generate AI content.' });
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
