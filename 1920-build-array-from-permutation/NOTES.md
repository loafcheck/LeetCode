//go through nums array -> for loop
//make blank output array
//for each i putting -> replace it with new i
~~~
function permutation (nums) {
  let output = [];
  for (let i = 0 ; i < nums.length ; i++ ) {
    output[i] = nums[nums[i]];
    }
    return output;
  };
  ~~~
