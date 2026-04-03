const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'public', 'dashboard.js');
let content = fs.readFileSync(srcPath, 'utf8');

// 1. We need global docs array
content = content.replace("let currentUser = null;", "let currentUser = null;\nlet allDocs = [];");

// 2. We need to refactor grid rendering in loadDocs to use a renderDocs function
const gridRenderSearch = `
    const grid = document.getElementById('docs-grid');
    if (grid) {
      grid.classList.remove('hidden');
      grid.innerHTML = '';
      docs.forEach((doc, i) => grid.appendChild(createDocCard(doc, i)));
    }`;

const gridRenderReplace = `
    allDocs = docs;
    renderDocs(allDocs);
`;
content = content.replace(gridRenderSearch, gridRenderReplace);

// 3. Add renderDocs function and search listener
const actionsSection = `// ── Actions ───────────────────────────────────────────────────────`;
const renderAndSearch = `
function renderDocs(docsToRender) {
  const grid = document.getElementById('docs-grid');
  const emptyEl = document.getElementById('empty-state');
  
  if (!grid) return;
  grid.innerHTML = '';

  if (docsToRender.length === 0) {
    grid.classList.add('hidden');
    if (emptyEl) {
      emptyEl.classList.remove('hidden');
      emptyEl.querySelector('h3').textContent = allDocs.length === 0 ? 'No documents yet' : 'No matches found';
      emptyEl.querySelector('p').textContent = allDocs.length === 0 ? 'Click "New Document" to create your first one.' : 'Try a different search term.';
    }
    return;
  }

  if (emptyEl) emptyEl.classList.add('hidden');
  grid.classList.remove('hidden');
  docsToRender.forEach((doc, i) => grid.appendChild(createDocCard(doc, i)));
}

const searchInput = document.getElementById('doc-search');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allDocs.filter(d => d.title.toLowerCase().includes(term));
    renderDocs(filtered);
  });
}

// ── Actions ───────────────────────────────────────────────────────`;
content = content.replace(actionsSection, renderAndSearch);


// 4. Enhanced Dates and Avatars in createDocCard
const cardRenderOld = `
    <div class="doc-meta">
      <span>Edited \${timeAgo(doc.updatedAt)}</span>
      \${!isOwner ? '<span>by ' + escHtml(doc.ownerName || '') + '</span>' : ''}
    </div>`;

const cardRenderNew = `
    <div class="doc-meta" style="display:flex; justify-content:space-between; align-items:flex-start;">
      <div>
        <div style="font-size: 13px; color: #4b5563;">\${formatDate(doc.updatedAt)}</div>
        <div style="font-size: 12px; color: #9ca3af; margin-top: 2px;">\${timeAgo(doc.updatedAt)}</div>
      </div>
      \${!isOwner ? '<div class="avatar" style="width:24px;height:24px;font-size:12px;background:#6366f1;">' + (doc.ownerName ? doc.ownerName.charAt(0).toUpperCase() : 'U') + '</div>' : ''}
    </div>`;
content = content.replace(cardRenderOld, cardRenderNew);

// 5. Add formatDate utility
const utilsEnd = `function timeAgo(iso) {`;
const formatDateFn = `
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function timeAgo(iso) {`;
content = content.replace(utilsEnd, formatDateFn);

fs.writeFileSync(srcPath, content);
console.log('dashboard.js patched successfully');
