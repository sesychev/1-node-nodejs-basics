import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writePath = path.join(__dirname, "files", "/fresh.txt");

const create = async () => {
// Write your code here
const content = "I am fresh and young";

fs.stat(writePath, (e) => {  
  if (e) {
    let writable = fs.createWriteStream(writePath, {
      encoding: "utf-8",
  });
    
  writable.write(content);
  } else {
    throw new Error("FS operation failed");
  }
});
};

create()