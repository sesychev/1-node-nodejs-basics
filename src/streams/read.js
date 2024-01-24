import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const pathFile = join(__dirname, "files/fileToRead.txt");
  fs.access(pathFile, (err) => {
    if (err) throw new Error(`FS operation failed`);
    fs.createReadStream(pathFile, {
      encoding: "utf-8",
    }).pipe(process.stdout);
  });
};

await read();
