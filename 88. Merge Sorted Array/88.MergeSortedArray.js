var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    let temp = nums2.shift();
    nums1[i] = temp;
  }

  //buble sort in place nums1
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
};
