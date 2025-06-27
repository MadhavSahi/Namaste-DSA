/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap=new Map();
    for(let x of strs){
        let sortedStr=x.split('').sort().join('');
        if(hashmap.has(sortedStr)){
            hashmap.get(sortedStr).push(x);
        }
        else{
            hashmap.set(sortedStr,[x]);
        }
    }
    // let output=[];
    return [...hashmap.values()];
    // return output
};