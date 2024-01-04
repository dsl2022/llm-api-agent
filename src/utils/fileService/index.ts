const fs = require('fs');
const path = require('path');

/**
 * A service class for handling file operations.
 * Provides functionality to read files from a specified root directory.
 */
export class FileService {
  /**
   * The root directory from which files will be read.
   * @type {string}
   */
  public rootDir: string;

  /**
   * A mock implementation for testing purposes.
   * @static
   * @type {any}
   */
  static mockImplementation: any;

  /**
   * Creates an instance of FileService.
   * @param {string} rootDir - The root directory for file operations.
   */
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  /**
   * Reads a file from the given relative path and returns its content.
   * @param {string} relativePath - The relative path to the file from the root directory.
   * @returns {Promise<string>} A promise that resolves to the content of the file as a string.
   * @throws {Error} Throws an error if the file cannot be read.
   */
  readFile(relativePath): Promise<string> {
    return new Promise((resolve, reject) => {
      const fullPath = path.join(this.rootDir, relativePath);
      fs.readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  }
}
