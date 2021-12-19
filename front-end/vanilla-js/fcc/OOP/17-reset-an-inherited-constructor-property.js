function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype=Object.create(Animal.prototype);
Dog.prototype=Object.create(Animal.prototype);

duck.constructor // function Animal() { }
beagle.constructor // function Animal() { }

Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;

bird.constructor // function Bird() { }
beagle.constructor // function Dog() { }

let bird = new Bird();
let beagle = new Dog();
