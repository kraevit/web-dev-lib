### 1. Create Basic Js Objects
```javascript
let dog = {
  name: "Sharo",
  numLegs: 4
}
```

### 2. Use Dot(.) Notation to Access Properties of an Object
```javascript
let dog={
  name: "Sharo",
  numLegs: 4
}
console.log(dog.name);
console.log(dog.numLegs);
```

### 3. Create a Method on an Object
```javascript
let dog = {
  name: "Sharo",
  numLegs: 4,
  sayLegs: function() {
    console.log(this.numLegs);
  },
  sayName: function() {
    return "The name of this dog is " + this.name;
  }
}
```

### 4. Define a Constructor Function
```javascript
function Dog(name,color) {
  this.name=name;
  this.color=color;
  this.numLegs=4;
}

let sharo = new Dog("Sharo", "Brown");
```

### 5. Verify an Object Constructor with "instaceoff"
```javascript
function House(numBedrooms) {
  this.numBedrooms=numBedrooms;
}

let myHouse=new House(4);

console.log(myHouse instaceof House);
```

### 6. Understanding Own Properties
```javascript
function Bird(name) {
  this.name=name;
  this.numLegs=2;
}

let canary=new Bird("Tweety");
let ownProps=[];

for(let prop in canary) {
  if(canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

console.log(ownProps);
```

### 7. Use Protptype Properties to Reduce Duplicate Code
```javascript
function Dog(name) {
  this.name=name;
}

Dog.prototype.numLegs=4;

let beagle=new Dog("Snoopy");

console.log(beagle.numLegs);
```

### 8. Iterate Over All Properties
```javascript
function Dog(name) {
  this.name=name;
}

Dog.prototype.numLegs=4;

let beagle = new Dog("Snoopy");

let ownProps=[];
let prototypeProps=[];

for(let prop in beagle) {
  if(beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}

console.log(ownProps);
console.log(prototypeProps);
```

### 9. Understanding the Constructor Property
```javascript
function Dog(name) {
  this.name=name;
}

function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
```

### 10. Change the Prototype to a New Object
```javascript
// Example code:
Bird.prototype.numlegs = 2;
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}
Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

// Instead add all props all at once:
Bird.prototype = {
  numLegs: 2,
  eat: function(){
    console.log("nom nom nom");
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
}
```

### 11. Remember to Set the Constructor Property when Changing the Prototype
```javascript
function Dog(name){
  this.name=name;
}

Dog.prototype={
  constructor: Dog,
  numLegs: 4,
  eat: function(){
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
}
```

### 12. Understand Where an Object Prototype Comes from
```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Sharo");

Dog.prototype.isPrototypeOf(beagle); // returns true
```

### 13. Understand the Prototype Chain
```javascript
function Dog(name) {
  this.name=name;
}

let beagle = new Dog("Sharo");

Dog.prototype.isPrototypeOf(beagle) // returns true

Object.prototype.isPrototypeOf(Dog.prototype) //  returns true
```

### 14. Use Inheritance so You dont Repeat Yourself
```javascript
function Cat(name) {
  this.name = name;
}

Cat.prototype={
  constructor: Cat
}

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear;
}

function Animal() {}

/// Animal Supertype
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");   
  }
}
```

### 15. Inherit Behaviors from a SuperType
```javascript
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
}

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
```

### 16. Set the Child's Prototype to an Instance of the Parent
```javascript
function Animal() { }

Animal.prototype={
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom")
  }
}

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

beagle.eat();
```

### 17. Reset an Inherited Constructor Property
```javascript
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
```

### 18. Add Methods After Inheritance
```javascript
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
```

### 19. Override Inherited Methods
```javascript
function Bird() { }

Bird.prototype.fly=function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor= Penguin;
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

let penguin = new Penguin();
console.log(penguin.fly());
```

### 20. Use a Mixin to Add Common Behavior between Unrelated Objects
```javascript
let bird = {
  name: "Donald",
  numLegs: 2
}

let boat = {
  name: "Warrior",
  type: "race-boat"
}

let glideMixin = function(obj) {
  obj.glide=function() { 
    console.log("related content here");
  }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
```

### 21. Use Closure to Protect Properties within Object from Being Modifiled Externally
```javascript
function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}

let tweety = new Bird();
tweety.getWeight();
```

### 22. Understanding IIFE
```javascript
// function makeNest() {
//   console.log("A cozy nest is ready");
// }

// makeNest();

(function(){
  console.log("A cozy neat is ready");
})();
```
### 23. Use IIFE to Create a Module
```javascript
// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };

// Convert to module

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      }
    },
    singMixing: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();

let person = {};
funModule.isCuteMixin(person);
person.isCute();
```
