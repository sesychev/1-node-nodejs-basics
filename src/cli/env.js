export const parseEnv = () => {
    // Write your code here
    const prefix = 'RSS_';
    let arr=[];
    for (const item in process.env) {
        let str = `${prefix}${item}=${process.env[item]}`;
        arr.push(str); 
    }

    console.log(arr.join("; "));
};

parseEnv();