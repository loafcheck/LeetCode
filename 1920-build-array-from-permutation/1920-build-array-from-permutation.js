/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
//run a for loop through nums array
//for each i putting the new value and replace it with i
//return the output array

var buildArray = function(nums) {
    var output = [];
    for (var i = 0 ; i < nums.length ; i ++) {
        output[i] = nums[nums[i]];
        
    }
    return output;
};