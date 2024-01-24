import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";
import { isError } from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const pathFiles = join(__dirname, "files");
  const pathFilesCopy = join(__dirname, "files_copy");

  fs.access(pathFiles, (err) => {
    if (err) throw new Error(`FS operation failed`);
    console.log("The directory 'files' exists");
  });

  fs.access(pathFilesCopy, (err) => {
    if (!err) throw new Error(`FS operation failed`);
    fs.mkdir(pathFilesCopy, { recursive: true }, (err) => {
      if (err) console.log(err);
      else {
        console.log("The 'files_copy' directory created successfully");
        fs.cp(pathFiles, pathFilesCopy, { recursive: true }, (err) => {
          if (err) console.log(err);
          console.log("The files copied successfully");
        });
      }
    });
  });

  /*
  fs.access(pathFilesCopy, (err) => {
    if (!err) throw new Error(`FS operation failed`);
  });
*/
  /*
  fs.mkdir(pathFilesCopy, { recursive: true }, (err) => {
    if (pathFilesCopy) {
      throw new Error(`FS operation failed`);
    } else {
      console.log("New Directory created successfully !!");
    }
  });
*/
  // check if directory exists
  /*
  fs.access(pathFiles, (err) => {
    if (err) throw new Error(`FS operation failed`);

    // If current directory does not exist then create it
    fs.mkdir(pathFilesCopy, { recursive: true }, (err) => {
      if (!pathFilesCopy) {
        throw new Error(`FS operation failed`);
      } else {
        console.log("New Directory created successfully !!");
      }
    });
  });
*/
  // check if directory exists
  /*
  fs.access(pathFilesCopy, (err) => {
    if (err) throw new Error(`FS operation failed`);
  });
  */
};

await copy();

//Structure.nwf

//const pathName = join(__dirname, "files/fresh.txt");
//if (!join(__dirname, "files") || !join(__dirname, "files/files_copy"))
//  throw new Error(`FS operation failed`);
//const pathFiles = join(__dirname, "files");
//const pathFilesCopy = join(__dirname, "files/files_copy");
