class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        for (int i = m; i < m + n; ++i) {
            nums1[i] = nums2[i - m];
        }

        // Bubble sort in place nums1
        for (int i = 0; i < nums1.size(); ++i) {
            for (int j = i + 1; j < nums1.size(); ++j) {
                if (nums1[i] > nums1[j]) {
                    std::swap(nums1[i], nums1[j]);
                }
            }
        }
    }
};