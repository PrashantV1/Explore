// Kadane’s Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and return its sum and print the subarray.

// Input: arr = [-2,1,-3,4,-1,2,1,-5,4]

// Output: 6

// Explanation: [4,-1,2,1] has the largest sum = 6.


const a = [1, 2, 3, -15, 5];
const b= [-2,1,-3,4,-1,2,1,-5,4];
const c =[-1, -2, -3, -4];
console.log(kadane(c))

function kadane(arr) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    current = current + arr[i];
    if (current > max) max = current;
    if (current < 0) current = 0;
  }
  if (max==0)return Math.max(...arr)
  return max;
}
