import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, "files", "/fileToRemove.txt");

const remove = async () => {
    // Write your code here
    try {
       // The check succeeded
        await fs.promises.access(oldPath);
        await fs.rm(oldPath, (error) => {
            if (error) console.log(error);
            else console.log("\nFile Deleted!\n");
          });
   } catch (error) {
       // The check failed
       throw new Error("FS operation failed");
   }
};

await remove();