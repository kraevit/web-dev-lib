// Example code:
Bird.prototype.numlegs=2;
Bird.prototype.eat=function() {
  console.log("nom nom nom");
}
Bird.prototype.describe=function() {
  console.log("My name is " + this.name);
}

// Instead add all props all at once:
Bird.prototype = {
  numLegs:2,
  eat:function(){
    console.log("nom nom nom");
  },
  describe:function(){
    console.log("My name is " + this.name);
  }
}
