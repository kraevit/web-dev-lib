(function IIFE() {

  function wait(message) {
    setTimeout( function timer(){
      console.log( message );
    }, 1000);
  }

  wait( "Hello, closure" );

  /* We take an inner function (named timer) and pass it to setTimeout(..). 
  But timer has a scope closure over the scope of wait(..), 
  indeed keeping and using a reference to the variable message.

  A thousand milliseconds after we have executed wait(..), and its inner scope
  should otherwise be long gone, that inner function timer still has closure over that scope.

  Deep down in the guts of the Engine, the built-in utility setTimeout(..) has reference to some parameter, 
  probably called fn or func or something like that. Engine goes to invoke that function, 
  which is invoking our inner timer function, and the lexical scope reference is still intact. */

})();
