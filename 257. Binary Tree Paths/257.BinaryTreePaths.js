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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // Initialize an array to store all root-to-leaf paths.
  const result = [];

  // Helper function to perform DFS on the tree.
  function dfs(node, path) {
    if (node) {
      // If the current node is not null
      // Append the current node's value to the path.
      path += node.val;

      // If the current node is a leaf (no left and right children), add the path to the result.
      if (!node.left && !node.right) {
        result.push(path);
      } else {
        // If the current node is not a leaf, continue the DFS on both children.
        // Add '->' to the path before going deeper.
        path += "->";
        dfs(node.left, path);
        dfs(node.right, path);
      }
    }
  }

  // Start DFS with the root node and an empty path string.
  dfs(root, "");

  // Return the array of all root-to-leaf paths.
  return result;
};
