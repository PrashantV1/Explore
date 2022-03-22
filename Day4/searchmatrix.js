/*Search in a sorted 2D matrix
Problem Statement: Given an m*n 2D matrix and an integer, write a program to find if the given integer exists in the matrix.

Given matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row


Input: matrix = 
[[1,3,5,7],
 [10,11,16,20],
 [23,30,34,60]], 

target = 3

Output: true

Explanation: As the given integer(target) exists in the given 2D matrix, the function has returned true. */
const a = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
console.log(searchinmatrix(a, 3));
function searchinmatrix(matrix, key) {
  let check;

  const binarysearch = (arr, low, high, key) => {
    if (low > high) return 0;

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) return 1;

    if (arr[mid] > key) return binarysearch(arr, low, mid - 1, key);
    return binarysearch(arr, mid + 1, high, key);
  };

  const quicksort = (arr) => {
    const pivot = arr[0];

    if (arr.length <= 1) return arr;

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > pivot) right.push(arr[i]);
      else left.push(arr[i]);
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
  };

  for (let i = 0; i < matrix.length; i++) {
    quicksort(matrix[i]);
    check = binarysearch(matrix[i], 0, matrix[i].length - 1, key);
    if (check) return "exists";
  }
  return "not exists";
}
