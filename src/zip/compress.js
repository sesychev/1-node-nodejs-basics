import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const pathFolder = join(__dirname, "files/fileToCompress.txt");
  const writeStream = fs.createWriteStream(join(__dirname, "archive.gz"));
  fs.createReadStream(pathFolder).pipe(zlib.createGzip()).pipe(writeStream);
};

await compress();
