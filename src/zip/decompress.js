import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const decompress = async () => {
  // Write your code here
};

await decompress();

/*
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
  //const gzip = zlib.createGzip();
  // Piping
  //inp.pipe(gzip).pipe(out);
  console.log("Gzip created!");

  const handleStream = fs.createReadStream(readPath);

  inp
    .pipe(createGzip())
    .pipe(out)
    .on("finish", () => {
      console.log(`Compression process done: ${readPath}`);
    });
};

await compress();

*/
