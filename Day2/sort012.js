// Sort an array of 0s, 1s and 2s
// Problem Statement: Given an array consisting of only 0s, 1s and 2s. Write a program to in-place
//                    sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
//                    Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Input: nums = [0]
// Input: nums = [0]
const a = [2, 0, 1, 1, 0];
console.log(countingzeroonetwo(a));
console.log(zeroonetwo(a));
//Approach 1 using counting

//count the 0 and 1 
//Now  declare a variable with value 0 and loop till it reaches count of 0 and set the array to 0
//Repeat above step with zero+one and set value to 1 
//Repeat the step again till it reaches arr.length and set value to 2 




function countingzeroonetwo(arr) {
  let zero = 0;
  let one = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) zero += 1;
    if (arr[i] == 1) one += 1;
  }
  let z = 0;
  while (z < zero) {
    arr[z] = 0;
    z++;
  }
  while (z < zero + one) {
    arr[z] = 1;
    z++;
  }
  while (z < arr.length) {
    arr[z] = 2;
    z++;
  }

  return arr;
}

//Faster approach  Dutch National Flag Algo
function zeroonetwo(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      arr[mid] = arr[low];
      arr[low] = 0;
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      arr[mid] = arr[high];
      arr[high] = 2;
      high--;
    }
  }
  return arr;
}
