/*

  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a 
  shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
  Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
  Write a function which takes a ROT13 encoded string as input and returns a decoded string.
  All letters will be uppercase. Do not transform any non-alphabetic character 
  (i.e. spaces, punctuation), but do pass them on.

  Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

  Here are some helpful links:

  String.prototype.charCodeAt()
  String.fromCharCode()

*/

function rot13(str){ // LBH QVQ VG!
  str = str.split("").map(cipher).join("");
  return str;
}

var cipher = function(letter){
  var regEx = /[^a-zA-Z]/g;
  var asciiCode = letter.charCodeAt(0);
  
  if(regEx.test(letter)){
    return letter;
  }
  
  if(asciiCode > 77){
    asciiCode -= 13;
  } else {
    asciiCode += 13;
  }
  return String.fromCharCode(asciiCode);
};

// Change the inputs below to test
rot13("XENRI XENFVZVE");