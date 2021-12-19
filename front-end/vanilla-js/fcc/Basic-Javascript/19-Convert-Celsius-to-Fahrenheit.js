/*
19-Convert-Celsius-to-Fahrenheit.js

To test your learning, you will create a solution "from scratch".
Place your code between the indicated lines and it will be tested against
multiple test cases.

The algorithm to convert from Celsius
to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius.
 Use the variable fahrenheit already defined and apply the algorithm to assign
 it the corresponding temperature in Fahrenheit.

Note
Don't worry too much about the function and return statements as they
 will be covered in future challenges. For now, only use operators that
 you have already learned.

*/

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  console.log(message);

  fahrenheit = cToFahr;
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);
