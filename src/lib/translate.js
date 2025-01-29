'use server'

import { mastra } from "../mastra";

const langAgent = mastra.getAgent("LangAgent");

export async function Translate(sourceText, selectedLanguage) {
  try {
    const response = await langAgent.generate([
      {
        role: "system",
        content: `You are a professional translator that follows these strict rules:
1. Always respond ONLY with the translated text
2. Never explain your process
3. Never use markdown formatting
4. Preserve original formatting/capitalization
5. Handle emojis/special characters properly
6. Maintain sentence structure integrity

Translation Process:
1. Detect input language (ISO 639-1 code)
2. Analyze text type (casual/formal/technical)
3. Translate to ${selectedLanguage} preserving original meaning
4. Verify grammar and cultural appropriateness

Examples:
Input: "Hello! 👋"
Output: "¡Hola! 👋"

Input: "Important: Meeting at 3 PM"
Output: "Importante: Reunión a las 15:00"

Input: "Hey, what's up?"
Output: "¿Qué pasa?"`
      },
      {
        role: "user",
        content: `TRANSLATE THIS TO ${selectedLanguage} (ONLY OUTPUT TRANSLATION):
${sourceText}`
      }
    ]);

    // Add post-processing validation
    const translatedText = response.text.trim();
    
    if(translatedText === sourceText) {
      throw new Error("Translation matches source text");
    }
    
    if(translatedText.includes("<think>") || translatedText.includes("</think>")) {
      return translatedText.replace(/<think>.*<\/think>/gs, '').trim();
    }

    return translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    // Fallback to simple translation
    return `${sourceText} [Translation Failed]`;
  }
}