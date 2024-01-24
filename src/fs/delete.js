import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathName = join(__dirname, "files/fileToRemove.txt");

const remove = async () => {
  fs.unlink(pathName, (err) => {
    if (err) {
      if (err) throw new Error(`FS operation failed`);
    } else {
      console.log("File is deleted.");
    }
  });
};

await remove();
