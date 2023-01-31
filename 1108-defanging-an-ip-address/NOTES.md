Pseudocode

1. We need to replace "." to "[.]"
2. Go through the address string. For example if the address string is "1.1", 
3. Compare each index of the string 
4. if it matches "." replace with "[.]"
5. else keep the index value
6. Make a new string and place the result into it.

~~~
var defangIPadd = function (address) {
let result = '' ;
for ( let i = 0 ; i < address.length ; i++ ) {
  let character = address[i];
  if (character === ".") {
    result = result + "[.]" 
    } else {
    result = result + character
    }
  }
  return result
}
~~~
