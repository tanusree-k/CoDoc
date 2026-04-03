const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'editor.js');
let content = fs.readFileSync(srcPath, 'utf8');

function extractSection(headerStr, endStr) {
  const startIndex = content.indexOf(headerStr);
  if (startIndex === -1) return '';
  const afterHeader = content.substring(startIndex);
  const localEndIndex = afterHeader.indexOf(endStr);
  const endIndex = localEndIndex !== -1 ? startIndex + localEndIndex : content.length;
  const extracted = content.substring(startIndex, endIndex);
  content = content.substring(0, startIndex) + content.substring(endIndex);
  return extracted;
}

// 1. Comments
const commentsHeader = '// ── Comments ────────────────────────────────────────────────────────────';
const historyHeader = '// ── Version History ─────────────────────────────────────────────────────';
let commentsSection = extractSection(commentsHeader, historyHeader);
const commentsJS = `
import { escapeHtml, timeAgo } from './utils.js';

export function setupComments() {
  // Attach all window functions
  ${commentsSection.replace(/window\.(\w+) = function/g, 'window.$1 = function')}
}
`;
fs.writeFileSync(path.join(__dirname, 'src', 'comments.js'), commentsJS);

// 2. History
const aiHeader = '// ── AI Chat ─────────────────────────────────────────────────────────────';
let historySection = extractSection(historyHeader, aiHeader);
const historyJS = `
import { escapeHtml } from './utils.js';
export function setupHistory() {
  ${historySection}
}
`;
fs.writeFileSync(path.join(__dirname, 'src', 'history.js'), historyJS);

// 3. AI Chat
const shareHeader = '// ── Share ───────────────────────────────────────────────────────────────';
let aiSection = extractSection(aiHeader, shareHeader);
const aiJS = `
export function setupAiChat() {
  ${aiSection}
}
`;
fs.writeFileSync(path.join(__dirname, 'src', 'ai-chat.js'), aiJS);

// 4. Sharing
const exportHeader = '// --- Extracted to export.js ---';
// Wait, the previous extraction left "// --- Extracted to export.js ---"
let shareSection = extractSection(shareHeader, exportHeader);
const shareJS = `
export function setupSharing() {
  ${shareSection}
}
`;
fs.writeFileSync(path.join(__dirname, 'src', 'sharing.js'), shareJS);

const importsString = `
import { setupComments } from './comments.js';
import { setupHistory } from './history.js';
import { setupAiChat } from './ai-chat.js';
import { setupSharing } from './sharing.js';
`;

// Inject imports
content = importsString + '\\n' + content;

// Inject setup calls right after init logic (e.g. around line 300 where other things are set up)
// The safest place is at the end of the file.
content += `\n// --- Run Modules ---\nsetupComments();\nsetupHistory();\nsetupAiChat();\nsetupSharing();\n`;

fs.writeFileSync(srcPath, content);
console.log('Split completed');
