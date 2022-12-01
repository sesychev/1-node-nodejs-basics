import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const writePath = path.join(__dirname, "files", "/fileToWrite.txt");


const write = async () => {
  // Write your code here
  try {
    // The check succeeded
    await fs.promises.access(writePath);
      
    let writable = fs.createWriteStream(writePath, {
        encoding: "utf-8",
    });
      
    process.stdout.write(
        "Please, write here something:" + "\n"
      );
      
    process.stdin.on("data", function (data) {
        writable.write(data);
    });
    } catch (error) {
        // The check failed
        throw new Error("FS operation failed");
    } 
};

await write();