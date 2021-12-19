// bind - makes a copy of a func and assign new context to "this"

let obj = {
  carId: 123,
  getId: function() {
    return this.carId;
  }
};

let newCar = { carId: 456 };

let newFn = obj.getId.bind(newCar);

console.log( newFn() ); // expected output: 456
