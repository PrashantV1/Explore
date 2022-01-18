// next_permutation : find next lexicographically greater permutation
// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array
//                      into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
// Input format: Arr[] = {1,3,2}

// Output: Arr[] = {2,1,3}

// Explanation: All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,13} , {2,3,1} , {3,1,2} , {3,2,1}}.
//            So, the next permutation just after {1,3,2} is {2,1,3}.

const a = [3, 2, 1];
console.log(permutation(a));

function permutation(arr) {
  const reverse = (arr, start, end) => {
    if (start > end) return arr;
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    return reverse(arr, start + 1, end - 1);
  };
  let i = arr.length - 2;

  while (i >= 0 && arr[i] > arr[i + 1]) i--; //step 1
  if (i == -1) return reverse(arr, 0, arr.length - 1);
  let j = arr.length - 1;
  while (arr[j] < arr[i]) j--; //step 2
  const temp = arr[j]; //step 3
  arr[j] = arr[i];
  arr[i] = temp;

  return reverse(arr, i + 1, arr.length - 1); //step 4
}
