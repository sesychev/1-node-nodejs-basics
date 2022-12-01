import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readPath = path.join(__dirname, "files", "/fileToRead.txt");

const read = async () => {
  // Write your code here
  try {
    // The check succeeded
    await fs.promises.access(readPath);
    let readable = fs.createReadStream(readPath, {encoding: "utf-8",});
    readable.pipe(process.stdout); //вывод текста в консоль
    } catch (error) {
        // The check failed
        throw new Error("FS operation failed");
    } 

};

await read();