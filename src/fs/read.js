import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFile = join(__dirname, "files/fileToRead.txt");

const read = async () => {
  fs.access(pathFile, (err) => {
    if (err) throw new Error(`FS operation failed`);
    const readStream = fs.createReadStream(pathFile, {
      encoding: "utf-8",
    });
    readStream.on("data", (chunk) => {
      console.log(chunk.toString());
    });
  });
};

await read();
