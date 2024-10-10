class Solution {
  public int[] intersect(int[] nums1, int[] nums2) {
      // Step 1: Create a frequency array for nums1
      int[] freq = new int[1001]; // from the constraints, max length is 1k
      for (int num : nums1) {
          freq[num]++; // Count frequency of each element in nums1
      }
      
      // Step 2: Prepare a temporary array to store the result
      int[] tempResult = new int[Math.min(nums1.length, nums2.length)];
      int index = 0;
      
      // Step 3: Traverse nums2 and collect the intersection
      for (int num : nums2) {
          if (freq[num] > 0) {
              tempResult[index++] = num; // Add the number to the result
              freq[num]--; // Decrease the frequency count
          }
      }
      
      // Step 4: Copy the result to an array of the correct size
      int[] result = new int[index];
      System.arraycopy(tempResult, 0, result, 0, index);
      return result;
  }
}
