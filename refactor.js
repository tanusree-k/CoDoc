const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'editor.js');
let content = fs.readFileSync(srcPath, 'utf8');

// The goal is to move some mostly-isolated logic out to demonstrate modularity without breaking the core state.

function extractSection(headerStr, endRegex) {
  const startIndex = content.indexOf(headerStr);
  if (startIndex === -1) return '';
  const afterHeader = content.substring(startIndex);
  const match = afterHeader.match(endRegex);
  const endIndex = match ? startIndex + match.index : content.length;
  
  const extracted = content.substring(startIndex, endIndex);
  
  // Remove from original
  content = content.substring(0, startIndex) + content.substring(endIndex);
  return extracted;
}

// 1. Extract Utilities
const utilsHeader = '// ── Utilities ───────────────────────────────────────────────────────────\n';
let utilsSection = extractSection(utilsHeader, /\n\n\/\//);

// 2. Extract Theme Toggle
const themeHeader = '// ── Theme Toggle ────────────────────────────────────────────────────────\n';
let themeSection = extractSection(themeHeader, /$/); // till end of file

// 3. Extract Export
const exportHeader = '// ── Export ───────────────────────────────────────────────────────────────\n';
let exportSection = extractSection(exportHeader, /\n\n\/\//);

// Make them module exports and fix references
// For utilities:
utilsSection = utilsSection.replace('function escapeHtml(str)', 'export function escapeHtml(str)');
utilsSection = utilsSection.replace('function timeAgo(iso)', 'export function timeAgo(iso)');

// For Export:
exportSection = exportSection.replace('window.toggleExportMenu = function()', 'export function toggleExportMenu()');
exportSection = exportSection.replace('window.exportDocument = function(format)', 'export function exportDocument(format, quill, title)');
// We need to fix escapeHtml reference in Export, or just leave it attached to window if we are sloppy, but let's do it right.
exportSection = `import { escapeHtml } from './utils.js';
import { showToast } from './ui.js';\n` + exportSection;


// For Theme:
themeSection = themeSection.replace('window.toggleTheme = function()', 'export function toggleTheme()');

// Write utils.js
fs.writeFileSync(path.join(__dirname, 'src', 'utils.js'), utilsSection);

// Write theme.js
fs.writeFileSync(path.join(__dirname, 'src', 'theme.js'), themeSection);

// Write Export
fs.writeFileSync(path.join(__dirname, 'src', 'export.js'), exportSection);

// We need to inject imports at the top of editor.js
const imports = `import { escapeHtml, timeAgo } from './utils.js';
import { toggleTheme } from './theme.js';
import { toggleExportMenu, exportDocument } from './export.js';
`;

content = content.replace(/(import .*;\n)+/, (match) => match + imports + '\n');

// Fix the window assignments in editor.js to instead export them or we don't even need to if we just wire them correctly.
// Actually, the HTML relies on `window.toggleTheme()`. So if we use ES modules with `esbuild --bundle`, we must attach them to window or use addEventListener.
// Let's attach them to window in editor.js:
const windowAttachments = `
// Expose modules to global for HTML inline onclick handlers
window.escapeHtml = escapeHtml;
window.timeAgo = timeAgo;
window.toggleTheme = toggleTheme;
window.toggleExportMenu = toggleExportMenu;
window.exportDocument = (format) => exportDocument(format, quill, document.getElementById('doc-title').value.trim() || 'Untitled Document');
`;

content += '\n' + windowAttachments;

// Additionally, extract AI Chat into its own file
const aiHeader = '// ── AI Chat ─────────────────────────────────────────────────────────────\n';
let aiSection = extractSection(aiHeader, /\n\n\/\//);
aiSection = `import { escapeHtml } from './utils.js';\n` + aiSection;
// the ai chat section references myRole, docId, quill, aiLastSelection, debounceDbSave, showToast. 
// It's heavily coupled! Instead of extracting it fully blindly, let's just create an ai-chat wrapper or we can skip extracting AI chat and extract Speech-to-text instead.

// Let's extract Speech to text
const speechHeader = '// ── Speech to Text (Dictation) ──────────────────────────────────────────\n';
let speechSection = extractSection(speechHeader, /\n// ──/);

const speechWrapper = `
export function setupSpeechToText(quill, myRole, showToastWrapper) {
${speechSection.replace(/showToast\(/g, 'showToastWrapper(')}
}
`;
fs.writeFileSync(path.join(__dirname, 'src', 'speech.js'), speechWrapper);
content += '\nimport { setupSpeechToText } from "./speech.js";\nsetupSpeechToText(quill, myRole, showToast);\n';

fs.writeFileSync(srcPath, content);
console.log('Refactoring complete!');
