/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    // Handle cases where k is greater than the length of the array
    k = k % nums.length; 
    
    // Slice the last k elements and the rest of the array
    const rotatedPart = nums.slice(-k); // Last k elements
    const remainingPart = nums.slice(0, nums.length - k); // All but last k elements
    
    // Concatenate the two parts
    const newNums = rotatedPart.concat(remainingPart);
    
    // Update the original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newNums[i];
    }
    
    return nums; // Return the final rotated array
}

// Testing the function
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
