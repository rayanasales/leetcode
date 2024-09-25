class Solution {
    public int majorityElement(int[] nums) {
        // Initialize count and candidate
        int count = 0;
        int candidate = 0;

        // Iterate over each element in the nums array
        for (int num : nums) {
            // If count is 0, we set the candidate to the current number
            if (count == 0) {
                candidate = num;
            }

            // If the current number is equal to the candidate, increment the count
            // Otherwise, decrement the count
            if (num == candidate) {
                count++;
            } else {
                count--;
            }
        }

        // Return the candidate, which will be the majority element
        return candidate;
    }
}