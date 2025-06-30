/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let size = nums.length;
  let left = 0;
  let right = size - 1;
  let ans = [-1, -1];
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (target === nums[mid]) {
      ans[0] = mid;
      right = mid - 1;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  left = 0;
  right = size - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (target === nums[mid]) {
      left = mid + 1;
      ans[1] = mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
