const parseArgs = () => {
  //console.log(process.argv.slice(2));
  let str = "";
  for (let i = 2; i < process.argv.length; i += 1) {
    if (i % 2 === 0) str += `${process.argv[i]} is `;
    else str += `${process.argv[i]}, `;
  }
  console.log(str.slice(0, str.length - 2));
};

parseArgs();
