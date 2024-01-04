import OpenAI from 'openai';
import dotenv from 'dotenv';
import { FileService } from '@utils/fileService';
import { systemPrompt } from '@prompts/systemPrompts';

dotenv.config();

/**
 * A service class for interfacing with OpenAI's API.
 * This class handles the creation of chat completions using the OpenAI service.
 */
export class OpenAIService {
  /**
   * The model used for OpenAI completions.
   * @type {string}
   */
  public model: string;

  /**
   * Instance of OpenAI API client.
   * @type {OpenAI}
   */
  public openai: OpenAI;

  /**
   * Directory path for file operations.
   * @type {string}
   */
  public fileDir: string;

  /**
   * Service object for file operations.
   * @private
   * @type {FileService}
   */
  private fileService: FileService;

  /**
   * Constructs an instance of OpenAIService.
   * @param {string} model - The model name to be used in OpenAI API.
   * @param {string} apiKey - The API key for authenticating with the OpenAI API.
   */
  constructor(model: string, apiKey: string) {
    this.model = model;
    this.fileService = new FileService('.');
    this.openai = new OpenAI({
      apiKey,
    });
  }

  /**
   * Creates a chat completion request to OpenAI using a system prompt and user message.
   * @async
   * @param {string} message - The user message for the chat completion.
   * @param {string} filePath - The file path for the system prompt configuration.
   * @returns {Promise<any>} A promise that resolves to the response from OpenAI's chat completion.
   * @throws {Error} Throws an error if the request to OpenAI fails.
   */
  async create(message: string, filePath: string): Promise<any> {
    const fileRead = await this.fileService.readFile(filePath);
    const response = await this.openai.chat.completions.create({
      model: this.model || 'gpt-4-1106-preview',
      messages: [
        {
          role: 'system',
          content: systemPrompt(fileRead),
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response;
  }
}
