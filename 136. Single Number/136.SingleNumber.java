class Solution {
    public int singleNumber(int[] nums) {
        // Initialize a variable to store the result
        int result = 0;

        // XOR every number in the array
        for (int i = 0; i < nums.length; i++) {
            result ^= nums[i]; // Apply XOR operation
        }

        // The result will hold the single number
        return result;
    }
}