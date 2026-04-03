
import { escapeHtml } from './utils.js';
export function setupHistory() {
  // ── Version History ─────────────────────────────────────────────────────
document.getElementById('history-btn')?.addEventListener('click', async () => {
  if (myRole === 'viewer') {
    showToast('Only editors can view full history.');
    return;
  }
  historyPanel.classList.remove('hidden');
  historyOverlay.classList.remove('hidden');
  historyList.innerHTML = '<div class="no-comments"><p>Loading history...</p></div>';
  try {
    const res = await fetch(`/api/history/${myId}?docId=${docId}`);
    const data = await res.json();
    if (data.versions) {
      renderHistoryGrid(data.versions);
    } else {
      throw new Error();
    }
  } catch (e) {
    historyList.innerHTML = '<div class="no-comments"><p>Failed to load history.</p></div>';
  }
});

window.closeHistory = function() {
  historyPanel.classList.add('hidden');
  historyOverlay.classList.add('hidden');
};

window.cancelSaveVersion = function() { saveVersionModal.classList.add('hidden'); };
window.confirmSaveVersion = function() {
  const name = versionNameInput.value.trim();
  versionHistory.unshift({
    id: 'v' + Date.now(),
    name: name || 'Unnamed Version',
    content: quill.root.innerHTML,
    author: myName,
    timestamp: new Date().toISOString()
  });
  syncState();
  renderHistory();
  saveVersionModal.classList.add('hidden');
  showToast(`💾 Version "${name || 'Unnamed Version'}" saved`);
};

versionNameInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') window.confirmSaveVersion();
  if (e.key === 'Escape') window.cancelSaveVersion();
});

function renderHistoryGrid(apiVersions) {
  if (!apiVersions || apiVersions.length === 0) {
    historyList.innerHTML = '<div class="no-comments"><p>No saved versions yet.</p></div>';
    return;
  }
  historyList.innerHTML = '';
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
        const delta = quill.clipboard.convert({ html: v.content });
        quill.setContents(delta);
        showToast(`🔄 Restored Version v${vNumber}`);
        debounceDbSave(); // trigger a save
        window.closeHistory();
      }
    });
    historyList.appendChild(item);
  });
}

function renderHistory() {
  // Legacy renderHistory for compat
}


}
