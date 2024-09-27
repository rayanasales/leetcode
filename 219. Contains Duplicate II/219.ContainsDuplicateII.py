class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        seen = {}  # Create a HashMap to store elements and their indices

        # Iterate over the array
        for i, num in enumerate(nums):
            # Check if the element already exists in the map and if the distance is <= k
            if num in seen and i - seen[num] <= k:
                return True  # Found duplicate within range
            # Update the map with the current index
            seen[num] = i

        return False  # No duplicates found within the allowed range