const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'editor.js');
let content = fs.readFileSync(srcPath, 'utf8');

function extractAndReplace(headerStr, endStr, moduleName) {
  const startIndex = content.indexOf(headerStr);
  if (startIndex === -1) {
    console.log(`Could not find ${headerStr}`);
    return '';
  }

  const afterHeader = content.substring(startIndex);
  const localEndIndex = afterHeader.indexOf(endStr);
  const endIndex = localEndIndex !== -1 ? startIndex + localEndIndex : content.length;
  
  const extracted = content.substring(startIndex, endIndex);
  
  // Replace the extracted section with an import or a marker
  content = content.substring(0, startIndex) + `\n// --- Extracted to ${moduleName} ---\n` + content.substring(endIndex);
  return extracted;
}

// 1. Extract Utilities
const utilsHeader = '// ── Utilities';
const utilsEnd = '// ── Speech to Text (Dictation)';
let utilsSection = extractAndReplace(utilsHeader, utilsEnd, 'utils.js');
utilsSection = utilsSection.replace('function escapeHtml', 'export function escapeHtml');
utilsSection = utilsSection.replace('function timeAgo', 'export function timeAgo');

// 2. Extract Theme Toggle
const themeHeader = '// ── Theme Toggle';
const themeEnd = '// ── END OF FILE ──'; // doesn't exist, will go to end
let themeSection = extractAndReplace(themeHeader, themeEnd, 'theme.js');
themeSection = themeSection.replace('window.toggleTheme = function', 'export function toggleTheme');

// 3. Extract Export
const exportHeader = '// ── Export';
const exportEnd = '// ── Toast';
let exportSection = extractAndReplace(exportHeader, exportEnd, 'export.js');
exportSection = exportSection.replace('window.toggleExportMenu = function', 'export function toggleExportMenu');
// Add imports to top of export.js
exportSection = `import { escapeHtml } from './utils.js';\n` + exportSection;


// Generate module files
fs.writeFileSync(path.join(__dirname, 'src', 'utils.js'), utilsSection);
fs.writeFileSync(path.join(__dirname, 'src', 'theme.js'), themeSection);
fs.writeFileSync(path.join(__dirname, 'src', 'export.js'), exportSection);


// Inject imports into editor.js
const imports = `import { escapeHtml, timeAgo } from './utils.js';
import { toggleTheme } from './theme.js';
import { toggleExportMenu } from './export.js';
`;
content = imports + '\n' + content;

// Put the globally needed functions back onto the window right after imports so the HTML onclick handlers keep working
const windowAttachments = `
// Expose modules to global for HTML inline onclick handlers
window.escapeHtml = escapeHtml;
window.timeAgo = timeAgo;
window.toggleTheme = toggleTheme;
window.toggleExportMenu = toggleExportMenu;
`;
content = content.replace(imports, imports + windowAttachments);

// Write modified editor.js back
fs.writeFileSync(srcPath, content);
console.log('Refactoring successful.');
