/*
Merge Overlapping Sub-intervals
Problem Statement: Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals

Input: intervals=[[1,3],[2,6],[8,10],[15,18]]

Output: [[1,6],[8,10],[15,18]]

Explanation: Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6]
 intervals.   */
const a = [10, 9, 8, 7, 6, 1, 2, 3, 5, 4];
const intervals = [
  [1, 3],
  [7, 18],
  [8, 21],
  [2, 6],
];
const b = [
  [1, 9],
  [2, 5],
  [19, 20],
  [10, 11],
  [12, 20],
  [0, 1],
  [0, 2],
  [0, 3],
];
const c = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(quicksort(c));
function quicksort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];

  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > pivot[0]) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

function mergeinterval(arr) {
  quicksort(arr);

  let prev = arr[0];
  const output = [];
  for (let i = 1; i < arr.length; i++) {
    if (prev[1] > arr[i][0]) prev = [prev[0], arr[i][1]];
    else {
      output.push(prev);
      prev = arr[i];
    }
  }
  output.push(prev);
  return output;
}
