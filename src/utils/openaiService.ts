import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

export class OpenAIService{
    public model:string;
    public message: string;
    constructor(model:string){
        this.model = model;
    }

   async create():Promise<any>{
    const response = await openai.chat.completions.create({
        model: this.model || "gpt-4-1106-preview",
        messages: [
          {
            "role": "user",
            "content": this.message
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return response
    }
}