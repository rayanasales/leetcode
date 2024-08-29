/**
 * JAVA SOLUTION
 *
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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Base cases: if one of the lists is empty, return the other list
        if (list1 == null) {
            return list2;
        }
        if (list2 == null) {
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
    }
}