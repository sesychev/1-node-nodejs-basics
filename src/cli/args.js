export const parseArgs = () => {
// Write your code here
  let arr = [];
  const items = process.argv; //const items = ["--propName", "value"];
  
  for (let i = 0; i < items.length; i++) {
    if (items[i].startsWith('--')) {
      let str = `${items[i].slice(2)} is ${items[i + 1]}`;
      arr.push(str)
    }
  }
  
  console.log(arr.join(", "));
};

parseArgs();