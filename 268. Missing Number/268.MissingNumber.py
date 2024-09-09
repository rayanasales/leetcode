from typing import List

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = 0
        for i in range(1, len(nums) + 1):
            n += i
        for num in nums:
            n -= num
        return n