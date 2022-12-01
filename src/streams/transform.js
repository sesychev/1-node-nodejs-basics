import { Transform, pipeline } from 'stream';
import process from 'process';

const transform = async () => {
// Write your code here
  process.stdout.write("Please, write here something:" + "\n");
  
  const reverse = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, reverseString(chunk));
      },
    });

  function reverseString(str) {
    return str.toString().split("").reverse().join("");
}
  pipeline(process.stdin, reverse, process.stdout, (error) => {
    if (error) throw new Error(error);
  });
};

await transform();