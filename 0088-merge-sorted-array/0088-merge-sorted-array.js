/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m == 0) {
        for (let i = 0 ; i < n ; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
};

// Example usage:
let nums1 = [4, 0, 0, 0, 0, 0];
let m = 1;
let nums2 = [1, 2, 3, 5, 6];
let n = 5;

console.log(merge(nums1, m, nums2, n)); // Output: [1, 2, 3, 4, 5, 6]
