Array.prototype.myFunction = function () {
  console.log(this);
};

let arr = [1, 3, 4, 7];
arr.myFunction();

// map using prototype

// Array.prototype.myMap = function (cb) {
//   let newArr1 = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr1.push(cb(this[i]));
//   }
//   return newArr1;
// };

// function square(x) {
//   return x * x;
// }

// console.log(arr.myMap(square));

// filter using prototype

// Array.prototype.myFilter = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(isEven(this[i]));
//   }
//   return newArr;
// };

// function isEven(x) {
//   if (x % 2 == 0) return true;
//   return false;
// }

// console.log(arr.myFilter(isEven));


// reduce using prototype

