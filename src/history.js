
import { escapeHtml, timeAgo } from './utils.js';
export function setupHistory() {
  // ── Version History ─────────────────────────────────────────────────────
document.getElementById('history-btn')?.addEventListener('click', async () => {
  if (window.myRole === 'viewer') {
    window.showToast('Only editors can view full history.');
    return;
  }
  window.historyPanel.classList.remove('hidden');
  window.historyOverlay.classList.remove('hidden');
  window.historyList.innerHTML = '<div class="no-comments"><p>Loading history...</p></div>';
  try {
    const res = await fetch(`/api/history/${window.myId}?docId=${window.docId}`);
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || 'Network error');
    }
    const data = await res.json();
    if (data && data.versions) {
      renderHistoryGrid(data.versions);
    } else {
      throw new Error('Invalid response format');
    }
  } catch (e) {
    console.error('[History] Fetch failed:', e);
    window.historyList.innerHTML = `<div class="no-comments" style="color:#ef4444;"><p>Failed to load history:<br/>${e.message}</p></div>`;
  }
});

window.closeHistory = function() {
  window.historyPanel.classList.add('hidden');
  window.historyOverlay.classList.add('hidden');
};

window.cancelSaveVersion = function() { window.saveVersionModal.classList.add('hidden'); };
window.confirmSaveVersion = function() {
  const name = window.versionNameInput.value.trim();
  window.versionHistory.unshift({
    id: 'v' + Date.now(),
    name: name || 'Unnamed Version',
    content: window.quill.root.innerHTML,
    author: window.myName,
    timestamp: new Date().toISOString()
  });
  window.syncState();
  window.renderHistory?.();
  window.saveVersionModal.classList.add('hidden');
  window.showToast(`💾 Version "${name || 'Unnamed Version'}" saved`);
};

window.versionNameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') window.confirmSaveVersion();
  if (e.key === 'Escape') window.cancelSaveVersion();
});

function renderHistoryGrid(apiVersions) {
  if (!apiVersions || apiVersions.length === 0) {
    window.historyList.innerHTML = '<div class="no-comments"><p>No saved versions yet.</p></div>';
    return;
  }
  window.historyList.innerHTML = '';
  const total = apiVersions.length;
  apiVersions.forEach((v, index) => {
    const vNumber = total - index;
    const item = document.createElement('div');
    item.className = 'version-item';
    item.innerHTML = `
      <div class="version-name" style="display:flex; justify-content:space-between; align-items:center; width: 100%;">
        <span>Version v${vNumber}</span>
        <button class="btn-primary-sm restore-btn" style="padding: 4px 10px; font-size: 11px; z-index: 10;">Restore</button>
      </div>
      <div class="version-meta">${timeAgo(v.created_at)}</div>
    `;
    item.querySelector('.restore-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Restore Version v${vNumber}? Current content will be replaced.`)) {
        const delta = window.quill.clipboard.convert({ html: v.content });
        window.quill.setContents(delta);
        window.showToast(`🔄 Restored Version v${vNumber}`);
        window.debounceDbSave(); // trigger a save
        window.closeHistory();
      }
    });
    window.historyList.appendChild(item);
  });
}

window.renderHistory = function() {
  // Legacy renderHistory for compat
}


}
