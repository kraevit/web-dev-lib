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