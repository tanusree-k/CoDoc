const fs = require('fs');
const path = require('path');

// --- 1. ai-chat.js ---
const aiChatPath = path.join(__dirname, 'src', 'ai-chat.js');
let aiChatContent = fs.readFileSync(aiChatPath, 'utf8');

// The issue with aiChatInput not allowing typing is usually because editor.js's Quill or Yjs bindings capture Document-level keydowns,
// OR the user cannot type because focus is constantly stolen. Let's make sure bubbling is stopped.
const aiInputEventStr = `aiChatInput?.addEventListener('keydown', (e) => {`;
const aiInputEventReplace = `aiChatInput?.addEventListener('keydown', (e) => {
  e.stopPropagation(); // Stop Quill from stealing focus entirely
`;
aiChatContent = aiChatContent.replace(aiInputEventStr, aiInputEventReplace);
fs.writeFileSync(aiChatPath, aiChatContent);


// --- 2. editor.js (Image Binding) ---
const editorJSPath = path.join(__dirname, 'src', 'editor.js');
let editorJSContent = fs.readFileSync(editorJSPath, 'utf8');

const targetQuillInitMatch = `window._quill = quill;`;
const insertImageHandler = `window._quill = quill;

// Hook the native Image Toolbar button to our custom Modal
quill.getModule('toolbar').addHandler('image', function() {
  if (window.openImageModal) {
    window.openImageModal();
  }
});
`;
editorJSContent = editorJSContent.replace(targetQuillInitMatch, insertImageHandler);
fs.writeFileSync(editorJSPath, editorJSContent);


// --- 3. Auth Restrictions: sharing.js ---
const sharingPath = path.join(__dirname, 'src', 'sharing.js');
let sharingContent = fs.readFileSync(sharingPath, 'utf8');

const btnShareAddStr = `document.getElementById('share-btn')?.addEventListener('click', () => {`;
const btnShareAddReplace = `document.getElementById('share-btn')?.addEventListener('click', () => {
  if (typeof myName !== 'undefined' && myName.startsWith('Guest')) {
    alert('Please sign in to share documents.');
    window.location.href = '/auth.html';
    return;
  }
`;
sharingContent = sharingContent.replace(btnShareAddStr, btnShareAddReplace);
fs.writeFileSync(sharingPath, sharingContent);

// --- 4. Auth Restrictions: export.js ---
const exportPath = path.join(__dirname, 'src', 'export.js');
let exportContent = fs.readFileSync(exportPath, 'utf8');

const btnExportAddStr = `export function toggleExportMenu() {`;
const btnExportAddReplace = `export function toggleExportMenu() {
  if (typeof myName !== 'undefined' && myName.startsWith('Guest')) {
    alert('Please sign in to export documents.');
    window.location.href = '/auth.html';
    return;
  }
`;
exportContent = exportContent.replace(btnExportAddStr, btnExportAddReplace);
fs.writeFileSync(exportPath, exportContent);

console.log('JS files patched successfully');
