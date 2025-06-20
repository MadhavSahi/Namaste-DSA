// let number = 1223333221;

function isPalindrome(num) {
  //COUNT DIGITS
  let original=num;
  let reverse = 0;
  while (num > 0) {
     let remainder = num % 10;
     num = Math.floor(num / 10);
     reverse = 10 * reverse + remainder;
  }
  if (reverse === original) {
    return true;
  } else {
    return false;
  }
}
function isPalindromeString(num){
   let str=num.toString();
   let reverse=str.split("").reverse().join("");
   if(str===reverse){
      return true;
   }
   else{
      return false;
   }
   
}
console.log(
  isPalindromeString(141141141141),
  " ",
  isPalindromeString(1233212),
  " ",
  isPalindromeString(1112),
  " ",
  isPalindromeString(101)
);
