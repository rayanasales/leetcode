class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()  # Create a Set to store unique elements
        # Loop through each element in the list
        for num in nums:
            # If the element is already in the Set, it means we have found a duplicate
            if num in seen:
                return True  # Return True because a duplicate is found
            # Otherwise, add the element to the Set to keep track of it
            seen.add(num)
        # If the loop completes and no duplicates are found, return False
        return False