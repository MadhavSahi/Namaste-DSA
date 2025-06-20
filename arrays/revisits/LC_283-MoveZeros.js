//looks normal but ya the swap thing is good using 2 ptrs.
var moveZeroes = function(nums) {
   let n = nums.length;
   let i,j=0;
   let temp=null;
   for(i=0;i<n;i++){
        if(nums[i]!==0){
            temp=nums[j];
            nums[j]=nums[i];
            nums[i]=temp;
            j++;
        }
        else{
            // j++;
        }
   } 
   return nums;
};