/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   let left = 0;
    let right = s.length -1;
    let temp =[];

    while(left < right) {
        temp[left] = s[left];

        s[left] = s[right];

        s[right] = temp[left]

        left++
        right--
    }

    return;
    
};

/*
1.decreasing s.length 
2. s[i] insert to s 
*/