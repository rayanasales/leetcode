class Solution {
    public boolean isPalindrome(ListNode head) {
        // Create a list to store the node values for easy comparison
        List<Integer> list = new ArrayList<>();

        // Traverse the linked list and add each node's value to the list
        while(head != null) {
            list.add(head.val);
            head = head.next; // Move to the next node
        }

        // Initialize two pointers: one at the start (left) and one at the end (right)
        int left = 0;
        int right = list.size() - 1;

        // Compare values from both ends of the list moving towards the center
        // If at any point the values don't match, it's not a palindrome
        while(left < right && list.get(left) == list.get(right)) {
            left++; // Move the left pointer towards the center
            right--; // Move the right pointer towards the center
        }

        // If the pointers have crossed, it means all compared values were the same, so it's a palindrome
        return left >= right;
    }
}