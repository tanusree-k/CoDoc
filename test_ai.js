const { GoogleGenAI } = require('@google/genai');
const Groq = require('groq-sdk');
require('dotenv').config();

async function testAI() {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const systemInstruction = `You are CoDoc AI... ALWAYS respond with a valid JSON object...`;
    const text = 'Hello';
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: text }
      ],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" },
      temperature: 0.5,
    });
    console.log('--- Groq response ---');
    console.log(chatCompletion.choices[0]?.message?.content);
    
    let rawText = chatCompletion.choices[0]?.message?.content || "";
    let cleanJson = rawText.trim();
    if (cleanJson.startsWith('\`\`\`')) {
      cleanJson = cleanJson.replace(/^\`\`\`json\\s*|\`\`\`\\s*$/g, '');
    }
    console.log('--- After clean ---');
    console.log(cleanJson);
    console.log('Parsed:', JSON.parse(cleanJson));
  } catch(e) {
    console.error('AI error:', e);
  }
}
testAI();
