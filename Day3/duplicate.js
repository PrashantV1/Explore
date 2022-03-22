/*
Find the duplicate in an array of N+1 integers
Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. 
Assuming there is only one duplicate number, your task is to find the duplicate number.

Input: arr=[1,3,4,2,2]

Output: 2

Explanation: Since 2 is the duplicate number the answer will be 2.  */

//Approach 1

const a = [3, 4, 5, 7, 6];
console.log(obj(a));

//using extra space

function obj(arr) {
  let obj = new Object();

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    } else {
      obj[arr[i]] = 1;
    }
  }

  return "No duplicate ";
}

//Using Floyd cycle detection

const b = [2, 1, 4, 2, 3];
// Approach :  convert array into link list
//In O(n) time and O(1) space
//Floyd cycle detection
//All elements are in range of 1 to n

/*
    0  1 2 3 4  
    2  1 4 2 3

  2--->4-->3-->2
     /|\       |                          cyclic notation in linked list of array 
      |________|    */

function floydcycle(arr) {
  if (arr.length < 1) return -1;
  let slow = arr[0];
  let fast = arr[0];
  while (slow != fast) {
    slow = arr[slow];
    fast = arr[arr[fast]];
  }
  fast = arr[0];
  while (fast != slow) {
    fast = arr[fast];
    slow = arr[slow];
  }
  return fast;
}
