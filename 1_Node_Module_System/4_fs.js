const fs = require("fs");

//#region Files

//1 ---> Reading a file <---

// let fileContent = fs.readFileSync("text.txt");

// console.log("Data in this file :- " + fileContent);

//2 ---> writing in a file <---

// fs.writeFileSync("text1.txt", "I am FS Module ");

// console.log("File has been written !");

//3 ---> append in a file <---

// fs.appendFileSync("text2.txt", "I'm Append by FS Module");

// console.log("File has been Updated !");

//4 ---> deleting a file <---

// fs.unlinkSync("text.txt");

// console.log("File has been deleted");

//---------------------------------------------------------

//#region Directories

//1 ---> create a directory <---

// fs.mkdirSync("myDirectory");

//2 ---> Check the content in-side the directory <---

let folderPath = "D:\\node\\myDirectory";

let folderContent = fs.readdirSync(folderPath);

console.log("Folder Content :- " + folderContent);

// 3 ---> Check wheter a directory is exists or not ? <---

let doesExist = fs.existsSync("myDirectory");

console.log(doesExist);

// 4 ---> remove directory <---

fs.rmdirSync("myDirectory");
console.log("File has been deleted");
