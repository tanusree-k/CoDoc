const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'server.js');
let content = fs.readFileSync(srcPath, 'utf8');

// 1. Add requires
const requires = `
const { LeveldbPersistence } = require('y-leveldb');
const rateLimit = require('express-rate-limit');
`;
content = content.replace("const decoding = require('lib0/decoding');", "const decoding = require('lib0/decoding');" + requires);

// 2. Add Persistence Initialization
const yjsInit = `
// ── Yjs Document Store ──────────────────────────────────────────────────
const persistence = new LeveldbPersistence('./yjs-data');
const docs = new Map();      // roomName -> Y.Doc
`;
content = content.replace("const docs = new Map();      // roomName -> Y.Doc", yjsInit);


// 3. Update getYDoc
const getYDocSearch = `function getYDoc(roomName) {
  if (!docs.has(roomName)) {
    const doc = new Y.Doc();`;

const getYDocReplace = `function getYDoc(roomName) {
  if (!docs.has(roomName)) {
    const doc = new Y.Doc();
    
    // Bind persistence
    persistence.bindState(roomName, doc).then(() => {
      console.log(\`[Yjs Persistence] Loaded doc: \${roomName}\`);
    });
`;
content = content.replace(getYDocSearch, getYDocReplace);

// 4. Rate Limiting
const aiSearch = `app.post('/api/ai', async (req, res) => {`;
const aiReplace = `
const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 15, // limit each IP to 15 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});

app.post('/api/ai', aiLimiter, async (req, res) => {`;
content = content.replace(aiSearch, aiReplace);

fs.writeFileSync(srcPath, content);
console.log('server.js patched successfully');
