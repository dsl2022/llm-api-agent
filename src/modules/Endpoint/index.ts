import { OpenAIService } from "@utils/openaiService/";


export class EndPoint {
    public requestContent: string;
    
    private openaiService: OpenAIService;
    

    constructor(requestText: string) {
        this.requestContent = requestText;        
        this.openaiService = new OpenAIService('gpt-4');        
    }

    async selectEndpoint(requestContent:string): Promise<any> {        
        try {            
            const result = await this.openaiService.create(requestContent);
            return result;
        } catch (error) {
            console.error("An error occurred: ", error);
            throw error;
        }
    }
}
