function Animal() { }
Animal.prototype={
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
}

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("bark");
}

let beagle=new Dog();

beagle.eat();
beagle.bark();
