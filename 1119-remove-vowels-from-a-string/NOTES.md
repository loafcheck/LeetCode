1.we have to make given string s into an array
2.we need to use Regex (Regular Expressions) to check whether if the given string contains [aeiou]
3.go through the loop of the string 
4.match and compare to see if there is a vowel in the given array
5.return new string without the vowel.


Regular Expressions
let reg = /[aeiou]/
let reg = /[aeiou]/i -The regular expression includes the i flag so that upper/lower case differences will be ignored.
let reg = /[aeiou]/g - global flag allows you to check every characters [a, e, i, o, u] in the array. if you don't use g flag it will only check once. 

regex: regular expression 정규표현식 
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

indexOf
Definition and Usage
The indexOf() method returns the position of the first occurrence of a value in a string.

The indexOf() method returns -1 if the value is not found.

The indexOf() method is case sensitive.
string.indexOf(searchvalue, start)

example)
 text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
//13

