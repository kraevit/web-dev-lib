/*
Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arithmetic Operators
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

    Recursive factorial formula

    http://www.rapidtables.com/math/algebra/Factorial.html

*/

function factorialize(num) {

  var fact = 1;

  if ( num > 1 ) {
    for ( var i = 2; i <= num; i++ ) {
      fact = fact * i;
    }
  }

  console.log(fact);
  return fact;
}

factorialize(9);
