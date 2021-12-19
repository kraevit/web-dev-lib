function Dog(name) {
  this.name=name;
}

let beagle=new Dog("Sharo");

Dog.prototype.isPrototypeOf(beagle) // returns true

Object.prototype.isPrototypeOf(Dog.prototype) //  returns true