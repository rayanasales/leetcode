import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>(); // Create a set to store unique elements
        for (int num : nums) {
            if (!set.add(num)) { // If insertion fails, duplicate found
                return true;     // Return true if a duplicate is found
            }
        }
        return false; // If no duplicates are found, return false
    }
}