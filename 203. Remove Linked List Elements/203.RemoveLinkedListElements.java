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

public class Solution {
    /**
     * Recursively remove all nodes with value val from the linked list.
     * @param head Current head of the linked list
     * @param val Value to be removed
     * @return Updated head of the linked list
     */
    public ListNode removeElements(ListNode head, int val) {
        if (head == null) return null; // Base case: end of list

        // Recursively process the rest of the list
        head.next = removeElements(head.next, val);

        // Return next node if current node needs to be removed
        return head.val == val ? head.next : head;
    }
}