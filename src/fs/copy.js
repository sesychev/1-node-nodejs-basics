import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, "files");
const newPath = path.join(__dirname, "files-copy");

(async function () {
  try {
    fs.access(newPath, error => {
      if (!error) throw new Error("FS operation failed");
      copyDir()
    })
  } catch (error) {
      console.error(error);
  }
})();

async function copyDir() {
//create dir
await fs.promises.mkdir(newPath, { recursive: true });
  
//copy file
const files = await fs.promises.readdir(oldPath);
  
for (const file of files) {
  const oldFile = path.join(__dirname, "files", file);
  const newFile = path.join(__dirname, "files-copy", file);
  await fs.copyFile(oldFile, newFile, 0, (error) => {
    if (error) {
      console.log(
        `Не удалось скопировать файл: /${file}/. Он уже существует!`
      );
    } else {
      console.log(`Файл /${file}/ успешно скопирован!`);
    }
  });
}
}