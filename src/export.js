import { escapeHtml } from './utils.js';
// ── Export ───────────────────────────────────────────────────────────────
export function toggleExportMenu() {
  if (typeof window.myName !== 'undefined' && myName.startsWith('Guest')) {
    alert('Please sign in to export documents.');
    window.location.href = '/auth.html';
    return;
  }

  const menu = document.getElementById('export-dropdown');
  menu.classList.toggle('hidden');
  if (!menu.classList.contains('hidden')) {
    setTimeout(() => {
      const handler = (e) => {
        if (!menu.contains(e.target) && !e.target.closest('#export-btn')) {
          menu.classList.add('hidden');
          document.removeEventListener('click', handler);
        }
      };
      document.addEventListener('click', handler);
    }, 0);
  }
};

window.exportDocument = function(format) {
  document.getElementById('export-dropdown').classList.add('hidden');
  const title = docTitleInput.value.trim() || 'Untitled Document';

  if (format === 'html') {
    const html = `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>${escapeHtml(title)}</title>\n<style>body{font-family:Georgia,'Times New Roman',serif;max-width:780px;margin:40px auto;padding:0 24px;line-height:1.75;color:#111827;}</style>\n</head>\n<body>\n<h1>${escapeHtml(title)}</h1>\n${quill.root.innerHTML}\n</body></html>`;
    downloadFile(title + '.html', html, 'text/html');
    window.showToast('📄 Exported as HTML', '#10b981');
  } else if (format === 'txt') {
    downloadFile(title + '.txt', quill.getText(), 'text/plain');
    window.showToast('📄 Exported as TXT', '#10b981');
  } else if (format === 'pdf') {
    const printW = window.open('', '_blank');
    printW.document.write(`<!DOCTYPE html><html><head><title>${escapeHtml(title)}</title>\n<style>body{font-family:Georgia,'Times New Roman',serif;max-width:780px;margin:40px auto;padding:0 24px;line-height:1.75;color:#111827;}@media print{body{margin:0;padding:20px;}}</style>\n</head><body><h1>${escapeHtml(title)}</h1>${quill.root.innerHTML}</body></html>`);
    printW.document.close();
    printW.focus();
    setTimeout(() => { printW.print(); printW.close(); }, 400);
    window.showToast('🖨️ Print/PDF dialog opened', '#10b981');
  }
};

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType + ';charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
}

