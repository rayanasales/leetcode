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
