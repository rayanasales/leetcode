# 100. Same Tree

## Found at

[Interview Prep – Google Tech Dev Guide](https://techdevguide.withgoogle.com/paths/interview/?programming_languages=javascript)

## Leetcode link

[Same Tree - LeetCode](https://leetcode.com/problems/same-tree/description/)

## Javascript code commented

```javascript
var isSameTree = function (p, q) {
  // Base case 1: Both nodes are null, which means we have reached the end of the tree in both cases, so they are the same.
  if (!p && !q) return true;

  // Base case 2: One node is null and the other isn't, which means the trees differ in structure, so they are not the same.
  if (!p || !q) return false;

  // Base case 3: Both nodes are not null, but their values differ, so the trees are not the same.
  if (p.val !== q.val) return false;

  // Recursive case: Check the right subtree and the left subtree.
  // Both subtrees must be the same for the trees to be considered identical.
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
```

## Why `Array.from` Doesn't Work with Tree Nodes?

A binary tree node in our code is typically structured as an object with properties `val`, `left`, and `right`, which represent the value of the node and its child nodes, respectively. Here's an example of a simple tree node structure:

```javascript
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
```

In this structure:

- `val` is the value of the node.
- `left` and `right` are references to the left and right child nodes, respectively.

### `Array.from` and Iterable Objects

`Array.from` is used to convert:

1. **Array-like objects**: Objects with a `length` property and indexed elements (like arguments objects or NodeLists).
2. **Iterable objects**: Objects that implement the iterable protocol (like strings, maps, or sets).

However, a tree node does not have a `length` property or an iterator method (`Symbol.iterator`). Therefore, `Array.from` cannot be used directly on a tree node.

## Leetcode post

[Same Tree - LeetCode](https://leetcode.com/problems/same-tree/solutions/5643019/simple-beginner-friendly-100-same-tree/)
