import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  fork(join(__dirname, "files/", "script.js"), args);
};

// Put your arguments in function call to test this functionality
//spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
spawnChildProcess(["a", "b", "c"]);
