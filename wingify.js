const { log } = require("console");
const fetch = require ("node-fetch");


console.log("start program");

function callback_fun() {
  setTimeout(() => {
    console.log(" callback printed ");
  }, 100);
}

callback_fun();

function myPolyfillPromiseAll(arr) {
  let results = [];
  let cnt = 0;

  return new Promise((resolve, reject) => {
    arr.forEach(async (promise, idx) => {
      try {
        results.push(await promise);
        cnt++;

        if (cnt === arr.length) resolve(results);
      } catch (err) {
        reject(err);
      }
    });
  });
}

let p1 = new Promise(function (res, rej) {
  //   setTimeout(()=>{
  //     rej("p2 promise");
  //   },100)

  const response = fetch("https://api.github.com/users");
  const users = response.json();
  res(users);
});

let p2 = new Promise(function (res, rej) {
  setTimeout(() => {
    rej("p2 promise");
  }, 100);
});

let p3 = new Promise(function (res, rej) {
  setTimeout(() => {
    res("p3 promise");
  }, 100);
});

const ans = myPolyfillPromiseAll([p1, p2, p3]);

ans
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end  program");
