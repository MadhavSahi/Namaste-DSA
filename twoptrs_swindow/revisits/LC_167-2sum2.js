/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//input array sorted - hence can use 2 pointers
var twoSum = function(nums, k) {
  let i=0;
  let j=nums.length-1;
  while(i<j){
    if(nums[i]+nums[j]===k){
        return [i+1,j+1];
    }
    else if(nums[i]+nums[j]<k){
        i++;
    }   
    else if(nums[i]+nums[j]>k){
        j--;
    }
  }  
};