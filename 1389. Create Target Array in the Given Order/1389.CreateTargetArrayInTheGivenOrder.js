var createTargetArray = function (nums, index) {
  let targetArray = [];
  for (let i = 0; i < nums.length; i++) {
    let targetIndex = index[i];
    let targetValue = nums[i];
    targetArray.splice(targetIndex, 0, targetValue); // 0 represents how many items must be deleted
  }
  return targetArray;
};
