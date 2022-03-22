/*Count inversions in an array
Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

What is an inversion of an array?
 Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].

 Input Format: N = 5, array[] = {1,2,3,4,5}

Result: 0

Explanation: we have a sorted array and the sorted array 
has 0 inversions as for i < j you will never find a pair 
such that A[j] < A[i]. More clear example: 2 has index 1 
and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an 
inversion. */

const a = [1, 2, 3, 4, 5];
console.log(mergesort(a,"main"))
function mergesort(arr,type) {
    console.log(arr,{type:type})
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);

  const left = mergesort(arr.slice(0, middle),"left"); // items on the left side
  const right = mergesort(arr.slice(middle),"right");

  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;

  const output = [];
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      output.push(right[j]);
      j++;
    } else {
      output.push(left[i]);
      i++;
    }
  }

  while (i < left.length) {
    output.push(left[i]);
    i++;
  }

  while (j < right.length) {
    output.push(right[j]);
    j++;
  }

  return output;
}

// Step 1 : 5 4 6 2 10
//    left =4,2     5    right =6,10
//    left 2  4     5  6  right=10
