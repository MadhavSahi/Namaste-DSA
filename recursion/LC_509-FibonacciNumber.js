//excellent problem to learn recursion.

// can be solved iteratively as well.
//iterative approach
var fib = function(n) {
   let fArray=new Array(n).fill(0);
   if(n==0 || n==1){
    return n;
   }
   fArray[0]=0;
   fArray[1]=1;
   for(let i=2;i<=n;i++){
    fArray[i]=fArray[i-1]+fArray[i-2];
   }
   return fArray[n];
};

//recursive approach.
let fibonacci=function(n){
    if(n==0 || n==1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}