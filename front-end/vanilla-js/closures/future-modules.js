/* ES6 adds first-class syntax support for the concept of modules. 
When loaded via the module system, ES6 treats a file as a separate module. 
Each module can both import other modules or specific API members, 
as well export their own public API members. */

// bar.js
function hello(who) {
  return "Let me introduce: " + who;
}

export hello;

// foo.js
//import only 'hello()' from "bar" module
import hello from "bar";

var hungry = "hippo";

function awesome() {
  console.log(
    hello( hungry ).toUpperCase()
  );
}

export awesome;


// import the entire "foo" and "bar" modules
module foo from "foo"
module bar from "bar"

console.log(
  bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: