//Reverse an array

const a = [1, 0, 2, 3, 4, 5];

/* Approach : initialize start as 0 and end as arr.length -1 
              now till start<end  swap arr[start] and arr[end]    */
console.log(reverseusingrecursion(a, 0, a.length - 1));

console.log(reverse(a));
function reverse(arr) {
  if (arr.length == 1) return arr; //base case

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

//using recursion

function reverseusingrecursion(arr, start, end) {
  if (start > end) return arr;

  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  return reverseusingrecursion(arr, start + 1, end - 1);
}
