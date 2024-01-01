const fs = require('fs');
const path = require('path');

export class FileService {
    public rootDir: string;
    static mockImplementation: any;
    constructor(rootDir) {
        this.rootDir = rootDir;
    }

    readFile(relativePath):Promise<any> {
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

