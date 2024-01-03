import OpenAI from "openai";
import dotenv from 'dotenv';
import { FileService } from "@utils/fileService";
import {systemPrompt} from "@prompts/systemPrompts"
dotenv.config();


export class OpenAIService{
    public model:string;
    public openai:OpenAI;
    public fileDir: string;
    private fileService: FileService;
    constructor(model:string,apiKey:string){
        this.model = model;        
        this.fileService = new FileService(".");
        this.openai = new OpenAI({
          apiKey: apiKey,
        });
    }

   async create(message:string,filePath:string):Promise<any>{
    const fileRead = await this.fileService.readFile(filePath);            
    const response = await this.openai.chat.completions.create({
        model: this.model || "gpt-4-1106-preview",
        messages: [
            {
            "role": "system",
            "content": systemPrompt(fileRead)
              },
            {
            "role": "user",
            "content": message
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