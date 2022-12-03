import os from "os";
import path from "path";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readPath = path.join(__dirname, "/worker.js");
const numOfCpus = os.cpus().length;

const performCalculations = async () => {
  // Write your code here
  const incremental = 10;
  let promises = [];

  for (let i = 0; i < numOfCpus; i++) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(readPath, {
          workerData: incremental + i,
        });

        worker.on("message", (result) => {
          resolve({ status: "resolved", data: result });
        });

        worker.on("error", (error) => {
          console.log(error);
          resolve(arr.push({ status: "error", data: null }));
        });
      })
    );
  }

  return Promise.all(promises); // Promise.all(promises).then((item) => console.log(item));
};

console.log(await performCalculations()); // performCalculations().then((item) => console.log(item));
