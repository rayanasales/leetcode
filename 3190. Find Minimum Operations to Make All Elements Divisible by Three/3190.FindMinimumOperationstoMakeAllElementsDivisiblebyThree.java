public class Solution {
    public int minimumOperations(int[] nums) {
        int operations = 0;
        for (int n : nums) if (n % 3 != 0) operations++;
        return operations;
    }
}