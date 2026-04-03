
import { setupComments } from './comments.js';
import { setupHistory } from './history.js';
import { setupAiChat } from './ai-chat.js';
import { setupSharing } from './sharing.js';
import { escapeHtml, timeAgo } from './utils.js';
import { toggleTheme } from './theme.js';
import { toggleExportMenu } from './export.js';

// Expose modules to global for HTML inline onclick handlers
window.escapeHtml = escapeHtml;
window.timeAgo = timeAgo;
window.toggleTheme = toggleTheme;
window.toggleExportMenu = toggleExportMenu;

/* ─────────────────────────────────────────────────────────────────
   CoDoc editor.js — Yjs CRDT Collaborative Editor
   Sync: Yjs + y-websocket  |  Editor: Quill 2  |  Storage: Supabase
   Bundled with esbuild to ensure single yjs instance
───────────────────────────────────────────────────────────────── */

import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { QuillBinding } from 'y-quill';
import QuillCursors from 'quill-cursors';
import BlotFormatter from '@enzedonline/quill-blot-formatter2';
import Cropper from 'cropperjs';

// Quill is loaded globally from CDN script tag
const Quill = window.Quill;

// Register modules
Quill.register('modules/cursors', QuillCursors);
Quill.register('modules/blotFormatter', BlotFormatter);

// ── Register custom Font whitelist ──────────────────────────────────────
const Font = Quill.import('attributors/class/font');
Font.whitelist = ['serif', 'monospace', 'arial', 'courier-new', 'georgia', 'times-new-roman', 'verdana'];
Quill.register(Font, true);

// ── Register custom Size whitelist (pixel-based) ────────────────────────
const Size = Quill.import('attributors/style/size');
Size.whitelist = ['8px', '10px', '12px', '14px', '18px', '20px', '24px', '28px', '32px', '36px', '48px', '72px'];
Quill.register(Size, true);

// ── Inject font-family CSS for custom font classes ──────────────────────
(function injectFontCSS() {
  const style = document.createElement('style');
  style.textContent = `
    .ql-font-arial { font-family: Arial, Helvetica, sans-serif; }
    .ql-font-courier-new { font-family: 'Courier New', Courier, monospace; }
    .ql-font-georgia { font-family: Georgia, 'Times New Roman', serif; }
    .ql-font-times-new-roman { font-family: 'Times New Roman', Times, serif; }
    .ql-font-verdana { font-family: Verdana, Geneva, sans-serif; }
    .ql-font-serif { font-family: Georgia, 'Times New Roman', serif; }
    .ql-font-monospace { font-family: 'Courier New', Courier, monospace; }
  `;
  document.head.appendChild(style);
})();

// ── Supabase helper ─────────────────────────────────────────────────────
function getSupabase() {
  if (window.supabaseClient) return window.supabaseClient;
  if (window.supabase) {
    const SUPABASE_URL = 'https://qkxqfruwtiquvtcnjboe.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreHFmcnV3dGlxdXZ0Y25qYm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNTcyMzMsImV4cCI6MjA4OTkzMzIzM30.qzcdjJQeZwLog9F_vC1P8xOMfOdneITPdSaw7-jf_hs';
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return window.supabaseClient;
  }
  return null;
}

// ── State ──────────────────────────────────────────────────────────────
let quill = null;
let ydoc = null;
let ytext = null;
let wsProvider = null;
let metaWs = null;

let myId = null;
let myName = '';
let myColor = '#10b981';
let myRole = 'viewer';
let docId = null;
let users = {};
let comments = [];
let versionHistory = [];
let savedRange = null;
let dbSaveTimer = null;
let aiLastSelection = null;
let recentBadgeTimer = null;

// ── DOM refs ────────────────────────────────────────────────────────────
const commentsList   = document.getElementById('comments-list');
const commentCount   = document.getElementById('comment-count');
const usersList      = document.getElementById('users-list');
const userCount      = document.getElementById('user-count');
const navAvatars     = document.getElementById('nav-user-avatars');
const myAvatarEl     = document.getElementById('my-avatar');
const recentBadge    = document.getElementById('recent-change-badge');
const toastEl        = document.getElementById('toast');
const historyPanel   = document.getElementById('history-panel');
const historyOverlay = document.getElementById('history-overlay');
const historyList    = document.getElementById('history-list');
const commentModal   = document.getElementById('comment-modal');
const commentText    = document.getElementById('comment-text');
const cursorLabels   = document.getElementById('cursor-labels');
const docTitleInput  = document.getElementById('doc-title');
const roleBadge      = document.getElementById('role-badge');
const saveVersionModal = document.getElementById('save-version-modal');
const versionNameInput = document.getElementById('version-name-input');
const shareModal     = document.getElementById('share-modal');
const shareLink      = document.getElementById('share-link-input');
const permsList      = document.getElementById('perms-list');

// --- Expose State to Window ---
window.quill = quill;
window.ydoc = ydoc;
window.ytext = ytext;
window.wsProvider = wsProvider;
window.metaWs = metaWs;
window.myId = myId;
window.myName = myName;
window.myColor = myColor;
window.myRole = myRole;
window.docId = docId;
window.users = users;
window.comments = comments;
window.versionHistory = versionHistory;
window.savedRange = savedRange;
window.dbSaveTimer = dbSaveTimer;
window.aiLastSelection = aiLastSelection;
window.recentBadgeTimer = recentBadgeTimer;
window.commentsList = commentsList;
window.commentCount = commentCount;
window.usersList = usersList;
window.userCount = userCount;
window.navAvatars = navAvatars;
window.myAvatarEl = myAvatarEl;
window.recentBadge = recentBadge;
window.toastEl = toastEl;
window.historyPanel = historyPanel;
window.historyOverlay = historyOverlay;
window.historyList = historyList;
window.commentModal = commentModal;
window.commentText = commentText;
window.cursorLabels = cursorLabels;
window.docTitleInput = docTitleInput;
window.roleBadge = roleBadge;
window.saveVersionModal = saveVersionModal;
window.versionNameInput = versionNameInput;
window.shareModal = shareModal;
window.shareLink = shareLink;
window.permsList = permsList;
window.showToast = showToast;
window.syncState = syncState;
window.showLoadingOverlay = showLoadingOverlay;
window.hideLoadingOverlay = hideLoadingOverlay;
window.applyRoleUI = applyRoleUI;
window.debounceDbSave = debounceDbSave;
window.renderUserList = renderUserList;
window.connectMetaWs = connectMetaWs;
window.metaSend = metaSend;
// ------------------------------


// --- Expose State to Window ---
window.quill = quill;
window.ydoc = ydoc;
window.ytext = ytext;
window.wsProvider = wsProvider;
window.metaWs = metaWs;
window.myId = myId;
window.myName = myName;
window.myColor = myColor;
window.myRole = myRole;
window.docId = docId;
window.users = users;
window.comments = comments;
window.versionHistory = versionHistory;
window.savedRange = savedRange;
window.dbSaveTimer = dbSaveTimer;
window.aiLastSelection = aiLastSelection;
window.recentBadgeTimer = recentBadgeTimer;
window.commentsList = commentsList;
window.commentCount = commentCount;
window.usersList = usersList;
window.userCount = userCount;
window.navAvatars = navAvatars;
window.myAvatarEl = myAvatarEl;
window.recentBadge = recentBadge;
window.toastEl = toastEl;
window.historyPanel = historyPanel;
window.historyOverlay = historyOverlay;
window.historyList = historyList;
window.commentModal = commentModal;
window.commentText = commentText;
window.cursorLabels = cursorLabels;
window.docTitleInput = docTitleInput;
window.roleBadge = roleBadge;
window.saveVersionModal = saveVersionModal;
window.versionNameInput = versionNameInput;
window.shareModal = shareModal;
window.shareLink = shareLink;
window.permsList = permsList;
window.showToast = showToast;
window.syncState = syncState;
window.showLoadingOverlay = showLoadingOverlay;
window.hideLoadingOverlay = hideLoadingOverlay;
window.applyRoleUI = applyRoleUI;
window.debounceDbSave = debounceDbSave;
window.renderUserList = renderUserList;
window.connectMetaWs = connectMetaWs;
window.metaSend = metaSend;
// ------------------------------


// ── Init ────────────────────────────────────────────────────────────────
function showLoadingOverlay(msg) {
  let ov = document.getElementById('init-loading-overlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'init-loading-overlay';
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(249,250,251,0.92);backdrop-filter:blur(4px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font-family:Inter,sans-serif;';
    document.body.appendChild(ov);
  }
  ov.innerHTML = '<div style="width:36px;height:36px;border:3px solid #e5e7eb;border-top-color:#10b981;border-radius:50%;animation:spin 0.8s linear infinite"></div><p style="color:#6b7280;font-size:14px;">' + msg + '</p>';
  if (!document.getElementById('init-spin-style')) {
    const s = document.createElement('style');
    s.id = 'init-spin-style';
    s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
    document.head.appendChild(s);
  }
}
function hideLoadingOverlay() {
  const ov = document.getElementById('init-loading-overlay');
  if (ov) ov.remove();
}
function showSessionError(message) {
  const ov = document.getElementById('init-loading-overlay');
  const el = ov || document.createElement('div');
  el.style.cssText = 'position:fixed;inset:0;background:rgba(249,250,251,0.97);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;font-family:Inter,sans-serif;';
  el.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><h3 style="font-size:17px;font-weight:700;color:#111827;margin:0">' + message + '</h3><a href="/auth.html" style="padding:10px 24px;background:#10b981;color:#fff;border-radius:8px;font-weight:600;text-decoration:none;font-size:14px;">Sign in again</a>';
  if (!ov) document.body.appendChild(el);
}
function showForbidden() {
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;gap:16px;font-family:Inter,sans-serif;color:#374151">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      <h2 style="font-size:20px;font-weight:700">Access Denied</h2>
      <p style="color:#6b7280">You don't have permission to view this document.</p>
      <a href="/dashboard.html" style="color:#10b981;font-weight:600;text-decoration:none">← Back to Dashboard</a>
    </div>`;
}

showLoadingOverlay('Connecting…');

(async () => {
  try {
  const sb = getSupabase();
  if (!sb) { showSessionError('Could not connect — please refresh.'); return; }

  showLoadingOverlay('Checking session…');
  const { data: { user }, error: authErr } = await sb.auth.getUser();
  if (authErr || !user) {
    await sb.auth.signOut().catch(() => {});
    showSessionError('Your session has expired.');
    return;
  }

  showLoadingOverlay('Loading profile…');
  let { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
  if (!profile) {
    const username = user.user_metadata?.username || user.email?.split('@')[0] || 'Guest';
    // Try direct insert first
    const { data: newProf } = await sb.from('profiles').insert({ id: user.id, username }).select().single();
    profile = newProf;

    // Fallback: use server API (bypasses RLS for anonymous/guest users)
    if (!profile) {
      try {
        const resp = await fetch('/api/ensure-profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id, username })
        });
        const json = await resp.json();
        if (json.profile) profile = json.profile;
      } catch (e) { console.error('ensure-profile API error:', e); }
    }
  }
  if (!profile) {
    await sb.auth.signOut().catch(() => {});
    showSessionError('Your profile could not be loaded.');
    return;
  }
  myId = profile.id; window.myId = myId; window.myId = myId;
  myName = profile.username; window.myName = myName; window.myName = myName;

  const params = new URLSearchParams(window.location.search);
  docId = params.get('doc');
  if (!docId) { window.location.href = '/dashboard.html'; return; }

  const inviteToken = params.get('invite');

  showLoadingOverlay('Loading document…');
  const { data: doc, error: docErr } = await sb.from('documents').select('*').eq('id', docId).single();
  if (docErr || !doc) { window.location.href = '/dashboard.html'; return; }

  if (doc.owner_id === myId) {
    myRole = 'owner'; window.myRole = myRole; window.myRole = myRole;
  } else {
    let { data: perm } = await sb.from('document_permissions').select('*').eq('doc_id', docId).eq('user_id', myId).single();
    if (!perm && inviteToken) {
      try {
        const decodedRole = atob(inviteToken);
        if (['editor', 'commenter', 'viewer'].includes(decodedRole)) {
          await sb.from('document_permissions').insert({ doc_id: docId, user_id: myId, role: decodedRole });
          perm = { role: decodedRole };
          const url = new URL(window.location.href);
          url.searchParams.delete('invite');
          window.history.replaceState({}, document.title, url.toString());
        }
      } catch (e) { console.error('Invalid invite token', e); }
    }
    if (!perm) return showForbidden();
    myRole = perm.role; window.myRole = myRole; window.myRole = myRole;
  }

  myColor = `hsl(${parseInt(myId.replace(/-/g,''), 16) % 360}, 80%, 45%)`;

  // Apply role UI BEFORE Quill init so toolbar is visible for binding
  applyRoleUI(myRole);

  // ── Initialize Quill ──────────────────────────────────────────────
  const editorContainer = document.getElementById('editor');
  const isReadOnly = myRole === 'viewer';

  window.quill = window.quill = quill = new Quill(editorContainer, {
    theme: 'snow',
    modules: {
      toolbar: isReadOnly ? false : '#toolbar',
      history: { userOnly: true },
      blotFormatter: {},
      cursors: {
        hideDelayMs: 5000,
        hideSpeedMs: 300,
        selectionChangeSource: null,
        transformOnTextChange: true
      }
    },
    placeholder: 'Start typing your collaborative document here…',
    readOnly: isReadOnly
  });
  window._quill = quill;

// Hook the native Image Toolbar button to our custom Modal
quill.getModule('toolbar').addHandler('image', function() {
  if (window.openImageModal) {
    window.openImageModal();
  }
});
 // expose for undo/redo toolbar buttons

  // Strip colors and backgrounds on paste to prevent invisible text
  quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
    delta.ops.forEach(op => {
      if (op.attributes) {
        delete op.attributes.color;
        delete op.attributes.background;
      }
    });
    return delta;
  });

  // ── Initialize Yjs ────────────────────────────────────────────────
  window.ydoc = window.ydoc = ydoc = new Y.Doc();
  window.ytext = window.ytext = ytext = ydoc.getText('quill');

  // Connect y-websocket provider (binary CRDT sync)
  const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${wsProtocol}//${window.location.host}`;
  const roomName = `doc-${docId}`;

  window.wsProvider = window.wsProvider = wsProvider = new WebsocketProvider(wsUrl, roomName, ydoc);

  // Set awareness info (presence/cursors)
  wsProvider.awareness.setLocalStateField('user', {
    id: myId,
    name: myName,
    color: myColor,
    role: myRole
  });

  // Bind Yjs to Quill
  const binding = new QuillBinding(ytext, quill, wsProvider.awareness);

  // Get reference to the cursors module
  const cursors = quill.getModule('cursors');

  // Broadcast local cursor/selection changes to other users
  quill.on('selection-change', (range) => {
    if (range) {
      wsProvider.awareness.setLocalStateField('cursor', {
        anchor: Y.createRelativePositionFromTypeIndex(ytext, range.index),
        head: Y.createRelativePositionFromTypeIndex(ytext, range.index + range.length)
      });
    }
  });

  // ── Seed initial content from Supabase (first time only) ──────────
  // If the Yjs doc is empty and the Supabase doc has content, seed it
  wsProvider.on('sync', (synced) => {
    if (synced && ytext.length === 0 && doc.content) {
      // Insert the existing HTML content into the Quill editor
      // This only happens once when the Yjs doc is fresh
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = doc.content;
      const delta = quill.clipboard.convert({ html: doc.content });
      ytext.applyDelta(delta.ops.map(op => {
        if (typeof op.insert === 'string') return op;
        return op;
      }));
    }
  });

  // Connection status
  wsProvider.on('status', ({ status }) => {
    if (status === 'connected') {
      updateWsStatus('connected', 'Live');
    } else if (status === 'disconnected') {
      updateWsStatus('disconnected', 'Reconnecting…');
    } else {
      updateWsStatus('', 'Connecting…');
    }
  });

  // ── Awareness → User List + Collaborative Cursors ─────────────────
  wsProvider.awareness.on('change', ({ added, updated, removed }) => {
    users = {};
    const myClientId = wsProvider.awareness.clientID;

    wsProvider.awareness.getStates().forEach((state, clientId) => {
      if (state.user) {
        users[state.user.id || clientId] = {
          id: state.user.id || clientId,
          name: state.user.name || 'Anonymous',
          color: state.user.color || '#94a3b8',
          role: state.user.role || 'viewer'
        };
      }

      // Skip our own cursor
      if (clientId === myClientId) return;
      if (!state.user) return;

      const cursorId = String(clientId);
      const userName = state.user.name || 'Anonymous';
      const userColor = state.user.color || '#94a3b8';

      // Create or update the cursor for this remote user
      if (cursors) {
        try {
          cursors.createCursor(cursorId, userName, userColor);
        } catch (e) {
          // cursor already exists — update it
          cursors.removeCursor(cursorId);
          cursors.createCursor(cursorId, userName, userColor);
        }

        // Move cursor to their position if we have it
        if (state.cursor) {
          try {
            const anchor = Y.createAbsolutePositionFromRelativePosition(state.cursor.anchor, ydoc);
            const head = Y.createAbsolutePositionFromRelativePosition(state.cursor.head, ydoc);
            if (anchor && head) {
              cursors.moveCursor(cursorId, {
                index: anchor.index,
                length: head.index - anchor.index
              });
            }
          } catch (e) { /* position not resolvable yet */ }
        }
      }
    });

    // Remove cursors for clients that have left
    if (cursors) {
      removed.forEach(clientId => {
        cursors.removeCursor(String(clientId));
      });
    }

    renderUserList();
  });

  // ── Comments/Versions via custom meta WebSocket ───────────────────
  comments = doc.comments || [];
  versionHistory = doc.versions || [];
  connectMetaWs();

  // ── Auto-save to Supabase ─────────────────────────────────────────
  quill.on('text-change', () => {
    const statusEl = document.getElementById('autosave-status');
    if (statusEl) {
      statusEl.innerHTML = `<span style="display:inline-block; margin-right:4px; font-weight:bold; font-size:16px;">•</span> Saving...`;
    }
    debounceDbSave();
  });
  quill.on('selection-change', (range) => { if (range) aiLastSelection = range; });


  // Apply role UI
  applyRoleUI(myRole);
  docTitleInput.value = doc.title;
  document.title = `${doc.title} – CoDoc`;
  window.renderComments?.();
  window.renderHistory?.();
  // ── Custom Font & Size Select Handlers ─────────────────────────────
  const fontContainer = document.getElementById('custom-font-container');
  if (fontContainer) {
    fontContainer.innerHTML = `
      <select id="custom-font-select" class="tool-select" title="Font Family" style="width:130px;">
        <option value="">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
        <option value="arial">Arial</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="times-new-roman">Times New Roman</option>
        <option value="verdana">Verdana</option>
      </select>
    `;
  }
  
  const sizeContainer = document.getElementById('custom-size-container');
  if (sizeContainer) {
    sizeContainer.innerHTML = `
      <select id="custom-size-select" class="tool-select" title="Font Size" style="width:70px;">
        <option value="8px">8</option>
        <option value="10px">10</option>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="" selected>16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="24px">24</option>
        <option value="28px">28</option>
        <option value="32px">32</option>
        <option value="36px">36</option>
        <option value="48px">48</option>
        <option value="72px">72</option>
      </select>
    `;
  }

  const customFontSelect = document.getElementById('custom-font-select');
  const customSizeSelect = document.getElementById('custom-size-select');

  if (customFontSelect) {
    customFontSelect.addEventListener('change', () => {
      const val = customFontSelect.value;
      quill.format('font', val || false);
      quill.focus();
    });
  }

  if (customSizeSelect) {
    customSizeSelect.addEventListener('change', () => {
      const val = customSizeSelect.value;
      quill.format('size', val || false);
      quill.focus();
    });
  }

  // Keep dropdowns in sync with cursor position
  quill.on('selection-change', () => {
    if (!quill.getSelection()) return;
    const formats = quill.getFormat();

    if (customFontSelect) {
      customFontSelect.value = formats.font || '';
    }
    if (customSizeSelect) {
      customSizeSelect.value = formats.size || '';
    }
  });

  setupMyAvatar();
  hideLoadingOverlay();

  // ── Code Language Picker & Syntax Highlighting ────────────────────
  const codeLangSelect = document.getElementById('code-lang-select');

  // Enable/disable language picker based on whether cursor is in a code block
  quill.on('selection-change', () => {
    if (!codeLangSelect) return;
    const range = quill.getSelection();
    if (!range) return;
    const [block] = quill.scroll.descendant(
      (blot) => blot.statics && blot.statics.blotName === 'code-block',
      range.index
    );
    const inCode = !!block;
    codeLangSelect.style.opacity = inCode ? '1' : '0.45';
    codeLangSelect.style.pointerEvents = inCode ? 'auto' : 'none';
    if (inCode) {
      const lang = block.domNode.getAttribute('data-lang') || 'plaintext';
      codeLangSelect.value = lang;
    }
  });

  // Set language attribute on current code block
  if (codeLangSelect) {
    codeLangSelect.addEventListener('change', () => {
      const range = quill.getSelection();
      if (!range) return;
      quill.format('code-block', true);
      // Store language on the DOM node directly
      const codeBlocks = quill.root.querySelectorAll('.ql-code-block');
      codeBlocks.forEach(bl => {
        // Find the one at current selection
        const blot = Quill.find(bl);
        if (blot) bl.setAttribute('data-lang', codeLangSelect.value);
      });
      applyHighlighting();
    });
  }

  // Apply syntax highlighting to all code blocks
  function applyHighlighting() {
    if (!window.hljs) return;
    quill.root.querySelectorAll('.ql-code-block').forEach(block => {
      const lang = block.getAttribute('data-lang') || 'plaintext';
      // Only highlight if hljs knows this language
      if (lang === 'plaintext' || !hljs.getLanguage(lang)) {
        block.removeAttribute('data-highlighted');
        block.style.color = '';
        return;
      }
      // Prevent double-highlighting
      block.removeAttribute('data-highlighted');
      try {
        const result = hljs.highlight(block.textContent, { language: lang, ignoreIllegals: true });
        block.innerHTML = result.value;
        block.setAttribute('data-highlighted', 'yes');
        block.setAttribute('data-lang', lang);
      } catch (e) {}
    });
  }

  // Re-highlight after text changes (debounced)
  let hlTimer = null;
  quill.on('text-change', () => {
    clearTimeout(hlTimer);
    hlTimer = setTimeout(applyHighlighting, 400);
  });

  // Initial highlight pass
  setTimeout(applyHighlighting, 800);

  // ── Image insertion state ─────────────────────────────────────────
  window._imgInsertIndex = null;
  window._imgTab = 'upload';
  let cropperInstance = null;

  window.openImageModal = function() {
    if (myRole === 'viewer') return;
    window._imgInsertIndex = quill.getSelection()?.index ?? quill.getLength();
    
    // Reset UI
    document.getElementById('img-drop-zone').classList.remove('hidden');
    document.getElementById('img-drop-zone').style.borderColor = '';
    document.getElementById('img-drop-label').textContent = 'Click to choose or drag & drop an image';
    document.getElementById('crop-container').classList.add('hidden');
    document.getElementById('image-url-input').value = '';
    document.getElementById('image-file-input').value = '';
    
    if (cropperInstance) {
      cropperInstance.destroy();
      cropperInstance = null;
    }
    
    switchImgTab('upload');
    document.getElementById('image-modal').classList.remove('hidden');
  };

  window.closeImageModal = function() {
    document.getElementById('image-modal').classList.add('hidden');
    if (cropperInstance) {
      cropperInstance.destroy();
      cropperInstance = null;
    }
  };

  window.switchImgTab = function(tab) {
    window._imgTab = tab;
    document.getElementById('img-tab-upload').classList.toggle('active', tab === 'upload');
    document.getElementById('img-tab-url').classList.toggle('active', tab === 'url');
    document.getElementById('img-panel-upload').classList.toggle('hidden', tab !== 'upload');
    document.getElementById('img-panel-url').classList.toggle('hidden', tab !== 'url');
  };

  window.handleImageFileSelected = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    loadFileIntoCropper(file);
  };

  function loadFileIntoCropper(file) {
    if (file.size > 5 * 1024 * 1024) { // Increased to 5MB since we compress on output
      showToast('⚠️ Image must be under 5MB', '#f59e0b');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      document.getElementById('img-drop-zone').classList.add('hidden');
      const cropContainer = document.getElementById('crop-container');
      const cropImage = document.getElementById('crop-image');
      
      cropContainer.classList.remove('hidden');
      cropImage.src = ev.target.result;
      
      if (cropperInstance) cropperInstance.destroy();
      
      // Small delay to ensure image is rendered
      setTimeout(() => {
        cropperInstance = new Cropper(cropImage, {
          viewMode: 1,
          autoCropArea: 0.95,
          dragMode: 'move',
          background: false,
        });
      }, 50);
    };
    reader.readAsDataURL(file);
  }

  window.confirmInsertImage = function() {
    const idx = window._imgInsertIndex ?? quill.getLength();
    
    if (window._imgTab === 'upload') {
      if (!cropperInstance) { showToast('Please select and crop an image first.'); return; }
      
      // Get the cropped image data URL (compressed to save DB space)
      const croppedCanvas = cropperInstance.getCroppedCanvas({
        maxWidth: 1600,
        maxHeight: 1600,
      });
      
      if (!croppedCanvas) { showToast('Error cropping image.'); return; }
      const finalBase64 = croppedCanvas.toDataURL('image/jpeg', 0.85);

      quill.insertEmbed(idx, 'image', finalBase64, 'user');
      quill.setSelection(idx + 1);
    } else {
      const url = document.getElementById('image-url-input').value.trim();
      if (!url) { showToast('Please enter an image URL.'); return; }
      quill.insertEmbed(idx, 'image', url, 'user');
      quill.setSelection(idx + 1);
    }
    window.closeImageModal();
    showToast('🖼️ Image inserted!', '#10b981');
    debounceDbSave();
  };

  // Close image modal on backdrop click
  document.getElementById('image-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('image-modal')) window.closeImageModal();
  });

  // Drag-and-drop onto drop zone
  const dropZone = document.getElementById('img-drop-zone');
  if (dropZone) {
    dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.borderColor = '#10b981'; });
    dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = ''; });
    dropZone.addEventListener('drop', e => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (!file || !file.type.startsWith('image/')) return;
      document.getElementById('image-file-input').files = e.dataTransfer.files; // Sync with input
      loadFileIntoCropper(file);
    });
  }

  // ── Drag & Drop Images directly on Editor ────────────────────────
  let draggedImageIndex = null;
  let draggedImageUrl = null;

  quill.root.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      const blot = Quill.find(e.target);
      if (blot) {
        draggedImageIndex = quill.getIndex(blot);
        draggedImageUrl = e.target.src;
        e.dataTransfer.setData('text/plain', ''); // required for Firefox
      }
    }
  });

  quill.root.addEventListener('dragover', (e) => {
    if (draggedImageIndex !== null || (e.dataTransfer.types && e.dataTransfer.types.includes('Files'))) {
      e.preventDefault();
    }
  });

  quill.root.addEventListener('drop', (e) => {
    if (draggedImageIndex !== null && draggedImageUrl !== null) {
      e.preventDefault();
      const currentUrl = draggedImageUrl;
      const oldIndex = draggedImageIndex;
      
      draggedImageIndex = null;
      draggedImageUrl = null;

      let dropIndex = getDropIndex(e, quill);
      
      if (dropIndex !== null && dropIndex !== undefined) {
         let insertIndex = dropIndex;
         if (insertIndex > oldIndex) {
            insertIndex -= 1;
         }
         quill.deleteText(oldIndex, 1, 'user');
         quill.insertEmbed(insertIndex, 'image', currentUrl, 'user');
         quill.setSelection(insertIndex + 1);
         debounceDbSave();
      }
    } else if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        e.preventDefault();
        let dropIndex = getDropIndex(e, quill);
        window._imgInsertIndex = dropIndex !== null ? dropIndex : quill.getLength();
        
        document.getElementById('img-drop-zone').classList.add('hidden');
        document.getElementById('crop-container').classList.add('hidden');
        switchImgTab('upload');
        document.getElementById('image-modal').classList.remove('hidden');
        
        document.getElementById('image-file-input').files = e.dataTransfer.files; 
        loadFileIntoCropper(file);
      }
    }
  });

  function getDropIndex(e, quillInstance) {
    if (document.caretPositionFromPoint) {
      const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
      if (pos && pos.offsetNode) {
        const range = document.createRange();
        range.setStart(pos.offsetNode, pos.offset);
        range.collapse(true);
        const sel = document.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        return quillInstance.getSelection()?.index;
      }
    } else if (document.caretRangeFromPoint) {
      const range = document.caretRangeFromPoint(e.clientX, e.clientY);
      if (range) {
        const sel = document.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        return quillInstance.getSelection()?.index;
      }
    }
    return null;
  }

  } catch(err) {
    console.error('Editor init error:', err);
    showSessionError('Failed to load: ' + (err.message || 'unknown error'));
  }
})();

// ── WS Status ───────────────────────────────────────────────────────────
function updateWsStatus(state, label) {
  const el = document.getElementById('ws-status');
  const txt = document.getElementById('ws-status-text');
  if (!el || !txt) return;
  el.className = 'ws-status ' + state;
  txt.textContent = label;
}

// ── Meta WebSocket (comments, versions) ─────────────────────────────────
function connectMetaWs() {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  metaWs = new WebSocket(`${protocol}//${window.location.host}`);

  metaWs.addEventListener('open', () => {
    metaSend({ type: 'meta-join', docId, userId: myId, userName: myName, userColor: myColor, userRole: myRole });
  });

  metaWs.addEventListener('message', (event) => {
    if (typeof event.data !== 'string') return; // ignore binary
    let msg;
    try { msg = JSON.parse(event.data); } catch { return; }
    if (msg.type === 'sync-state') {
      window.comments = window.comments = comments = msg.comments;
      window.versionHistory = window.versionHistory = versionHistory = msg.versionHistory;
      window.renderComments?.();
      window.renderHistory?.();
    }
  });

  metaWs.addEventListener('close', () => {
    setTimeout(connectMetaWs, 2000);
  });
}

function metaSend(obj) {
  if (metaWs && metaWs.readyState === WebSocket.OPEN) {
    metaWs.send(JSON.stringify(obj));
  }
}

function syncState() {
  metaSend({ type: 'sync-state', comments, versionHistory });
  debounceDbSave();
}

async function saveToHistoryApi(content) {
  if (!myId || !docId || myRole === 'viewer') return;
  try {
    const res = await fetch('/api/save-history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: myId, documentId: docId, content })
    });
    const data = await res.json();
    if (data.success && data.version) {
      const statusEl = document.getElementById('autosave-status');
      if (statusEl) {
        statusEl.classList.remove('hidden');
        statusEl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Autosaved';
        setTimeout(() => statusEl.classList.add('hidden'), 3000);
      }
    }
  } catch (e) {
    console.error('Auto-save history failed', e);
  }
}

function debounceDbSave() {
  if (myRole === 'viewer') return;
  clearTimeout(dbSaveTimer);
  dbSaveTimer = setTimeout(async () => {
    const sb = getSupabase();
    const currentContent = quill ? quill.root.innerHTML : '';
    if (sb && quill) {
      sb.from('documents').update({
        content: currentContent,
        comments: comments,
        versions: versionHistory
      }).eq('id', docId).then(() => {
        const statusEl = document.getElementById('autosave-status');
        if (statusEl) statusEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Autosaved`;
      });
    }
    await saveToHistoryApi(currentContent);
  }, 2000);
}

window.addEventListener('beforeunload', () => {
  if (myRole === 'viewer' || !quill) return;
  const content = quill.root.innerHTML;
  if (!content) return;
  const data = new Blob([JSON.stringify({ userId: myId, documentId: docId, content })], { type: 'application/json' });
  navigator.sendBeacon('/api/save-history', data);
});

// ── Role UI ─────────────────────────────────────────────────────────────
function applyRoleUI(role) {
  const editorEls = document.querySelectorAll('.editor-only');
  const commenterEls = document.querySelectorAll('.commenter-only');
  const viewerEls = document.querySelectorAll('.viewer-only');
  const ownerEls = document.querySelectorAll('.owner-only');

  editorEls.forEach(el => el.classList.toggle('hidden', role !== 'owner' && role !== 'editor'));
  commenterEls.forEach(el => el.classList.toggle('hidden', role !== 'commenter'));
  viewerEls.forEach(el => el.classList.toggle('hidden', role !== 'viewer'));
  ownerEls.forEach(el => el.classList.toggle('hidden', role !== 'owner'));

  const badgeLabels = { owner: 'Owner', editor: 'Editor', commenter: 'Commenter', viewer: 'Viewer' };
  roleBadge.textContent = badgeLabels[role] || role;
  roleBadge.className = 'role-badge-nav role-' + role;

  if (role === 'owner') loadPermissions();
}

// ── Doc Title ───────────────────────────────────────────────────────────
docTitleInput.addEventListener('change', async () => {
  const sb = getSupabase();
  if ((myRole === 'owner' || myRole === 'editor') && sb) {
    const newTitle = docTitleInput.value.trim() || 'Untitled';
    docTitleInput.value = newTitle;
    document.title = `${newTitle} – CoDoc`;
    await sb.from('documents').update({ title: newTitle }).eq('id', docId);
    showToast('📝 Title updated');
  }
});

// ── Save Version Button ─────────────────────────────────────────────────
document.getElementById('save-version-btn')?.addEventListener('click', () => {
  if (myRole !== 'owner' && myRole !== 'editor') return;
  versionNameInput.value = '';
  saveVersionModal.classList.remove('hidden');
  setTimeout(() => versionNameInput.focus(), 50);
});

// ── My Avatar ───────────────────────────────────────────────────────────
function setupMyAvatar() {
  if (!myAvatarEl) return;
  myAvatarEl.style.background = myColor;
  myAvatarEl.textContent = myName.charAt(0).toUpperCase();
  myAvatarEl.title = `${myName} (You)`;
}

// ── User List ───────────────────────────────────────────────────────────
function renderUserList() {
  const userArr = Object.values(users);
  userCount.textContent = userArr.length;

  // Navbar avatars
  navAvatars.innerHTML = '';
  userArr.slice(0, 5).forEach(u => {
    if (u.id === myId) return;
    const av = document.createElement('div');
    av.className = 'avatar';
    av.style.background = u.color;
    av.textContent = u.name.charAt(0).toUpperCase();
    av.title = u.name;
    navAvatars.appendChild(av);
  });

  // Sidebar list
  usersList.innerHTML = '';
  userArr.forEach(u => {
    const badgeClass = 'role-' + (u.role || 'viewer');
    usersList.innerHTML += `
      <div class="user-item">
        <span class="user-pulse" style="background:${u.color}"></span>
        <span class="user-name-item">${escapeHtml(u.name)}</span>
        <span class="doc-role-badge ${badgeClass}">${(u.role || 'viewer').toUpperCase()}</span>
        ${u.id === myId ? '<span class="user-you">You</span>' : ''}
      </div>`;
  });
}

// ── Permissions ─────────────────────────────────────────────────────────
async function loadPermissions() {
  try {
    const sb = getSupabase();
    const { data: perms } = await sb.from('document_permissions').select('*, profiles:user_id(username)').eq('doc_id', docId);
    if (!perms) return;
    renderPermissions(perms.map(p => ({ userId: p.user_id, role: p.role, username: p.profiles?.username })));
  } catch {}
}

function renderPermissions(perms) {
  permsList.innerHTML = '';
  if (perms.length === 0) {
    permsList.innerHTML = '<p style="font-size:12px;color:#9ca3af;padding:8px 10px">No shared users yet.</p>';
    return;
  }
  perms.forEach(p => {
    const item = document.createElement('div');
    item.className = 'user-item';
    item.style.flexWrap = 'wrap';
    item.innerHTML = `
      <span class="user-dot" style="background:#6b7280"></span>
      <span class="user-name-item" style="flex:1">${escapeHtml(p.username)}</span>
      <select class="perm-select" data-uid="${p.userId}" style="font-size:11px;border:1px solid #e5e7eb;border-radius:4px;padding:2px 4px;cursor:pointer">
        <option value="editor" ${p.role==='editor'?'selected':''}>Editor</option>
        <option value="commenter" ${p.role==='commenter'?'selected':''}>Commenter</option>
        <option value="viewer" ${p.role==='viewer'?'selected':''}>Viewer</option>
        <option value="remove">Remove</option>
      </select>`;
    item.querySelector('.perm-select').addEventListener('change', async function() {
      const sb = getSupabase();
      if (this.value === 'remove') {
        await sb.from('document_permissions').delete().eq('doc_id', docId).eq('user_id', this.dataset.uid);
      } else {
        await sb.from('document_permissions').update({ role: this.value }).eq('doc_id', docId).eq('user_id', this.dataset.uid);
      }
      showToast('Permission updated');
      loadPermissions();
    });
    permsList.appendChild(item);
  });
}

// ── Recent Change Badge ─────────────────────────────────────────────────
function showRecentChange(name, color) {
  recentBadge.textContent = `✏️ ${name} is editing`;
  recentBadge.style.borderLeft = `3px solid ${color}`;
  recentBadge.classList.remove('hidden');
  clearTimeout(recentBadgeTimer);
  recentBadgeTimer = setTimeout(() => recentBadge.classList.add('hidden'), 3000);
}

// --- Extracted to export.js ---
// ── Toast ───────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(message, color = null) {
  toastEl.textContent = message;
  toastEl.className = 'toast' + (color ? ' has-color' : '');
  if (color) toastEl.style.borderLeftColor = color;
  toastEl.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.add('hidden'), 3500);
}


// --- Extracted to utils.js ---
// ── Speech to Text (Dictation) ──────────────────────────────────────────
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// 1. Editor Dictation
const dictationBtn = document.getElementById('dictation-btn');
if (SpeechRecognition && dictationBtn) {
  let isDictating = false;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;
  
  recognition.onstart = () => {
    isDictating = true;
    dictationBtn.style.color = '#ef4444'; // red mic
    showToast('🎤 Listening... (Say "new line", "comma", "period")');
  };
  
  recognition.onresult = (event) => {
    if (!quill) return;
    const result = event.results[event.results.length - 1];
    let transcript = result[0].transcript.trim();
    const lower = transcript.toLowerCase();
    
    // Commands
    if (lower === 'new line') transcript = '\n';
    else if (lower === 'comma') transcript = ',';
    else if (lower === 'period' || lower === 'full stop') transcript = '.';
    else if (lower === 'question mark') transcript = '?';
    else transcript = ' ' + transcript;
    
    const range = quill.getSelection(true);
    if (range) {
      quill.insertText(range.index, transcript);
      quill.setSelection(range.index + transcript.length);
    }
  };
  
  recognition.onend = () => {
    isDictating = false;
    dictationBtn.style.color = '';
  };
  
  dictationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (myRole === 'viewer') {
      showToast('You do not have permission to edit.');
      return;
    }
    if (isDictating) recognition.stop();
    else recognition.start();
  });
} else if (dictationBtn) {
  dictationBtn.style.display = 'none';
}

// 2. AI Chat Dictation
const aiMicBtn = document.getElementById('ai-mic-btn');
if (SpeechRecognition && aiMicBtn) {
  let isAiDictating = false;
  const aiRec = new SpeechRecognition();
  aiRec.continuous = false;
  aiRec.interimResults = false;
  
  aiRec.onstart = () => {
    isAiDictating = true;
    aiMicBtn.style.color = '#ef4444';
  };
  
  aiRec.onresult = (event) => {
    const speech = event.results[0][0].transcript;
    const currentVal = aiChatInput.value;
    aiChatInput.value = currentVal ? currentVal + ' ' + speech : speech;
    aiChatInput.style.height = 'auto';
    aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 120) + 'px';
  };
  
  aiRec.onend = () => {
    isAiDictating = false;
    aiMicBtn.style.color = '#9ca3af';
  };
  
  aiMicBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isAiDictating) aiRec.stop();
    else aiRec.start();
  });
} else if (aiMicBtn) {
  aiMicBtn.style.display = 'none';
}

// ── AI Action Confirmation ────────────────────────────────────────────────
window.pendingAiAction = null;

window.confirmAiAction = function(id) {
  if (!window.pendingAiAction || window.pendingAiAction.id !== id) return;
  const { action, content, selection } = window.pendingAiAction;
  
  if (action === 'replace') {
    if (selection && selection.length > 0) {
      quill.deleteText(selection.index, selection.length);
      quill.insertText(selection.index, content);
    } else {
      quill.setText('');
      quill.insertText(0, content);
    }
  } else if (action === 'insert') {
    const idx = selection ? selection.index + selection.length : quill.getLength();
    quill.insertText(idx, content);
  }
  
  document.getElementById(id).innerHTML = `<div class="chat-bubble-content" style="font-size:12px; color:var(--emerald);">✓ Change applied successfully.</div>`;
  window.pendingAiAction = null;
  debounceDbSave();
};

window.cancelAiAction = function(id) {
  if (!window.pendingAiAction || window.pendingAiAction.id !== id) return;
  document.getElementById(id).innerHTML = `<div class="chat-bubble-content" style="font-size:12px; color:var(--text-muted);">✗ Change cancelled.</div>`;
  window.pendingAiAction = null;
};


// --- Extracted to theme.js ---

// --- Run Modules ---
setupComments();
setupHistory();
setupAiChat();
setupSharing();
