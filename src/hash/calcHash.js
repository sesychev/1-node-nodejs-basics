import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const pathFile = join(__dirname, "files/fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256").setEncoding("hex");
  fs.access(pathFile, (err) => {
    if (err) throw new Error(`FS operation failed`);
    fs.createReadStream(pathFile, {
      encoding: "utf-8",
    })
      .pipe(hash)
      .on("finish", () => console.log(hash.read()))
      .on("error", (err) => {
        console.log(err.message);
      });
  });
};

await calculateHash();
