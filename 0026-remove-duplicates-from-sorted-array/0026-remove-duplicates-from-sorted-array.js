/**
 * @param {number[]} nums
 * @return {number}
 */



var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length;  i++){
        var left = i; 
        if(nums[left]== nums[i+1]) {
            nums.splice(i,1);
            i--;
        }
    }  

};
