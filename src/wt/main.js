import os from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const workerThreads = [];

  for (let i = 0; i < os.cpus().length; i++)
    workerThreads.push(new Worker(join(__dirname, "worker.js")));

  workerThreads.forEach((worker, i) => worker.postMessage(i + 10));

  const arr = await Promise.allSettled(
    workerThreads.map(
      (worker) =>
        new Promise((resolve) => {
          worker.on("message", (message) =>
            resolve({ status: "resolved", data: message })
          );

          worker.on("error", () => resolve({ status: "error", data: null }));

          worker.on("exit", (code) => {
            if (code === 0) return null;
            return new Error(`Worker has stopped with code ${code}`);
          });
        })
    )
  ); //.then((results) => results.forEach((result) => console.log(result.value)));

  console.log(arr.map((item) => item.status === "fulfilled" && item.value));
};

await performCalculations();
