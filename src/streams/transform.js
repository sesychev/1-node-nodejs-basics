import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writePath = path.join(__dirname, "files", "/fileToWrite.txt");

export const write = async () => {

  const output = fs.createWriteStream(writePath);

  process.stdin.on('data', (data) => {
    output.write(data);
  });
  output.on('error', (error) => {
    throw new Error(error);
  });
};

write();
/*
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
    // Write your code here 
};

await transform();
*/

