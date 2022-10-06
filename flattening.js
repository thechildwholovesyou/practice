let data = {
  name: "shubham",
  age: 22,

  address: {
    city: "Dehradun",
    pin: "248001",
  },
};

function flattenObject(obj, parent, res = {}) {
  for (let key in obj) {
    let propname = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattenObject(obj[key], propname, res);
    } else {
      res[propname] = obj[key];
    }
  }

  return res;
}

console.log(flattenObject(data));

console.log(typeof null);
