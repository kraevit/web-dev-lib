// Various module dependency loaders/managers essentially wrap up this pattern of module definition into a friendly API. 
// Rather than examine any one particular library, let me present a very simple proof of concept for illustration purposes (only):

var MyModules = (function Manager() {
  
  var modules = {};
  
  function define(name, deps, impl) {
    for (var i=0; i<deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply( impl, deps );
  }
  
  function get(name) {
    return modules[name];
  }
  
  return {
    define: define,
    get: get
  };

})();

/*
The key part of this code is modules[name] = impl.apply(impl, deps). 
This is invoking the definition wrapper function for a module (passing in any dependencies), 
and storing the return value, the module's API, into an internal list of modules tracked by name.
*/

// And here's how I might use it to define some modules:

MyModules.define( "bar", [] function(){
  function hello(who) {
    return "Let me introduce: " + who;
  }
  
  return {
    hello: hello
  };
  
});

MyModules.define( "foo", ["bar"], function(bar){
  var hungry = "hippo";
  
  function awesome() {
    console.log( bar.hello( hungry ).toUpperCase() );
  }
  
  return {
    awesome: awesome
  };
});

var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );

console.log(
  bar.hello( "hippo" );
); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO

/*Both the "foo" and "bar" modules are defined with a function that returns a public API. "foo" even receives the 
instance of "bar" as a dependency parameter, and can use it accordingly.*/
