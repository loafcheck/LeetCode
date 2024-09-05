/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [0,0,1,1,1]
 * Output: 5, nums = [0,1,]
 */
var removeDuplicates = function(nums) {
   let i = 0;

    while (i < nums.length - 1) {
        
        if (nums[i] === nums[i + 1]) {
        
            nums.splice(i + 1, 1);
          
        } else {
           
            i++;
        }
    }

    return;
    
};

/*
1. check each element in the array
2. compare left element to the right and if it is same eliminate
3. compare left element to the right and if it is not same left should become right
4. if left element has reached to the length of nums array end the function
*/