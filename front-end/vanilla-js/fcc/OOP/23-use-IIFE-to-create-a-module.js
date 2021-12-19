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

