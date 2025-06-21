// let x=10;
// let y=0;
// x=y;
// y=100;
// console.log(x);
function factorial(n) {
  if (n === 0) {
    return 1; // 🛑 Base case
  }
  return n * factorial(n - 1); // 🔁 Recursive case
}

console.log(factorial(5)); // 120
