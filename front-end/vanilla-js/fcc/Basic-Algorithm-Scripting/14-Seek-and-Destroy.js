/* 
  Seek and Destroy

  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
  Remove all elements from the initial array that are of the same value as these arguments.
  
  Remember to use Read-Search-Ask if you get stuck. Write your own code.
  
  Here are some helpful links:

  Arguments object
  Array.prototype.filter()
*/

function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments); // conver arguments to an array

  for(var i = 0; i < arr.length; i++){              
    for(var a = 0; a < args.length; a++){           
      if(arr[i] === args[a]){                       // check to see elements to remove
        delete arr[i];                              // delete the matches
      }
    }
  }
  return arr.filter(Boolean);                       // return the arr cleaned from falsy values
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);