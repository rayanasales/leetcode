/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var isPalindrome = function (head) {
  // Create an array to store node values for comparison
  const list = [];

  // Traverse the linked list and push each node's value to the array
  while (head !== null) {
    list.push(head.val);
    head = head.next; // Move to the next node
  }

  // Initialize two pointers: one at the start (left) and one at the end (right)
  let left = 0;
  let right = list.length - 1;

  // Compare values from both ends of the list moving towards the center
  while (left < right && list[left] === list[right]) {
    left++; // Move the left pointer towards the center
    right--; // Move the right pointer towards the center
  }

  // If the pointers have crossed, all compared values were the same, so it's a palindrome
  return left >= right;
};
