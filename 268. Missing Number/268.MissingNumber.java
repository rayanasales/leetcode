class Solution {
    public int missingNumber(int[] nums) {
        // Initialize 'n' as 0. This variable will store the sum of integers
        // from 1 to the length of the array 'nums'.
        int n = 0;

        // First for loop: We iterate over the range from 1 to the length of the array.
        // For each i in this range, we add it to 'n'. By the end of the loop, 'n' will
        // hold the sum of all integers from 1 to nums.length.
        for (int i = 1; i <= nums.length; i++) {
            n += i;
        }

        // Second for loop: Now, we iterate over the array 'nums' itself.
        // In each iteration, we subtract the value of nums[i] from 'n'.
        // This effectively removes the numbers present in the array from the sum
        // we calculated in the previous loop. At the end of this loop,
        // the remaining value in 'n' will be the missing number.
        for (int i = 0; i < nums.length; i++) {
            n -= nums[i];
        }

        // The remaining value in 'n' is the missing number, so we return it.
        return n;
    }
}