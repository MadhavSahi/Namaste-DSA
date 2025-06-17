const arr=[100,1,2,3,4,3,24,9,10,300,300];

let largest=-Infinity;
let slargest=-Infinity;
function secondlargest(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            slargest=largest;
            largest=arr[i];
        }
        else if(arr[i]>slargest && arr[i]!=largest){
            slargest=arr[i];
        }
    }
    return slargest;
};

let ans=secondlargest(arr,arr.size);
console.log(ans);
