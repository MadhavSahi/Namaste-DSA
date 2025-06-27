/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1=new Map();
    let map2=new Map();
    //mapping for map1.
    for(let i=0;i<s.length;i++){
        if(map1.has(s[i])){
            if(map1.get(s[i])===t[i]){
                continue;
            }
            else{
                return false;
            }
        }
        else{
            map1.set(s[i],t[i]); //f-->b
        }
    }
    for(let i=0;i<t.length;i++){
        if(map2.has(t[i])){
            if(map2.get(t[i])===s[i]){
                continue;
            }
            else{
                return false;
            }
        }
        else{
            map2.set(t[i],s[i]); //b-->f
        }
    }
    return true;
};