function x() {
  var a = 10;
  let b = 10;
  function y() {
    console.log(a);
  }
  return y;
}

let ans = x();

