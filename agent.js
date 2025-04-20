// import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";

export async function generateReviewFeedback(code_diff) {
    // Load OpenAI
    const ai = new GoogleGenAI({ apiKey: process.env.AI_API_KEY });
    
    const prompt = `
    You are a senior engineer. Review the following code diff and provide:
    1. A code quality score (1-10)
    2. Constructive feedback
    3. Suggested improvements

    Code diff:
    ${code_diff}
    `

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });

    return response.text;
}