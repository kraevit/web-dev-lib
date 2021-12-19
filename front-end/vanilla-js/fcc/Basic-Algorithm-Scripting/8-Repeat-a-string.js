/*
  Repeat a string repeat a string

  Repeat a given string (first argument) num times (second argument). 
  Return an empty string if num is not a positive number.

  Here are some helpful links:
    Global String Object

*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0) {
    return "";
  } 
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);