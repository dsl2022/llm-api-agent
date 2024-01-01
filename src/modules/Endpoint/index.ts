import { OpenAIService } from "@utils/openaiService/";


export class EndPoint {
    public requestContent: string;
    
    private openaiService: OpenAIService;
    

    constructor(model:string) {        
        this.openaiService = new OpenAIService(model);        
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
