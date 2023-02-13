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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// BST= Binary Search Problem
/*

---NOTE ---
Base Case:
if the tree had no values(no nodes) in it it would be essentially null 
   if (!node) {
            return 0;
        }
Then we have to check whether the node is within the range of low and high
Since 10 is within the range we have to add left side and right side

4 is outside the range
any value which is going to be added into the summation of this can only be found within the right side of the tree

Because!! we are using a binary search tree 

we find 7, this is within the range, we go down both left and right side. Which are both pointing to null. Return 0 

7 go add up to 4 but 4 is out so 7 goes up to 10 
-----
Now go down to the right side of 10 

15 is equal to high so if it's inbound we go down to the left side and right side. 
left side is equal to null 

18 is greater so when it is greater we go down to left side

There is only null. 

15 + 10 + 7 = 32


*/
        

var rangeSumBST = function(root, low, high) {
    let totalSum = 0;
    
    if(!root) return 0;
    
    if (root.val > high) {
        return rangeSumBST (root.left, low, high);
    } else if (root.val < low) {
        return rangeSumBST (root.right, low, high);
    } else {
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    }
};