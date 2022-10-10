showDetails = function (hobby) {
  console.log(
    `Hello My name is ${this.name} and my age is ${this.age} and I love ${hobby}`
  );
};
let p1 = {
  name: "shubham",
  age: 21,
};

let p2 = {
  name: " sanjay",
  age: 20,
};

let ans = showDetails.bind(p1, ["cycling"]);
ans();