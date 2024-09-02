/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Recursively remove all elements from the linked list that have the value val.
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return null; // Base case: if the list is empty, return null

  // Recurse down the list
  head.next = removeElements(head.next, val);

  // Decide whether to exclude the current head
  return head.val === val ? head.next : head;
};
