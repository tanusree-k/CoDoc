const fs = require('fs');
const path = require('path');

// --- editor.js auth UI patch ---
const editorFile = path.join(__dirname, 'src', 'editor.js');
let editorHTML = fs.readFileSync(editorFile, 'utf8');

const targetEditorName = `const nameEl = document.getElementById('user-name');
  if (nameEl) nameEl.textContent = myName || 'Anonymous';`;
const replaceEditorName = `const nameEl = document.getElementById('user-name');
  if (nameEl) nameEl.textContent = myName || 'Anonymous';
  if ((myName || '').startsWith('Guest')) {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.textContent = 'Sign In to Save';
      logoutBtn.style.background = '#10b981';
      logoutBtn.style.color = '#fff';
      logoutBtn.style.border = 'none';
      logoutBtn.style.padding = '8px 12px';
      logoutBtn.style.borderRadius = '6px';
    }
  }
`;
editorHTML = editorHTML.replace(targetEditorName, replaceEditorName);
fs.writeFileSync(editorFile, editorHTML);

// --- dashboard.js auth UI patch ---
const dashFile = path.join(__dirname, 'public', 'dashboard.js');
let dashJS = fs.readFileSync(dashFile, 'utf8');

const targetDashName = `const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = currentUser.username;`;
const replaceDashName = `const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = currentUser.username;
    if (currentUser.username.startsWith('Guest')) {
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.textContent = 'Sign In to Save';
        logoutBtn.style.background = '#10b981';
        logoutBtn.style.color = '#fff';
        logoutBtn.style.border = 'none';
        logoutBtn.style.padding = '8px 12px';
        logoutBtn.style.borderRadius = '6px';
      }
    }
`;
dashJS = dashJS.replace(targetDashName, replaceDashName);
fs.writeFileSync(dashFile, dashJS);

console.log('UI Auth buttons patched');
