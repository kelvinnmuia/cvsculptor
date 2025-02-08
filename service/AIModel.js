import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  /**
   * Configuration object for text generation.
   * 
   * @property {number} temperature - Controls the randomness of the generated text. Higher values result in more random text.
   * @property {number} topP - Controls nucleus sampling. Only the smallest set of tokens with a cumulative probability above this threshold are considered.
   * @property {number} topK - Limits the sampling pool to the top K tokens. Lower values make the output more deterministic.
   * @property {number} maxOutputTokens - The maximum number of tokens to generate in the output.
   * @property {string} responseMimeType - The MIME type of the response.
   */
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const AIChatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });