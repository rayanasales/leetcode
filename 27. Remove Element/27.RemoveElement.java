
class Solution {
    public int removeElement(int[] nums, int val) {
        int index = 0; // Keeps track of where to place the next valid element

        // Loop through the entire array
        for (int i = 0; i < nums.length; i++) {
            // If the current element is not equal to val, it is a valid element
            if (nums[i] != val) {
                nums[index] = nums[i]; // Place the valid element at index
                index++; // Move the index forward
            }
        }

        return index; // Return the new length of the array
    }
}