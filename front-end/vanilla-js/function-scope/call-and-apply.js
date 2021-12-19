// call
let obj = {
  carId: 123,
  getId: function() {
    return this.carId;
  }
};

let newCar = { carId: 456 };

console.log(
  obj.getId.call(newCar)
);

// apply - same as call but you can pass array of arguments
let obj1 = {
  carId: 123,
  getId: function(prefix) {
    return prefix + this.carId;
  }
};

let newCar1 = { carId: 456 };

console.log(
  obj1.getId.apply(newCar1, ['ID: '])
);

// ID: 456
