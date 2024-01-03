import { OpenAIService } from "@utils/openaiService/";


export class EndPoint {
    public requestContent: string;    
    private openaiService: OpenAIService;
    

    constructor(model:string,apiKey:string) {        
        this.openaiService = new OpenAIService(model,apiKey);        
    }
    decideEndpointType():string{
      return "POST"
    }
    async selectEndpoint(requestContent:string,apiEndpointFilePath:string): Promise<any> {        
        try {            
            const result = await this.openaiService.create(requestContent,apiEndpointFilePath);
            return result;
        } catch (error) {
            // console.error("An error occurred: ", error);
            throw error;
        }
    }
}
