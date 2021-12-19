/*
Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.split()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


    String.length

*/


function findLongestWord(str) {

  var words, maxLen;

  // split string to an array of words
  words = str.split(' ');

  maxLen = 0;

  for (var i = 0; i < words.length; i++ ) {
    // console.log(i);
    if ( words[i].length > maxLen ) {
      maxLen = words[i].length;
    }
  }
  // console.log(maxLen);
  return maxLen;
}

findLongestWord("The loong word");
