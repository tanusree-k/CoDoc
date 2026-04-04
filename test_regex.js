const rawText = `\`\`\`json
{
  "reply": "Hello",
  "action": "none"
}
\`\`\``;

let cleanJson = rawText.trim();
if (cleanJson.startsWith('\`\`\`')) {
  cleanJson = cleanJson.replace(/^\`\`\`(json)?\\s*/i, '').replace(/\\s*\`\`\`$/i, '');
}

console.log('Resulting Clean JSON:', cleanJson);
try {
  JSON.parse(cleanJson);
  console.log('Parsed successfully');
} catch (e) {
  console.log('Parse failed', e.message);
}
