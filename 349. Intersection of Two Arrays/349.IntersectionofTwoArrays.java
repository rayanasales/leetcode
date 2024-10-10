class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        // Step 1: Create a boolean array to track the presence of numbers in nums1
        boolean[] seen = new boolean[1001];
        for (int num : nums1) {
            seen[num] = true;  // Mark numbers present in nums1
        }

        // Step 2: Create a temporary array for the intersection result
        int[] tempResult = new int[1001];
        int index = 0;

        // Step 3: Traverse nums2 and check for intersection, avoiding duplicates
        boolean[] added = new boolean[1001];  // To track numbers already added to the result
        for (int num : nums2) {
            if (seen[num] && !added[num]) {
                tempResult[index++] = num;  // Add number to result
                added[num] = true;  // Mark it as added to avoid duplicates
            }
        }

        // Step 4: Copy the result to an array of the correct size
        int[] result = new int[index];
        System.arraycopy(tempResult, 0, result, 0, index);
        return result;
    }
}