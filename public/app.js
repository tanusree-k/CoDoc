/* ─────────────────────────────────────────────────────────────────
   CoDoc — app.js  |  WebSocket client + editor logic
───────────────────────────────────────────────────────────────── */

// ── State ──────────────────────────────────────────────────────────
let ws = null;
let myId = null;
let myName = '';
let myColor = '#10b981';
let users = {};
let comments = [];
let versionHistory = [];
let savedRange = null;      // saved selection for comment anchoring
let changeTimer = null;
let recentBadgeTimer = null;
let cursorUpdateTimer = null;
let isRemoteUpdate = false; // prevent echo

// ── DOM refs ────────────────────────────────────────────────────────
const joinModal    = document.getElementById('join-modal');
const appEl        = document.getElementById('app');
const usernameInput= document.getElementById('username-input');
const joinBtn      = document.getElementById('join-btn');
const editor       = document.getElementById('editor');
const commentsList = document.getElementById('comments-list');
const commentCount = document.getElementById('comment-count');
const usersList    = document.getElementById('users-list');
const userCount    = document.getElementById('user-count');
const navAvatars   = document.getElementById('nav-user-avatars');
const myAvatarEl   = document.getElementById('my-avatar');
const recentBadge  = document.getElementById('recent-change-badge');
const toastEl      = document.getElementById('toast');
const historyPanel = document.getElementById('history-panel');
const historyOverlay = document.getElementById('history-overlay');
const historyList  = document.getElementById('history-list');
const commentModal = document.getElementById('comment-modal');
const commentText  = document.getElementById('comment-text');
const summaryModal = document.getElementById('summary-modal');
const summaryContent = document.getElementById('summary-content');
const addCommentBtn = document.getElementById('add-comment-btn');
const cursorLabels = document.getElementById('cursor-labels');

// ── Join ────────────────────────────────────────────────────────────
joinBtn.addEventListener('click', joinDoc);
usernameInput.addEventListener('keydown', e => { if (e.key === 'Enter') joinDoc(); });

function joinDoc() {
  const name = usernameInput.value.trim();
  if (!name) { usernameInput.focus(); shake(usernameInput); return; }
  myName = name;
  joinModal.classList.add('hidden');
  appEl.classList.remove('hidden');
  connectWS();
}

function shake(el) {
  el.style.animation = 'none';
  el.style.borderColor = '#ef4444';
  setTimeout(() => { el.style.borderColor = ''; }, 800);
}

// ── WebSocket ───────────────────────────────────────────────────────
function connectWS() {
  const proto = location.protocol === 'https:' ? 'wss' : 'ws';
  ws = new WebSocket(`${proto}://${location.host}`);

  ws.onopen = () => {
    ws.send(JSON.stringify({ type: 'join', name: myName }));
  };

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    handleMessage(msg);
  };

  ws.onclose = () => {
    setTimeout(connectWS, 2000);
    showToast('Connection lost. Reconnecting…', '#ef4444');
  };
}

function send(data) {
  if (ws && ws.readyState === 1) ws.send(JSON.stringify(data));
}

// ── Message Handler ─────────────────────────────────────────────────
function handleMessage(msg) {
  switch (msg.type) {
    case 'init':
      myId = msg.userId;
      myColor = msg.color;
      setupMyAvatar();
      isRemoteUpdate = true;
      editor.innerHTML = msg.content;
      isRemoteUpdate = false;
      users = {};
      msg.users.forEach(u => { users[u.id] = u; });
      renderUserList();
      comments = msg.comments || [];
      renderComments();
      versionHistory = msg.versionHistory || [];
      renderHistory();
      break;

    case 'text-change':
      if (msg.userId === myId) return;
      isRemoteUpdate = true;
      const sel = saveSelection(editor);
      editor.innerHTML = msg.content;
      restoreSelection(editor, sel);
      isRemoteUpdate = false;
      showRecentChange(msg.userName, msg.userColor);
      break;

    case 'user-list':
      users = {};
      msg.users.forEach(u => { users[u.id] = u; });
      renderUserList();
      break;

    case 'cursor-update':
      if (msg.userId === myId) return;
      showCursorLabel(msg.userId, msg.userName, msg.userColor, msg.position);
      break;

    case 'add-comment':
      comments.push(msg.comment);
      renderComments();
      showToast(`💬 ${msg.comment.author} added a comment`);
      break;

    case 'resolve-comment':
      const rc = comments.find(c => c.id === msg.commentId);
      if (rc) { rc.resolved = true; renderComments(); }
      break;

    case 'reply-comment':
      const rpc = comments.find(c => c.id === msg.commentId);
      if (rpc) { rpc.replies.push(msg.reply); renderComments(); }
      break;

    case 'version-saved':
      versionHistory.unshift(msg.version);
      renderHistory();
      showToast(`💾 Version "${msg.version.name}" saved`);
      break;

    case 'notification':
      showToast(msg.message, msg.color);
      break;

    case 'recent-change':
      showRecentChange(msg.userName, msg.userColor);
      break;
  }
}

// ── Editor Events ───────────────────────────────────────────────────
editor.addEventListener('input', () => {
  if (isRemoteUpdate) return;
  clearTimeout(changeTimer);
  changeTimer = setTimeout(() => {
    send({ type: 'text-change', content: editor.innerHTML });
  }, 80);
});

editor.addEventListener('keyup', trackCursor);
editor.addEventListener('mouseup', trackCursor);
editor.addEventListener('selectionchange', () => {
  clearTimeout(cursorUpdateTimer);
  cursorUpdateTimer = setTimeout(trackCursor, 100);
});

function trackCursor() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;
  const range = sel.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  if (rect) {
    send({
      type: 'cursor-update',
      position: { top: rect.top + window.scrollY, left: rect.left + window.scrollX }
    });
  }
}

// ── Cursor Labels ───────────────────────────────────────────────────
const cursorLabelMap = {};
function showCursorLabel(userId, name, color, pos) {
  let el = cursorLabelMap[userId];
  if (!el) {
    el = document.createElement('div');
    el.className = 'cursor-label';
    cursorLabels.appendChild(el);
    cursorLabelMap[userId] = el;
  }
  el.textContent = name;
  el.style.background = color;
  el.style.top = (pos.top - 26) + 'px';
  el.style.left = pos.left + 'px';
  // Auto-hide after 3s
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => { el.style.opacity = '0'; }, 3000);
  el.style.opacity = '1';
}

// ── Format Commands ─────────────────────────────────────────────────
function fmt(command) {
  editor.focus();
  document.execCommand(command, false, null);
  send({ type: 'text-change', content: editor.innerHTML });
  updateToolbarState();
}

function changeFontSize(size) {
  editor.focus();
  document.execCommand('fontSize', false, '7');
  const spans = editor.querySelectorAll('font[size="7"]');
  spans.forEach(s => {
    s.removeAttribute('size');
    s.style.fontSize = size;
    // Replace font tag with span for cleaner HTML
    const span = document.createElement('span');
    span.style.fontSize = size;
    span.innerHTML = s.innerHTML;
    s.parentNode.replaceChild(span, s);
  });
  send({ type: 'text-change', content: editor.innerHTML });
}

function applyTextColor(color) {
  editor.focus();
  document.execCommand('foreColor', false, color);
  send({ type: 'text-change', content: editor.innerHTML });
}

function applyHighlight(color) {
  editor.focus();
  document.execCommand('hiliteColor', false, color);
  send({ type: 'text-change', content: editor.innerHTML });
}

function updateToolbarState() {
  document.getElementById('btn-bold').classList.toggle('active', document.queryCommandState('bold'));
  document.getElementById('btn-italic').classList.toggle('active', document.queryCommandState('italic'));
  document.getElementById('btn-underline').classList.toggle('active', document.queryCommandState('underline'));
}

document.addEventListener('selectionchange', updateToolbarState);

// Keyboard shortcuts
editor.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey) {
    if (e.key === 'b') { e.preventDefault(); fmt('bold'); }
    if (e.key === 'i') { e.preventDefault(); fmt('italic'); }
    if (e.key === 'u') { e.preventDefault(); fmt('underline'); }
    if (e.key === 's') { e.preventDefault(); triggerSaveVersion(); }
  }
});

// ── My Avatar ────────────────────────────────────────────────────────
function setupMyAvatar() {
  myAvatarEl.textContent = myName.charAt(0).toUpperCase();
  myAvatarEl.style.background = myColor;
  myAvatarEl.title = myName + ' (You)';
}

// ── User List ────────────────────────────────────────────────────────
function renderUserList() {
  const list = Object.values(users);
  userCount.textContent = list.length;

  // Nav avatars (exclude self)
  navAvatars.innerHTML = '';
  list.filter(u => u.id !== myId).slice(0, 5).forEach(u => {
    const av = document.createElement('div');
    av.className = 'avatar';
    av.textContent = u.name.charAt(0).toUpperCase();
    av.style.background = u.color;
    av.title = u.name;
    navAvatars.appendChild(av);
  });

  // Sidebar list
  usersList.innerHTML = '';
  list.forEach(u => {
    const item = document.createElement('div');
    item.className = 'user-item';
    const isMe = u.id === myId;
    item.innerHTML = `
      <span class="user-dot" style="background:${u.color}"></span>
      <span class="user-name-item">${escapeHtml(u.name)}</span>
      ${isMe ? '<span class="user-you">You</span>' : ''}
    `;
    usersList.appendChild(item);
  });
}

// ── Recent Change Badge ───────────────────────────────────────────────
function showRecentChange(name, color) {
  recentBadge.textContent = `✏️ ${name} is editing`;
  recentBadge.style.borderLeft = `3px solid ${color}`;
  recentBadge.classList.remove('hidden');
  clearTimeout(recentBadgeTimer);
  recentBadgeTimer = setTimeout(() => recentBadge.classList.add('hidden'), 3000);
}

// ── Comments ──────────────────────────────────────────────────────────
function startAddComment() {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) {
    showToast('Select some text first to add a comment.');
    return;
  }
  savedRange = sel.getRangeAt(0).cloneRange();
  commentText.value = '';
  commentModal.classList.remove('hidden');
  setTimeout(() => commentText.focus(), 50);
}

function cancelComment() {
  commentModal.classList.add('hidden');
  savedRange = null;
}

function submitComment() {
  const text = commentText.value.trim();
  if (!text) return;

  // Wrap selection in anchor span
  let anchor = null;
  if (savedRange) {
    try {
      const span = document.createElement('span');
      span.className = 'comment-anchor';
      span.id = 'anchor-' + Date.now();
      savedRange.surroundContents(span);
      anchor = span.id;
      send({ type: 'text-change', content: editor.innerHTML });
    } catch(e) { /* selection may be complex; proceed without anchor */ }
  }

  send({ type: 'add-comment', text, anchor });
  commentModal.classList.add('hidden');
  savedRange = null;
}

function renderComments() {
  const active = comments.filter(c => !c.resolved);
  const resolved = comments.filter(c => c.resolved);
  const all = [...active, ...resolved];

  commentCount.textContent = active.length;

  if (all.length === 0) {
    commentsList.innerHTML = `
      <div class="no-comments">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <p>No comments yet.<br/>Select text and click Comment.</p>
      </div>`;
    return;
  }

  commentsList.innerHTML = '';
  all.forEach(c => {
    const card = document.createElement('div');
    card.className = 'comment-card' + (c.resolved ? ' resolved' : '');
    card.innerHTML = `
      <div class="comment-author">
        <span class="comment-dot" style="background:${c.authorColor}"></span>
        <span class="comment-name">${escapeHtml(c.author)}</span>
        <span class="comment-time">${timeAgo(c.timestamp)}</span>
      </div>
      <div class="comment-text">${escapeHtml(c.text)}</div>
      ${c.replies.length > 0 ? `<div class="comment-replies">
        ${c.replies.map(r => `<div class="reply-item">
          <span class="reply-dot" style="background:${r.authorColor}"></span>
          <div class="reply-content"><span class="reply-author">${escapeHtml(r.author)}: </span>${escapeHtml(r.text)}</div>
        </div>`).join('')}
      </div>` : ''}
      ${!c.resolved ? `
      <div class="reply-input-row">
        <input class="reply-input" placeholder="Reply…" id="reply-${c.id}" />
        <button class="reply-send-btn" onclick="sendReply('${c.id}')">→</button>
      </div>
      <div class="comment-actions">
        <button class="comment-action-btn" onclick="resolveComment('${c.id}')">✓ Resolve</button>
      </div>` : '<div class="comment-actions"><span class="comment-action-btn">✓ Resolved</span></div>'}
    `;
    commentsList.appendChild(card);
  });
}

function sendReply(commentId) {
  const input = document.getElementById('reply-' + commentId);
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  send({ type: 'reply-comment', commentId, text });
}

function resolveComment(commentId) {
  send({ type: 'resolve-comment', commentId });
  const c = comments.find(x => x.id === commentId);
  if (c) { c.resolved = true; renderComments(); }
}

// ── Version History ────────────────────────────────────────────────────
document.getElementById('history-btn').addEventListener('click', () => {
  historyPanel.classList.remove('hidden');
  historyOverlay.classList.remove('hidden');
});

function closeHistory() {
  historyPanel.classList.add('hidden');
  historyOverlay.classList.add('hidden');
}

const saveVersionModal = document.getElementById('save-version-modal');
const versionNameInput = document.getElementById('version-name-input');

function triggerSaveVersion() {
  versionNameInput.value = '';
  saveVersionModal.classList.remove('hidden');
  setTimeout(() => versionNameInput.focus(), 50);
}

function cancelSaveVersion() {
  saveVersionModal.classList.add('hidden');
}

function confirmSaveVersion() {
  const name = versionNameInput.value.trim();
  send({ type: 'save-version', name });
  saveVersionModal.classList.add('hidden');
}

versionNameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') confirmSaveVersion();
  if (e.key === 'Escape') cancelSaveVersion();
});

saveVersionModal.addEventListener('click', e => { if (e.target === saveVersionModal) cancelSaveVersion(); });

document.getElementById('save-version-btn').addEventListener('click', triggerSaveVersion);

function renderHistory() {
  if (versionHistory.length === 0) {
    historyList.innerHTML = '<div class="no-comments"><p>No saved versions yet.<br>Press Ctrl+S or click "Save" to create one.</p></div>';
    return;
  }
  historyList.innerHTML = '';
  versionHistory.forEach(v => {
    const item = document.createElement('div');
    item.className = 'version-item';
    item.innerHTML = `
      <div class="version-name">${escapeHtml(v.name)}</div>
      <div class="version-meta">by ${escapeHtml(v.author)} · ${timeAgo(v.timestamp)}</div>
      <button class="version-restore-btn" onclick="restoreVersion('${v.id}')">Restore this version</button>
    `;
    historyList.appendChild(item);
  });
}

function restoreVersion(versionId) {
  if (!confirm('Restore this version? Current content will be replaced.')) return;
  send({ type: 'restore-version', versionId });
  closeHistory();
}

// ── Summarize ──────────────────────────────────────────────────────────
document.getElementById('summarize-btn').addEventListener('click', () => {
  const text = editor.innerText.trim();
  if (!text || text.length < 20) {
    showToast('Write some content first to summarize!');
    return;
  }

  const words = text.split(/\s+/).filter(Boolean);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
  const paraCount = editor.querySelectorAll('p, div, h1, h2, h3, h4, li').length;

  // Extract first 2-3 sentences as "summary"
  const summaryText = sentences.slice(0, 3).map(s => s.trim()).join('. ') + (sentences.length > 3 ? '…' : '.');

  // Key phrases (simple: most repeated non-stop words)
  const stopWords = new Set(['the','a','an','and','or','but','in','on','at','to','for','of','with','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','shall','can','this','that','these','those','it','its','their','they','he','she','we','you','i','my','our','your','his','her']);
  const freq = {};
  words.forEach(w => {
    const clean = w.toLowerCase().replace(/[^a-z]/g,'');
    if (clean.length > 3 && !stopWords.has(clean)) freq[clean] = (freq[clean]||0)+1;
  });
  const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([w])=>w);

  summaryContent.innerHTML = `
    <div class="summary-stat">
      <div class="stat-item"><span class="stat-value">${words.length}</span><span class="stat-label">Words</span></div>
      <div class="stat-item"><span class="stat-value">${sentences.length}</span><span class="stat-label">Sentences</span></div>
      <div class="stat-item"><span class="stat-value">${Math.ceil(words.length/200)}</span><span class="stat-label">Min read</span></div>
      <div class="stat-item"><span class="stat-value">${Object.values(users).length}</span><span class="stat-label">Collaborators</span></div>
    </div>
    <p style="font-size:13px;font-weight:600;color:#374151;margin-bottom:8px;">📝 AI Summary</p>
    <p class="summary-text">${escapeHtml(summaryText)}</p>
    ${topWords.length > 0 ? `
    <p style="font-size:13px;font-weight:600;color:#374151;margin:16px 0 8px;">🔑 Key Topics</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${topWords.map(w=>`<span style="background:#d1fae5;color:#065f46;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500">${w}</span>`).join('')}
    </div>` : ''}
    <p style="font-size:11px;color:#9ca3af;margin-top:16px">✨ Summary generated by CoDoc AI</p>
  `;
  summaryModal.classList.remove('hidden');
});

function closeSummary() { summaryModal.classList.add('hidden'); }

// Close modals on backdrop click
summaryModal.addEventListener('click', e => { if (e.target === summaryModal) closeSummary(); });
commentModal.addEventListener('click', e => { if (e.target === commentModal) cancelComment(); });

// ── Toast ──────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(message, color = null) {
  toastEl.textContent = message;
  toastEl.className = 'toast' + (color ? ' has-color' : '');
  if (color) toastEl.style.borderLeftColor = color;
  toastEl.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.add('hidden'), 3500);
}

// ── Selection Save/Restore ─────────────────────────────────────────────
function saveSelection(containerEl) {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  // Compute character offset from start of container
  const preCaretRange = document.createRange();
  preCaretRange.selectNodeContents(containerEl);
  preCaretRange.setEnd(range.startContainer, range.startOffset);
  const start = preCaretRange.toString().length;
  preCaretRange.setEnd(range.endContainer, range.endOffset);
  const end = preCaretRange.toString().length;
  return { start, end };
}

function restoreSelection(containerEl, saved) {
  if (!saved) return;
  try {
    const range = createRangeFromOffset(containerEl, saved.start, saved.end);
    if (!range) return;
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } catch(e) {}
}

function createRangeFromOffset(el, start, end) {
  let charIndex = 0;
  const range = document.createRange();
  range.setStart(el, 0);
  range.collapse(true);
  const nodeStack = [el];
  let node, foundStart = false, stop = false;

  while (!stop && (node = nodeStack.pop())) {
    if (node.nodeType === 3) {
      const nextCharIndex = charIndex + node.length;
      if (!foundStart && start >= charIndex && start <= nextCharIndex) {
        range.setStart(node, start - charIndex);
        foundStart = true;
      }
      if (foundStart && end >= charIndex && end <= nextCharIndex) {
        range.setEnd(node, end - charIndex);
        stop = true;
      }
      charIndex = nextCharIndex;
    } else {
      let i = node.childNodes.length;
      while (i--) nodeStack.push(node.childNodes[i]);
    }
  }
  return range;
}

// ── Utilities ──────────────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function timeAgo(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff/60) + 'm ago';
  if (diff < 86400) return Math.floor(diff/3600) + 'h ago';
  return Math.floor(diff/86400) + 'd ago';
}

// ── Enter on join input ────────────────────────────────────────────────
usernameInput.focus();
