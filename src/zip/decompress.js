import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const pathFolder = join(__dirname, "archive.gz");
  const writeStream = fs.createWriteStream(
    join(__dirname, "fileToCompress.txt")
  );
  fs.createReadStream(pathFolder).pipe(zlib.createUnzip()).pipe(writeStream);
};

await decompress();
