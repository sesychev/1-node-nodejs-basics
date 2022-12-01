import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, "files", "/wrongFilename.txt");
const newPath = path.join(__dirname, "files", "/wrongFilename.md");

const rename = async () => {
    // Write your code here
    try {
       // The check succeeded
        await fs.promises.access(oldPath);
        fs.rename(oldPath, newPath, () => {
            console.log("\nFile Renamed!\n");
        });
   } catch (error) {
       // The check failed
       throw new Error("FS operation failed");
   }
};

await rename();