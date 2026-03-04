import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
apiKey: import.meta.env.VITE_GEMINI_KEY
});

/**

* Stream AI generated code from Gemini
* @param {string} prompt
* @param {string} framework
* @param {(chunk:string)=>void} onChunk
  */
    export async function generateUIStream(prompt, framework, onChunk) {

    const stream = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: `
    You are a professional frontend developer.

    Generate UI code.

    Framework: ${framework}

    User request:
    ${prompt}

    Rules:

    - Return ONLY code

    - Single HTML file

    - Use TailwindCSS if possible

    - No explanation

    - Wrap response in markdown code block
      `
        });
          
            let accumulatedText = "";
              
                for await (const chunk of stream) {
                  
                    const text = chunk.text;
                      
                        if (!text) continue;
                          
                            accumulatedText += text;

                            onChunk(accumulatedText);

                            }

                            return accumulatedText;

                            }