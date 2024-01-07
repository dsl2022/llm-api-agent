import { OpenAIService } from '@utils/openaiService/';
import { FileService } from '@utils/fileService'
/**
 * Represents an endpoint for making requests.
 * Utilizes OpenAI service for processing the requests.
 */
export class EndPoint {
  /**
   * The content of the request to be sent.
   * @type {string}
   */
  public requestContent: string;

  /**
   * Service object for interacting with OpenAI.
   * @private
   * @type {OpenAIService}
   */
  private openaiService: OpenAIService;
  private fileService: FileService;

  /**
   * Constructs an EndPoint instance.
   * @param {string} model - The model name to be used in OpenAI Service.
   * @param {string} apiKey - The API key for OpenAI service authentication.
   */
  constructor(model: string, apiKey: string) {
    this.openaiService = new OpenAIService(model, apiKey);
    this.fileService = new FileService("");
  }
  /**
   * Extract schema object from OpenApi Yaml file and write as output JSON file
   * @param {string} yamlInputFilePath - Path of yaml file to be extracted from
   * @param {string} outputJsonPath - Path of extracted object to be saved
   */
  getSchemaFromOpenApiYaml(yamlInputFilePath:string,outputJsonPath:string){
    this.fileService.extractApiSchema(yamlInputFilePath, outputJsonPath)
  }
  
  /**
   * Determines the type of HTTP method to be used for the endpoint.
   * Currently, it returns a fixed value.
   * @returns {string} The HTTP method type.
   */
  getPayloadFromSchema(requestContent: string, schema:any): string {
    
    return 'POST';
  }

  /**
   * Selects the appropriate endpoint and processes the request.
   * @async
   * @param {string} requestContent - The content of the request.
   * @param {string} apiEndpointFilePath - Path to the API endpoint configuration.
   * @returns {Promise<any>} A promise that resolves to the result of the OpenAI service call.
   * @throws Will throw an error if the OpenAI service call fails.
   */
  async selectEndpoint(
    requestContent: string,
    apiEndpointFilePath: string,
  ): Promise<any> {
    try {
      const result = await this.openaiService.create(
        requestContent,
        apiEndpointFilePath,
      );
      return result;
    } catch (error) {
      // Uncomment the following line if you want to log errors to the console.
      // console.error("An error occurred: ", error);
      throw error;
    }
  }
}
