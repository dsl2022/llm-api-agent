import { EndPoint } from '../../src/modules/Endpoint'; // Adjust the import path as necessary

jest.mock('../../src/utils/openaiService', () => {
    return {
      OpenAIService: jest.fn().mockImplementation(() => {
        return { create: jest.fn() };
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
    it('should return POST', () => {
      expect(endPoint.decideEndpointType()).toBe('POST');
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
