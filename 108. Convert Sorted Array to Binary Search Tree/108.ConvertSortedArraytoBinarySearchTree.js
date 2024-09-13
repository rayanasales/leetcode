/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Converts a sorted array into a height-balanced Binary Search Tree (BST).
 * @param {number[]} nums - The sorted array.
 * @return {TreeNode} - The root node of the height-balanced BST.
 */
var sortedArrayToBST = function (nums) {
  // Helper function to build the BST recursively
  function buildBST(left, right) {
    // Base case: if left index exceeds right, there are no elements to include
    if (left > right) return null;

    // Middle element is chosen as the root for the balanced BST
    const mid = Math.floor((left + right) / 2);

    // Create the root node with the middle element
    const root = new TreeNode(nums[mid]);

    // Recursively build the left and right subtrees
    root.left = buildBST(left, mid - 1); // Left half
    root.right = buildBST(mid + 1, right); // Right half

    // Return the current root node
    return root;
  }

  // Start the recursive process
  return buildBST(0, nums.length - 1);
};
