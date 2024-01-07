import { EndPoint } from '../../src/modules/Endpoint'; 

jest.mock('../../src/utils/openaiService', () => {
    return {
      OpenAIService: jest.fn().mockImplementation(() => {
        return { 
          create: jest.fn(),
          createForSchema: jest.fn() 
         };
      })
    };
  });

describe('EndPoint', () => {
  let endPoint;
  const mockModel = 'test-model';
  const apiMockKey = "test key"
  beforeEach(() => {
    endPoint = new EndPoint(mockModel,apiMockKey);
  });

  describe('constructor', () => {
    it('should initialize openaiService correctly', () => {
      expect(endPoint.openaiService).toBeDefined();
    });
  });

  describe('decideEndpointType', () => {
    it('should return POST', async () => {
      endPoint.openaiService.createForSchema.mockResolvedValue("{productId:3334343,quantity:4}");
      const requestContent = "I want to udate my iphone product detail, and the product id is 3334343";
      const schema = {
        "type":"object",
        "properties":{
           "productId":{
              "type":"string"
           },
           "quantity":{
              "type":"integer"
           }
        }
     };
      const result = await endPoint.getPayloadFromSchema(requestContent, schema);
      expect(result).toBe("{productId:3334343,quantity:4}");
    });
  });

  describe('selectEndpoint', () => {
    it('should call openaiService.create and return result on success', async () => {
      const requestContent = 'test content';
      const apiEndpointFilePath = 'mock/api-endpoint-file-path.json'; // Mock file path
      const expectedResult = 'mock result';
      endPoint.openaiService.create.mockResolvedValue(expectedResult);

      const result = await endPoint.selectEndpoint(requestContent, apiEndpointFilePath);

      expect(endPoint.openaiService.create).toHaveBeenCalledWith(requestContent, apiEndpointFilePath);
      expect(result).toBe(expectedResult);
    });

    it('should throw an error when openaiService.create fails', async () => {
      const requestContent = 'test content';
      const mockError = new Error('mock error');
      endPoint.openaiService.create.mockRejectedValue(mockError);

      await expect(endPoint.selectEndpoint(requestContent)).rejects.toThrow('mock error');
    });
  });
});
