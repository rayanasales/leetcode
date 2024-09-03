/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Recursively reverse the linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head, prev = null) {
  if (!head) return prev; // Base case: end of the list reached, return new head
  let next = head.next; // Save next node
  head.next = prev; // Reverse current node's pointer
  return reverseList(next, head); // Recurse on the next node
};
