import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readPath = path.join(__dirname, "files", "/fileToCompress.txt");
const writePath = path.join(__dirname, "files", "/fileToCompress.txt.gz");

const compress = async () => {
  // Write your code here

  const inp = fs.createReadStream(readPath); // Creating readable Stream
  const out = fs.createWriteStream(writePath); // Creating writable stream

  // Calling createGzip method
  inp
    .pipe(createGzip())
    .pipe(out)
    .on("finish", () => {
      console.log("Gzip created!");
    });
};

await compress();
