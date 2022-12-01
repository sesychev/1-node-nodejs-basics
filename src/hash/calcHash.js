import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import { createHash } from 'crypto'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readPath = path.join(__dirname, "files", "/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  // Write your code here
  fs.readFile(readPath, (err, data) => {
    if (err) console.log(err);
    process.stdout.write(sha256(data) + '\n');
  });

  function sha256(content) {
    return createHash('sha3-256').update(content).digest('hex')
  }
};

await calculateHash();