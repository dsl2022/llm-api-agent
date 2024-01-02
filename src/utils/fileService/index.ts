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
            console.log({relativePath,root:this.rootDir})
            const fullPath = path.join(this.rootDir, relativePath);
            console.log("test full path!",{fullPath})
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

