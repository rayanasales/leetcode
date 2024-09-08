
class Solution {
    public int[] plusOne(int[] digits) {
        // Traverse the array from the end to the beginning
        for (int i = digits.length - 1; i >= 0; i--) {
            digits[i]++; // Increment the current digit

            // If the digit is less than 10, we can return the result
            if (digits[i] < 10) {
                return digits;
            }

            // If the digit is 10, set it to 0 and carry over the 1
            digits[i] = 0;
        }

        // If all digits were 9, add a 1 at the beginning
        int[] newDigits = new int[digits.length + 1];
        newDigits[0] = 1;

        return newDigits;
    }
}