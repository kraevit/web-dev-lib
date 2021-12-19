/*
Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to
check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

*/

function palindrome(str) {

  // defining variables
  var regEx, newStr, reversedStr;
  // create regex
  regEx = /[\W_]/g;
  // clean the string from unwanted chars
  newStr = str.toLowerCase().replace(regEx, '');
  // reverse the string
  reversedStr = newStr.split('').reverse().join('');
  // check to see if the given string is a palindrome or not
  console.log(newStr === reversedStr);
  // exit the function
  return newStr === reversedStr;
}

palindrome("eye");
