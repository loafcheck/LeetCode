/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0; // Empty needle is always found at index 0
    
    let haystackArr = haystack.split('');
    let needleArr = needle.split('');
    
    for (let i = 0; i <= haystackArr.length - needleArr.length; i++) {
        let match = true;
        for (let j = 0; j < needleArr.length; j++) {
            if (haystackArr[i+j] !== needleArr[j]) {
                match = false;
                break;
            }
        }
        if (match) return i; // Return the index where needle starts in haystack
    }
    
    return -1; // Needle not found
};

