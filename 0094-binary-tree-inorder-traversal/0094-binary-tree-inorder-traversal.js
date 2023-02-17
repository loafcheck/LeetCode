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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    const traverse = function (node) {
        if (node === null) {
            return;
        }
        if (node.left) {
            traverse(node.left);
        }
         
        result.push(node.val);
        
        if (node.right) {
            traverse(node.right);
        }
         
    }
    traverse(root)
    return result;
 
};