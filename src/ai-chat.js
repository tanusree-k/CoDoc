
export function setupAiChat() {
  // ── AI Chat ─────────────────────────────────────────────────────────────
const aiChatPanel = document.getElementById('ai-chat-panel');
const aiChatOverlay = document.getElementById('ai-chat-overlay');
const aiChatMessages = document.getElementById('ai-chat-messages');
const aiChatInput = document.getElementById('ai-chat-input');

document.getElementById('ai-chat-btn')?.addEventListener('click', () => {
  const isOpen = aiChatPanel.classList.contains('open');
  if (isOpen) { window.closeAIChat(); }
  else {
    aiChatPanel.classList.add('open');
    aiChatOverlay.classList.remove('hidden');
    document.getElementById('ai-chat-btn')?.classList.add('active');
    aiChatInput?.focus();
  }
});

window.closeAIChat = function() {
  aiChatPanel.classList.remove('open');
  aiChatOverlay.classList.add('hidden');
  document.getElementById('ai-chat-btn')?.classList.remove('active');
};

window.sendChatMessage = async function() {
  const input = aiChatInput;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  input.style.height = 'auto';

  const includeCtx = document.getElementById('include-doc-ctx')?.checked;
  let prompt = text;
  
  let selectedTextObj = '';
  if (window.quill && window.aiLastSelection && window.aiLastSelection.length > 0) {
    selectedTextObj = window.quill.getText(window.aiLastSelection.index, window.aiLastSelection.length);
  }

  if (includeCtx && window.quill) {
    prompt = `Document Content:\n\n${window.quill.getText()}\n\n---\n\n`;
    if (selectedTextObj) {
      prompt += `User's Currently Selected Text:\n"${selectedTextObj}"\n\n---\n\n`;
    }
    prompt += `User Request: ${text}`;
  }

  aiChatMessages.innerHTML += `
    <div class="chat-bubble-user"><div class="chat-bubble-content">${escapeHtml(text)}</div><div class="chat-time">Now</div></div>
    <div class="chat-bubble-ai typing-indicator" id="ai-typing"><div class="chat-bubble-content"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

  try {
    const resp = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'chat', text: prompt })
    });
    const data = await resp.json();
    document.getElementById('ai-typing')?.remove();
    
    if (data.reply || data.action) {
      aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content">${escapeHtml(data.reply || "Done.")}</div><div class="chat-time">Now</div></div>`;
      
      if (data.action && data.action !== 'none' && data.content && window.quill && window.myRole !== 'viewer') {
        window.pendingAiAction = {
          action: data.action,
          content: data.content,
          selection: window.aiLastSelection ? { ...aiLastSelection } : null
        };
        const actionId = 'ai-action-' + Date.now();
        window.pendingAiAction.id = actionId;
        
        aiChatMessages.innerHTML += `
          <div class="chat-bubble-ai" id="${actionId}" style="opacity:0.95; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08);">
            <div class="chat-bubble-content" style="font-size:13px; color:#e5e7eb;">
              <strong>Proposed Change:</strong><br/>
              <pre style="white-space: pre-wrap; font-family:var(--font-mono); font-size:11px; background:rgba(0,0,0,0.3); padding:6px; border-radius:4px; max-height:150px; overflow-y:auto; margin-top:6px; margin-bottom:8px; color:#9ca3af;">${escapeHtml(data.content)}</pre>
              <div style="display:flex; gap:8px;">
                <button onclick="confirmAiAction('${actionId}')" class="btn-primary-sm" style="flex:1;">Paste</button>
                <button onclick="cancelAiAction('${actionId}')" class="btn-ghost-sm" style="flex:1;">Cancel</button>
              </div>
            </div>
          </div>`;
      }
    } else if (data.error) {
      aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content" style="color:#f87171">Error: ${escapeHtml(data.error || 'Unknown error')}</div></div>`;
    }
  } catch (err) {
    document.getElementById('ai-typing')?.remove();
    aiChatMessages.innerHTML += `<div class="chat-bubble-ai"><div class="chat-bubble-content" style="color:#f87171">Network error</div></div>`;
  }
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
};

window.sendQuickPrompt = function(type) {
  const selectedText = window.quill ? window.quill.getText(window.quill.getSelection()?.index || 0, window.quill.getSelection()?.length || 0) : '';
  if (type === 'summarize') {
    aiChatInput.value = selectedText ? 'Summarize:\n\n"' + selectedText + '"' : 'Summarize this document.';
  } else if (type === 'polish') {
    aiChatInput.value = selectedText
      ? 'Polish and improve this text:\n\n"' + selectedText + '"'
      : 'Please polish and improve the writing style of this document.';
  } else if (type === 'translate') {
    const lang = prompt('Translate to what language?', 'Spanish');
    if (!lang) return;
    aiChatInput.value = selectedText
      ? 'Translate to ' + lang + ':\n\n"' + selectedText + '"'
      : 'Translate this document to ' + lang + '.';
  }
  window.sendChatMessage();
};

aiChatInput?.addEventListener('keydown', (e) => {
  e.stopPropagation(); // Stop Quill from stealing focus entirely

  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); window.sendChatMessage(); }
});
aiChatInput?.addEventListener('input', () => {
  aiChatInput.style.height = 'auto';
  aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 120) + 'px';
});

window.commentModal.addEventListener('click', e => { if (e.target === window.commentModal) window.cancelComment(); });


}
