for (var i=0; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i ); // 6 6 6 6 6
  }, i*1000 );
}
/* What's missing is that we are trying to imply that each iteration of the loop 
"captures" its own copy of i, at the time of the iteration. But, the way scope works, 
all 5 of those functions, though they are defined separately in each loop iteration, 
all are closed over the same shared global scope, which has, in fact, only one i in it. */

for (var i=0; i<=5; i++) {
  (function() {
    setTimeout( function timer(){
      console.log( i ); // 6 6 6 6 6
    }, i*1000 );
  })();
}
/* It's not enough to have a scope to close over if that scope is empty. Look closely. 
Our IIFE is just an empty do-nothing scope. It needs something in it to be useful to us. */


for (var i=0; i<=5; i++) {
  (function () {
    var j = i;
    setTimeout( function timer(){
      console.log( j ); // 0 1 2 3 4 5
    }, j*1000);
  })();
}
/* It needs its own variable, with a copy of the i value at each iteration. */

for (var i=0; i<=5; i++) {
  (function ( j ){
    setTimeout( function timer(){
      console.log( j ); // 0 1 2 3 4 5
    }, j*1000);
  })( i );
}
/* some prefer this */

/* Block Scoping:

let

Look carefully at our analysis of the previous solution. We used an IIFE 
to create new scope per-iteration. In other words, we actually needed a per-iteration block scope. 
Chapter 3 showed us the let declaration, which hijacks a block and declares a variable right there in the block.
It essentially turns a block into a scope that we can close over. So, the following awesome code "just works": */

for (var i=0; i<=5; i++) {
  let j = i;
  setTimeout( function timer(){
    console.log( j ); // 0 1 2 3 4 5
  }, j*1000);
}


for (let i=0; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i );  // 0 1 2 3 4 5
  }, i*1000);
}
// let shines!
