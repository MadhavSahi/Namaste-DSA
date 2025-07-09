/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let s_size = s.length;
    let t_size = t.length;
    let i=0,j=0;
    while(i<s_size && j<t_size){
        if(s[i]===t[j]){
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    if(i===s_size){
        return true;
    }
    return false;
};