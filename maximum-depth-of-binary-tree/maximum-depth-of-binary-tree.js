/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //basecase
    if(!root) return 0;
    
    //recursive
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    
    //compare
    return Math.max(left,right)+1;
};