import { isMainThread, parentPort, workerData } from "worker_threads";

// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function sends result of nthFibonacci computations to main thread
export const sendResult = () => {
  if (isMainThread) {
    // This code is executed in the main thread and not in the worker.
    console.log("Execution in main thread");
  } else {
    // This code is executed in the worker and not in the main thread. Send a message to the main thread.
    parentPort.postMessage(nthFibonacci(workerData));
  }
};

sendResult();
