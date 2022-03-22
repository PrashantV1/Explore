/* Find the Majority Element that occurs more than N/2 times
Problem Statement: Given an array of N integers, write a program to return an element that occurs 
                   more than N/2 times in the given array. You may consider that such an element always exists in the array.

                   Input Format: N = 3, nums[] = {3,2,3}

Result: 3

Explanation: When we just count the occurrences of each number and compare with half of the size of the array,
              you will get 3 for the above solution.  */

//  Approach 1: using hashmap
const a =[1,1,1,1,5,6,7]
console.log(maxelement(a))
function maxelement(arr) {
  const output = new Object();
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (output[arr[i]]) output[arr[i]] += 1;
    else output[arr[i]] = 1;
  }

  for (const [key, value] of Object.entries(output)) {
    if (value > Math.floor(n / 2)) return key;
  }
  return "No entrie more than n/2"
}
