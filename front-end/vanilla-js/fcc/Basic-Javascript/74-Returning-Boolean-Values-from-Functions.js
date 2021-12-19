/*
74-Returning-Boolean-Values-from-Functions.js

You may recall from Comparison with the Equality Operator that all comparison
operators return a boolean true or false value.

A common anti-pattern is to use an if/else statement to do
a comparison and then return true/false:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}
*/

function isLess(a, b) {
  return a < b;
}

// Change these values to test
isLess(10, 15);
