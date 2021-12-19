/*
25-Concatenating-Strings-with-the-Plus-Equals-Operator.js

We can also use the += operator to concatenate a string onto the end of
an existing string variable. This can be very helpful to break a long string over several lines.

Note
Watch out for spaces. Concatenation does not add spaces between concatenated
strings, so you'll need to add them yourself.

Instructions
Build myStr over several lines by concatenating these two strings:
"This is the first sentence. " and "This is the second sentence."
using the += operator.

*/

var first, second, myStr;

  first = "This is the first sentence";
  second = " This is the second sentence";
  myStr = first += second;
    console.log(myStr);
