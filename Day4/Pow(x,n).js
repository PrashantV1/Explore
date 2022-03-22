/*Implement Pow(x,n) | X raised to the power N
Problem Statement: Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).

Input: x = 2.00000, n = 10

Output: 1024.00000

Explanation: You need to calculate 2.00000 raised to 10 which gives ans 1024.00000  */
console.log(power(2, 3));
function Pow(x, n) {
  const current = x;
  if (n == 0) return 1;

  for (let i = 1; i < n; i++) {
    x = x * current;
  }
  return x;
}

function power(x, n) {
  let result = 1;
  while (n > 0) {
    if (n % 2 == 0) {
      x = x * x;
      n = n / 2;
    } else {
      result = result * x;
      n = n - 1;
    }
 
  }   return result;
}
