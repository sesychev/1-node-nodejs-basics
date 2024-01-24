import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathName = join(__dirname, "files/wrongFilename.txt");

const rename = async () => {
  // Write your code here
};

await rename();
