
import { escapeHtml, timeAgo } from './utils.js';

export function setupComments() {
  // Attach all window functions
  // ── Comments ────────────────────────────────────────────────────────────
window.toggleCommentsSidebar = function() {
  const sidebar = document.getElementById('comments-sidebar');
  if (sidebar) sidebar.classList.toggle('hidden');
};

window.startAddComment = function() {
  if (window.myRole === 'viewer') return;
  const range = window.quill?.getSelection();
  if (!range || range.length === 0) { window.showToast('Select some text first to add a comment.'); return; }
  window.savedRange = range;
  window.commentText.value = '';
  window.commentModal.classList.remove('hidden');
  setTimeout(() => window.commentText.focus(), 50);
};

window.cancelComment = function() { window.commentModal.classList.add('hidden'); window.savedRange = null; };

window.submitComment = function() {
  const text = window.commentText.value.trim();
  if (!text) return;
  let selectedText = '';
  if (window.savedRange && window.quill) {
    selectedText = window.quill.getText(window.savedRange.index, window.savedRange.length);
    // Highlight the selected text with a background color
    window.quill.formatText(window.savedRange.index, window.savedRange.length, 'background', '#fef3c7');
  }
  window.comments.push({
    id: 'c' + Date.now(),
    author: window.myName,
    authorColor: window.myColor,
    text,
    selectedText: selectedText || null,
    timestamp: new Date().toISOString(),
    resolved: false,
    replies: []
  });
  window.syncState();
  window.renderComments?.();
  window.commentModal.classList.add('hidden');
  window.savedRange = null;
};

window.renderComments = function() {
  const active = window.comments.filter(c => !c.resolved);
  const resolved = window.comments.filter(c => c.resolved);
  window.commentCount.textContent = active.length;

  if ([...active, ...resolved].length === 0) {
    window.commentsList.innerHTML = `
      <div class="no-comments">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <p>No comments yet.<br/>Select text and click Comment.</p>
      </div>`;
    return;
  }

  window.commentsList.innerHTML = '';
  [...active, ...resolved].forEach(c => {
    const card = document.createElement('div');
    card.className = 'comment-card' + (c.resolved ? ' resolved' : '');
    card.id = 'comment-card-' + c.id;
    const canAct = window.myRole !== 'viewer';
    card.innerHTML = `
      <div class="comment-author">
        <span class="comment-dot" style="background:${c.authorColor || '#d1d5db'}"></span>
        <span class="comment-name">${escapeHtml(c.author)}</span>
        <span class="comment-time">${timeAgo(c.timestamp)}</span>
      </div>
      ${c.selectedText ? `<div class="comment-quoted">"${escapeHtml(c.selectedText)}"</div>` : ''}
      <div class="comment-text">${escapeHtml(c.text)}</div>
      ${c.replies.length > 0 ? `<div class="comment-replies">${c.replies.map(r=>`
        <div class="reply-item">
          <span class="reply-dot" style="background:${r.authorColor || '#d1d5db'}"></span>
          <div class="reply-content"><span class="reply-author">${escapeHtml(r.author)}: </span>${escapeHtml(r.text)}</div>
        </div>`).join('')}</div>` : ''}
      ${canAct && !c.resolved ? `
      <div class="reply-input-row">
        <input class="reply-input" placeholder="Reply… (Enter to send)" id="reply-${c.id}" onkeydown="if(event.key==='Enter') sendReply('${c.id}')" />
        <button class="reply-send-btn" onclick="sendReply('${c.id}')">→</button>
      </div>
      <div class="comment-actions">
        <button class="comment-action-btn" onclick="resolveComment('${c.id}')">✓ Resolve</button>
      </div>` : !c.resolved ? '' : '<div class="comment-actions"><span class="comment-action-btn">✓ Resolved</span></div>'}
    `;
    window.commentsList.appendChild(card);
  });
}

window.sendReply = function(commentId) {
  const input = document.getElementById('reply-' + commentId);
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  const c = window.comments.find(x => x.id === commentId);
  if (c) {
    c.replies.push({ author: window.myName, authorColor: window.myColor, text, timestamp: new Date().toISOString() });
    window.syncState();
    window.renderComments?.();
  }
};

window.resolveComment = function(commentId) {
  const c = window.comments.find(x => x.id === commentId);
  if (c) {
    c.resolved = true;
    window.syncState();
    window.renderComments?.();
  }
};


}
