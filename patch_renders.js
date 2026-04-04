const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.js')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let changed = false;

    if (content.includes('renderComments()')) {
      content = content.replace(/renderComments\(\)/g, 'window.renderComments?.()');
      changed = true;
    }
    
    if (content.includes('renderHistory()')) {
      content = content.replace(/renderHistory\(\)/g, 'window.renderHistory?.()');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(path.join(dir, file), content);
      console.log('Patched', file);
    }
  }
}
