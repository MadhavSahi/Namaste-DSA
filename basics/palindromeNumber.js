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
console.log(
  isPalindrome(141141141141),
  " ",
  isPalindrome(123321),
  " ",
  isPalindrome(1112),
  " ",
  isPalindrome(101)
);
