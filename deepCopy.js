let data = {
  name: "shubham",
  age: 22,
  hobbies: ["photography", "riding", "travelling"],
};

let copyData = JSON.parse(JSON.stringify(data));

copyData.name = "Dangwal";

copyData.hobbies[0] = " car";

console.log(data.hobbies[0]);
console.log(copyData.hobbies[0]);
