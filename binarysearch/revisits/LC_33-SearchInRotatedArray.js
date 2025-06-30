/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let size = nums.length;
    let l = 0;
    let r = size - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        //it means array is left to mid sorted
        if (nums[l] <= nums[mid]) {
            if (nums[mid] > target && target >= nums[l]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        //it means array is mid to right sorted
        else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }

        }
    }
    return -1;
};