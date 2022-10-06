// currying with bind
function add(x, y) {
  console.log(x + y);
}

let addWith2 = add.bind(this, 2);

addWith2(4);

// currying with clousres

function addClouser(x) {
  return function (y) {
    console.log(x + y);
  };
}

let addWith3 = addClouser(7);
addWith3(7);
