var singleNumber = function (nums) {

    let n = nums.length;
    if (n == 1) {
        return nums[0];
    }
    //will use XOR.
    let ans=0;
    for(let i=0;i<n;i++){
        ans^=nums[i];
    }
    return ans;
    // let map = new Map();
    // let count=1;
    // for (let i = 0; i < n; i++) {
    //     if (map.has(nums[i])) {
    //         count++;
    //         map.set(nums[i], count);
    //     }
    //     else{
    //         map.set(nums[i], 1);
    //     }
    // }
    // for(let i=0;i<n;i++){
    //     if(map.get(nums[i])===1){
    //         return nums[i];
    //     }
    // }
};
console.log(singleNumber([1,2,3,4,4,3,2]));
