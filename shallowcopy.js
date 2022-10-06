let ob1 = {
  x: 10,
};

// let ob2 = ob1;

// ob2.x = 5;
// console.log(ob1.x);

let ob2 = Object.assign({}, ob1);

ob2.x = 19;
ob1.x = 6;

console.log(ob1.x + " " + ob2.x);


