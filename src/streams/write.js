import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const pathFile = join(__dirname, "files/fileToWrite.txt");
  fs.access(pathFile, (err) => {
    if (err) throw new Error(`FS operation failed`);
    const writeStream = fs.createWriteStream(pathFile, {
      flags: "w",
    });
    process.stdin.pipe(writeStream);
    process.stdin.resume();
  });
};

await write();
