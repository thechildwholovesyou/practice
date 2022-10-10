import fetch from "node-fetch";
const userPromise = fetch("https://api.github.com/users/thechildwholovesyou");

let company = [];

userPromise.then((data) => {
  company.push(data.company);
});

console.log(company);
