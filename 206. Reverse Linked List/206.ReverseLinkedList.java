
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        return reverseListRecursive(head, null);
    }

    private ListNode reverseListRecursive(ListNode current, ListNode prev) {
        if (current == null) return prev; // Base case: end of list
        ListNode next = current.next; // Save next node
        current.next = prev; // Reverse the link
        return reverseListRecursive(next, current); // Recurse with next node and current as new prev
    }
}