import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";
import child_process from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readPath = path.join(__dirname, "files", "/script.js");

const spawnChildProcess = async (args) => {
  // Write your code here
};

spawnChildProcess();
