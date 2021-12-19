// https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8 

/* 
CLOSURE: 
          The closure is a collection of all the variables in scope at the time
          of creation of the function;
          
          Closure is when a function is able to remember and access its lexical scope
          even when that function is executing outside its lexical scope.

          */

// Function wich returns another function definiton + closure(backpack)

 function createCounter() {
    let counter = 0
    const myFunction = function() {
      counter = counter + 1
      return counter
    }
    return myFunction
  }
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)


// Function wich returns another FUNCTION DEFINITION + CLOSURE(backpack)

function makeAdder() {
    let i = 0; // counter
    const add = function() {
      i++; // i = i + 1
      return i;
    };
    return add;
}
const increment = makeAdder(); // here the result assigned to increment is function definition (line 25-26) + closure(backpack) 
const x1 = increment();
const x2 = increment();
const x3 = increment();
console.log( `Example increment: ${x1}, ${x2}, ${x3}` );
