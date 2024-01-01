// FileService.test.js
const fs = require('fs');
const path = require('path');
const { FileService } = require('../../src/utils/fileService'); // Adjust the import path as necessary

jest.mock('fs');
jest.mock('path');

describe('FileService', () => {
  const mockRootDir = '/mock/root/dir';
  let fileService;

  beforeEach(() => {
    fileService = new FileService(mockRootDir);
  });

  it('should correctly resolve the file path', async () => {
    const mockRelativePath = 'file.txt';
    const mockFullPath = '/mock/root/dir/file.txt';
    path.join.mockReturnValue(mockFullPath);

    fs.readFile.mockImplementation((path, encoding, callback) => {
      callback(null, 'file content');
    });

    const result = await fileService.readFile(mockRelativePath);

    expect(path.join).toHaveBeenCalledWith(mockRootDir, mockRelativePath);
    expect(fs.readFile).toHaveBeenCalledWith(mockFullPath, 'utf8', expect.any(Function));
    expect(result).toBe('file content');
  });

  it('should reject the promise if an error occurs', async () => {
    const mockRelativePath = 'file.txt';
    const mockError = new Error('File not found');
    fs.readFile.mockImplementation((path, encoding, callback) => {
      callback(mockError, null);
    });

    await expect(fileService.readFile(mockRelativePath)).rejects.toThrow('File not found');
  });
});
