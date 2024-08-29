/**
 * Javascript Solution
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Base cases: if one of the lists is empty, return the other list
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  // Recursive case: compare the values of the current nodes
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2); // Merge the rest of list1 with list2
    return list1; // Return the current node as the next node in the merged list
  } else {
    list2.next = mergeTwoLists(list1, list2.next); // Merge list1 with the rest of list2
    return list2; // Return the current node as the next node in the merged list
  }
};
