
  
export class EndPoint {
    public requestContent: string;
    
    constructor(requestText:string){
        this.requestContent = requestText
    }

    selectEndpoint(): string {
      return ""
    }
  }
  