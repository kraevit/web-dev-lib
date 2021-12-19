/*
24-Concatenating-Strings-with-Plus-Operator.js
In JavaScript, when the + operator is used with a String value, it is called
the concatenation operator. You can build a new string out of other strings by
 concatenating them together.

Example

'My name is Alan,' + ' I concatenate.'
Note
Watch out for spaces. Concatenation does not add spaces between concatenated
 strings, so you'll need to add them yourself.

Instructions
Build myStr from the strings "This is the start. " and "This is the end." using the + operator.
*/

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line
var first, second, space, myStr;

  first = "This is the start";
  second = "This is the end";
  space = " ";
  myStr = first + space + second;
  console.log(myStr);
