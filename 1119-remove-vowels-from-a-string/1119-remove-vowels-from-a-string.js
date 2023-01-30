/**
 * @param {string} s
 * @return {string}
 */
/*
go through entire loop
if you find vowles a e i o u 
remove 
make a new string

Character classes
Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits.
let reg = /[aeiou]/
let reg = /[aeiou]/i -The regular expression includes the i flag so that upper/lower case differences will be ignored.
let reg = /[aeiou]/g - global flag allows you to check every characters [a, e, i, o, u] in the array. if you don't use g flag it will only check once. 

regex: regular expression 정규표현식 
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/
var removeVowels = function(s) {
    let array1 = s.split("");
    let reg = /[aeiou]/ig;
    let array2 = s.match(reg);
    let noVowels = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i])===-1) {
            noVowels.push(array1[i]);
        }
    }
return noVowels.join("");
 
};
