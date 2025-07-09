/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let size = nums.length;
    let map = new Map();
    for (let i = 0; i < size; i++) {

        map.set(nums[i], i);

    }
    for (let i = 0; i < size; i++) {
        if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
            return [i, map.get(target - nums[i])];
        }
    }
};