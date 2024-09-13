/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    
    let newNums1 = nums1.slice(0,m);
    let newNums2 = nums2.slice(0,n);
    let mergedArr = newNums1.concat(newNums2);
    mergedArr = mergedArr.sort((a,b)=>a-b);
    for (let i = 0 ; i < mergedArr.length; i++) {
        nums1[i] = mergedArr[i];
    }
};