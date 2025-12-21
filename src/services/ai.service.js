import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_KEY || "AIzaSyBax3Auuio6Jr73jaij9rELdvtrlNKI45o",
});

export async function generateUI(prompt, framework) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
Generate a modern, animated, responsive UI component.

Framework: ${framework}
Description: ${prompt}

Rules:
- Return ONLY code
- Single HTML file
- Use markdown fenced block
- No explanation
    `,
  });

  return response.text;
}
