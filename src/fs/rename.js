import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldName = join(__dirname, "files/wrongFilename.txt");
const newName = join(__dirname, "files/properFilename.md");

const rename = async () => {
  fs.access(oldName, (err) => {
    if (err) throw new Error(`FS operation failed`);
    fs.rename(oldName, newName, () => {
      console.log("File is renamed");
    });
  });
};

await rename();
