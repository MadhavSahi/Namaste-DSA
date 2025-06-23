var reverseStr = function (str, k) {
    let temp = 0;
    let newStr = ''
    for (let i = 0; i < str.length; i += k) {
        let subStr = str.substring(i, i + k)
        if (temp % 2 === 0) {
            newStr += subStr.split('').reverse().join('');
        } else {
            newStr += subStr;
        }
        temp++;
    }
    return newStr;
}

//
var reverseStr = function(s, k) {
    let arr=s.split('');
    if(k==1 || s.length==1){
        return s;
    }
    let size=s.length;
    for(let i=0;i<size;i=i+k+k){
        //swapping k chars in 2k length.
        for(let j=0;j<Math.floor(k/2);j++){
            let temp=arr[i+j];
            arr[i+j]=arr[i+k-1-j];
            arr[i+k-1-j]=temp;
        }
    }
    return arr.join('');
};