/*
  Mutations

  Return true if the string in the first element of the array 
  contains all of the letters of the string in the second element of the array.

  For example, ["hello", "Hello"], should return true because all of the letters in 
  the second string are present in the first, ignoring case.
  The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
  Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

  Remember to use Read-Search-Ask if you get stuck. Write your own code.

  Here are some helpful links:

  String.prototype.indexOf()

*/

function mutation(arr) {
  
  // make sure all elems of the arr are lowercase
  arr = arr.map(function(e){
    return e.toLowerCase();
  });
  
  // split second elem into letters
  var letters = arr[1].split("");
  
  // check to see if second elem exist in the first elem of the arr
  for(var l = 0; l < letters.length; l++){
    if (arr[0].indexOf(letters[l]) == -1){
      return false;
    }
  }
  return true;  
}

function mutation_short(arr) {
  arr = arr.map(word=>word.toLowerCase().split(""));
  return arr[1].every(letter=>arr[0].indexOf(letter) != -1);
}

mutation_short(["hello", "hey"]);
