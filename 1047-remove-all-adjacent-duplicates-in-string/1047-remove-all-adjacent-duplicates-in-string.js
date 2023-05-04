/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
    const stack = [];
    
    for (const c of s) {
        if (stack.length > 0 && c === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    
    return stack.join("");
};