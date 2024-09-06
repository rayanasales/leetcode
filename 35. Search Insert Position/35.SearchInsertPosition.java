class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        // Loop until the search space is exhausted
        while (left <= right) {
            int middle = (left + right) / 2; // Calculate the middle index

            if (nums[middle] == target) {
                return middle; // Target found, return its index
            } else if (nums[middle] < target) {
                left = middle + 1; // Move to the right half if target is greater
            } else {
                right = middle - 1; // Move to the left half if target is smaller
            }
        }

        // If target is not found, left will be the insertion point
        return left;
    }
}