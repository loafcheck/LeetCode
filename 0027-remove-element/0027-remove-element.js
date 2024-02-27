/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== val) {
            nums[count] = nums[i]
            count++;
        }
    }
    return count;
    
};

/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

1.create count variable : it will count everytime val doesn't match nums[index]
2.Loop through entire nums
    a.if current value doesn't equal to val
    b.nums[count] = nums[index]
    c.increment count
3.Return count+1
*/