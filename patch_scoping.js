const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// 1. Patch editor.js
const editorPath = path.join(srcDir, 'editor.js');
let editorContent = fs.readFileSync(editorPath, 'utf8');

// List of variables to expose
const stateVars = [
  'quill', 'ydoc', 'ytext', 'wsProvider', 'metaWs',
  'myId', 'myName', 'myColor', 'myRole', 'docId',
  'users', 'comments', 'versionHistory', 'savedRange',
  'dbSaveTimer', 'aiLastSelection', 'recentBadgeTimer',
  'commentsList', 'commentCount', 'usersList', 'userCount',
  'navAvatars', 'myAvatarEl', 'recentBadge', 'toastEl',
  'historyPanel', 'historyOverlay', 'historyList',
  'commentModal', 'commentText', 'cursorLabels',
  'docTitleInput', 'roleBadge', 'saveVersionModal', 'versionNameInput',
  'shareModal', 'shareLink', 'permsList'
];

// List of functions to expose
const helperFuncs = [
  'showToast', 'syncState', 'showLoadingOverlay', 'hideLoadingOverlay',
  'applyRoleUI', 'debounceDbSave', 'renderUserList', 'connectMetaWs', 'metaSend'
];

// Expose variables right after DOM refs block
let exposureBlock = '\n// --- Expose State to Window ---\n';
stateVars.forEach(v => {
  exposureBlock += `window.${v} = ${v};\n`;
});
helperFuncs.forEach(f => {
  exposureBlock += `window.${f} = ${f};\n`;
});
exposureBlock += '// ------------------------------\n';

// Find a good place to insert (after line 114)
const domRefEnd = "const permsList      = document.getElementById('perms-list');";
editorContent = editorContent.replace(domRefEnd, domRefEnd + '\n' + exposureBlock);

// Ensure reassignments update window
const reassignments = [
  { from: 'myId = profile.id;', to: 'myId = profile.id; window.myId = myId;' },
  { from: "myName = profile.username;", to: "myName = profile.username; window.myName = myName;" },
  { from: "myRole = 'owner';", to: "myRole = 'owner'; window.myRole = myRole;" },
  { from: "myRole = perm.role;", to: "myRole = perm.role; window.myRole = myRole;" },
  { from: 'quill = new Quill', to: 'window.quill = quill = new Quill' },
  { from: 'ydoc = new Y.Doc();', to: 'window.ydoc = ydoc = new Y.Doc();' },
  { from: "ytext = ydoc.getText('quill');", to: "window.ytext = ytext = ydoc.getText('quill');" },
  { from: 'wsProvider = new WebsocketProvider', to: 'window.wsProvider = wsProvider = new WebsocketProvider' },
  { from: 'comments = msg.comments;', to: 'window.comments = comments = msg.comments;' },
  { from: 'versionHistory = msg.versionHistory;', to: 'window.versionHistory = versionHistory = msg.versionHistory;' }
];

reassignments.forEach(r => {
  editorContent = editorContent.replace(r.from, r.to);
});

fs.writeFileSync(editorPath, editorContent);
console.log('editor.js patched with window exposure.');

// 2. Patch Sub-modules
const subModules = ['comments.js', 'history.js', 'ai-chat.js', 'sharing.js', 'export.js'];
const allGlobals = [...stateVars, ...helperFuncs];

subModules.forEach(filename => {
  const filePath = path.join(srcDir, filename);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Simple regex to replace standalone words that match our globals with window.variable
  // We avoid replacing them if they are part of a property access (obj.var) or assignment (var: val)
  // This is a bit risky but we'll try a targeted approach.
  
  allGlobals.forEach(name => {
    // Only replace if it's a standalone word (not a property of another object, not part of a hyphenated class)
    // Negative lookbehind: avoid obj.name, window.name, or hyphenated-name
    // Negative lookahead: avoid namePart or name-hyphenated
    const regex = new RegExp(`(?<![\\w\\.\\$\\-])(?<!window\\.)${name}(?![\\w\\$\\-])`, 'g');
    content = content.replace(regex, `window.${name}`);
  });

  fs.writeFileSync(filePath, content);
  console.log(`${filename} patched with window. references.`);
});

console.log('Patching complete.');
