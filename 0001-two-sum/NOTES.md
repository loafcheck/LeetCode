#### dictionary
A dictionary has a set of keys and each key has a single associated value.
A general purpose data structure for storing a group of objects.

<img src="https://user-images.githubusercontent.com/106638262/215040778-35dda6d8-54be-4721-97e3-55207395f4bb.png" alt="dictionary" width="50%"/>

pseudocode
1. go through the whole array
2. pick the first value
3. go through remaining array
4. check if there is a value that will give the answer






#### first solution
~~~
function twoSum (nums, target) {
  for(let i = 0; i < nums.length ; i++) {
    for (let j = i - 1 ; j < nums.length ; j++ {
      if (nums[i]+nums[j] === target) return [i,j] ;
      }
    }
  }
~~~
example)

nums = [1,2,3,4,5] 
target = 9

1
0
1+0 === target 

This is too much repetition, so we use dictionary.


#### second solution
~~~
//storing {the difference : storing the index}
// {8:0 , 7:1 , 6:2 , 5: 3 , 4 :4 }
//nums = [1,2,3,4,5] 
//target = 9


let memory = {};

for(let i = 0; i < nums.length ; i++) { 
  if (memory[nums[i]] === undefined ) {
    memory[target - nums[i]] = i ;
    }else{
      return [i, memory[nums[i]]
     }
   }
 }
 
~~~





 

