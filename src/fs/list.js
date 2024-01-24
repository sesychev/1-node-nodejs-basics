import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFiles = join(__dirname, "files");

const list = async () => {
  fs.access(pathFiles, (err) => {
    if (err) throw new Error(`FS operation failed`);
    fs.readdir(pathFiles, (err, files) => {
      if (err) console.log(err.message);
      files.forEach((file) => {
        console.log(file);
      });
    });
  });
};

await list();
