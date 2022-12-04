import path from "path";
import { fileURLToPath } from "url";
import process from "process";
import child_process from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const childPath = path.join(__dirname, "files", "/script.js");

const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  // Write your code here
  let child = child_process.spawn("node", [childPath, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) =>
    console.log("Child data is indicated below... \n" + data)
  );

  child.on("spawn", () => console.log("Child process is here!\n"));

  child.stderr.on("data", (data) => console.error("Stderr: " + data));

  child.on("exit", (code) =>
    console.log(`Child process exited with code ${code}`)
  );

  process.on("SIGINT", () => console.log(`Intercepting SIGINT`));
};

spawnChildProcess(args);
