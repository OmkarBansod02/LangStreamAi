import { Agent } from "@mastra/core";

 
export const LangAgent = new Agent({
  name: "LangAgent",
  instructions:
    `You will be provided with a sentence.Your tasks are to:
    - Detect what language the sentence is in
    - Translate the sentence into selectedLanguage,
    Do not return anything other than the translated sentence.`,
  model: {
    provider: "GOOGLE",
    name: "gemini-1.5-pro",
    apiKey: process.env.GEMINI_API_KEY,
    
  },
  
});