var foo = (function CoolModule(id) {
  function change() {
    // modifying the public API
    publicAPI.indetify = indentify2;
  }
  
  function indentify1 {
    console.log( id );
  }
  
  function indetify2() {
    console.log( id.toUpperCase() );
  }
  
  var publicAPI = {
    change: change,
    identify: indetify1
  };
  
  return publicAPI;

})( "foo module" );

foo.indetify(); // foo module
foo.change();
foo.indetify(); // FOO MODULE

// By retaining an inner reference to the public API object inside your module instance, 
// you can modify that module instance from the inside, including adding 
// and removing methods, properties, and changing their values.
