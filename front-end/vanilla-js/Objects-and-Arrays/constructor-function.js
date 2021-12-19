// Constructor Function
function Car() {

}

let car = new Car();

// this Keyword in Constructor Func
function Bus(id) {
  this.busId = id;
}

let bus = new Bus();
console.log( bus.busId );

// Methods
function Animal(breed) {
  this.breed = breed;
  this.info = function() {
    console.log(this.breed)
  }
}

let cat = new Animal('CAT');

console.log( cat.info() );
