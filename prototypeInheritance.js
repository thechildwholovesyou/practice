let p1 = {
  name: "Shubham",
  city: " Dehradun",

  showDetails: function () {
    console.log(this.name + " from" + this.city);
  },
};

let p2 = {
  name: "sanjay",
};

p2.__proto__ = p1;

p2.showDetails();
