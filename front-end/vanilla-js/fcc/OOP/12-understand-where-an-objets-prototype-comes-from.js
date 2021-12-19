function Dog(name) {
  this.name=name;
}

let beagle=new Dog("Sharo");

Dog.prototype.isPrototypeOf(beagle); // returns true