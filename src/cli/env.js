const parseEnv = () => {
  const obj = process.env;
  let str = [];
  Object.keys(process.env).forEach((key) => {
    if (key.startsWith("RSS_")) str.push(`RSS_${key}=${obj[key]}`);
  });
  console.log(str.join("; "));
};

parseEnv();
