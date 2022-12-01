import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const writePath = path.join(__dirname, "files", "/fileToCompress.txt");
const readPath = path.join(__dirname, "files", "/archive.gz");

const decompress = async () => {
  // Write your code here

  fs.createReadStream(readPath)
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(writePath, { encoding: "utf8" }))
    .on("close", () => {
      console.log("unZip created!");
    });
};

await decompress();
