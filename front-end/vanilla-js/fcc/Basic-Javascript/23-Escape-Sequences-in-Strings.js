/*
23-Escape-Sequences-in-Strings.js
Quotes are not the only characters that can be
escaped inside a string. Here is a table of common escape sequences:

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.

Instructions
Assign the following three lines of text into the single variable myStr using
escape sequences.

FirstLine
\SecondLine\
ThirdLine

You will need to use escape sequences to insert special characters correctly.
 You will also need to follow the spacing as it looks above, with no spaces
 between escape sequences or words.

Here is the text with the escape sequences written out.

FirstLinenewlinebackslashSecondLinebackslashcarriage-returnThirdLine

*/

var myStr = "FirstLine\n\\SecondLine\\\rThirdLine";
