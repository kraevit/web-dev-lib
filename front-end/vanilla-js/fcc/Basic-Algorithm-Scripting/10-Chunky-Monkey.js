/*
  Chunky Monkey

  Write a function that splits an array (first argument) 
  into groups the length of size (second argument) and returns them as a two-dimensional array.
Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()

*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var groups = [];
  
  for(var i = 0; i < arr.length; i+=size){
    groups.push(arr.slice(i, i+size));
  }
  
  return groups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);