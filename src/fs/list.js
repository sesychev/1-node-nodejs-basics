import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, "files");

const list = async () => {
    // Write your code here
    try {
        // The check succeeded
        await fs.promises.access(oldPath);
        const files = await fs.promises.readdir(oldPath);
        files.forEach((file) => process.stdout.write(file  + "\n"));
    } catch (error) {
        // The check failed
        throw new Error("FS operation failed");
    } 
};

await list();