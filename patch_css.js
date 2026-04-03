const fs = require('fs');
const path = require('path');
const srcPath = path.join(__dirname, 'public', 'editor.css');

let content = fs.readFileSync(srcPath, 'utf8');

// Add responsive media queries at the end of the file
const mediaQueries = `
/* ── Responsiveness ────────────────────────────────────────── */
@media (max-width: 768px) {
  .ai-chat-panel { width: 100vw; max-width: 100vw; border-left: none; }
  .toolbar { 
    flex-wrap: wrap; 
    height: auto; 
    padding: 8px;
    gap: 4px;
    justify-content: flex-start;
  }
  .toolbar-group {
    flex-wrap: wrap;
    margin-bottom: 4px;
  }
  .modal-card {
    width: 95vw;
    margin: 10px;
  }
  .navbar-right { gap: 8px; }
  .user-name-text { display: none; } /* hide name on mobile to save space */
}
`;

content += '\n' + mediaQueries;
fs.writeFileSync(srcPath, content);
console.log('editor.css patched');
