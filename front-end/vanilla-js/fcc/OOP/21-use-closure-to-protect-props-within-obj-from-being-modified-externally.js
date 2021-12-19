function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}

let tweety = new Bird();
tweety.getWeight();
