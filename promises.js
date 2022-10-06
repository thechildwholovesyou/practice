let fs = require("fs");

let f1 = fs.promises.readFile("./t1.txt");
let f2 = fs.promises.readFile("./t2.txt");
let f3 = fs.promises.readFile("./t3.txt");

// parallely

// f1.then((data) => console.log(data.toString()));
// f2.then((data) => console.log(data.toString()));
// f3.then((data) => console.log(data.toString()));

// serially

f1.then((data) => console.log(data.toString()))
  .then((data) => console.log(data.toString()))
  .then((data) => console.log(data.toString()));
