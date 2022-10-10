// let input = document.getElementById("inp");

// input.addEventListener("keydown", function () {
//   console.log("hi");
// });

let input = document.getElementById("inp");

input.addEventListener("keydown", debounce(printData));

function printData() {
  console.log("hi");
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
