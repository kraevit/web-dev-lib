/*
5-Title-Case-a-Sentece.js

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
*/

function titleCase(str) {

  // make sure all letters are lowercase and split it to array of string
  str = str.toLowerCase().split(" ");

  // run trough all of the words and capitalize first letters
  for (var i = 0; i < str.length; i++)
  {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  // revert array back to string
  str = str.join(" ");

  return str;
}

titleCase("this is just testing program");
