var isPalindrome = function (s) {
    let left=0;
    let right=s.length-1;
    while(left<=right){
        if((s[left].toLowerCase()<"a" && s[left].toLowerCase()>"z") || (s[left].toLowerCase()<"0" && s[left].toLowerCase()>"9")){
            left++;
            // continue;
        }
        if((s[right].toLowerCase()<"a" && s[right].toLowerCase()>"z") || (s[right].toLowerCase()<"0" && s[right].toLowerCase()>"9")){
            right--;
            // continue;
        }
        if(s[left]!==s[right]){
            return false;
        }
        else{
            left++;
            right--;
        }
    }
    return true;
};