import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const initCommand = {
    command: 'init',
    describe: 'Initializes the project with the AI Cognitive Framework files',
    builder: {
        path: {
            describe: 'Path to create the framework directory',
            demandOption: false,
            type: 'string',
            default: 'ai-cognitive-framework'
        }
    },
    handler: (argv) => {
        const destPath = path.resolve(argv.path);
        const sourcePath = path.resolve(__dirname, '../../framework');
        if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath, { recursive: true });
        }
        const files = fs.readdirSync(sourcePath);
        files.forEach(file => {
            const sourceFile = path.join(sourcePath, file);
            const destFile = path.join(destPath, file);
            fs.copyFileSync(sourceFile, destFile);
        });
        console.log(`✅ AI Cognitive Framework initialized in: ${destPath}`);
    }
};
