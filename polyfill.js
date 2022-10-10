// polyfill of map, reduce and filter

// map

let arr = [1, 2, 3, 4, 5];
const doubledArr = arr.map((e) => {
  return e * 2;
});
console.log(doubledArr);

// custom map (polyfill)

function myPolyfillMap(arr, square) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(square(arr[i]));
  }
  return newArr;
}

function square(x) {
  return x * x;
}

console.log(myPolyfillMap(arr, square));

// filter

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr1 = arr1.filter((e) => {
  return e % 2 == 0;
});

console.log(newArr1);

// custom filter(polyfill)

function myPolyfillFilter(arr, cb) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) filteredArray.push(arr[i]);
  }
  return filteredArray;
}

function cb(x) {
  if (x % 2 == 0) return true;
}

console.log(myPolyfillFilter(arr1, cb));

//reduce

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res1 = arr2.reduce((acc, e) => {
  return acc + e;
},2);

console.log(res1);

// polyfill of bind


