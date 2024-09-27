import java.util.HashMap;

class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>(); // Create a HashMap to store elements and their indices

        // Iterate over the array
        for (int i = 0; i < nums.length; i++) {
            // Check if the element already exists in the map and if the distance is <= k
            if (map.containsKey(nums[i]) && i - map.get(nums[i]) <= k) {
                return true; // Found duplicate within range
            }
            // Update the map with the current index
            map.put(nums[i], i);
        }

        return false; // No duplicates found within the allowed range
    }
}