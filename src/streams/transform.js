import { Transform } from "stream";

const transform = async () => {
  //const callback = (str) => str.split("").reverse().join("");

  const transform = new Transform({
    transform(chunk, encoding, callback) {
      chunk = String(chunk).split("").reverse().join("");
      callback(null, chunk);
    },
  });

  process.stdin.pipe(transform).pipe(process.stdout);
  process.stdin.resume();
};

await transform();
//streams: transform.js
