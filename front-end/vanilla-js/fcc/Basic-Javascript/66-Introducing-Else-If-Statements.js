/*
66-Introducing-Else-If-Statements.js

f you have multiple conditions that need to be addressed, you can chain
if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Instructions
Convert the logic to use else if statements.

*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
      return "Smaller than 5";
  } else {
      return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
