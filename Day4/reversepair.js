/*Count Reverse Pairs
Problem Statement: Given an array of numbers, you need to return the count of reverse pairs.
                   Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

                   Input: N = 5, array[] = {1,3,2,3,1)

                    Output: 2 
                    
                    Explanation: The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied.  */
const a = [1, 3, 2, 3, 1];
const b = [2, 3, 6, 10, 11];
console.log(reversepairs(a));
function reversepairs(arr) {
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
  function binarysearch(arr, low, high, key) {
    if (low > high) return 0;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > key) {
      if (arr[mid - 1] > key) return binarysearch(arr, low, mid - 1, key);
      else return arr.length - 1 - mid + 1;
    }

    return binarysearch(arr, mid + 1, high, key);
  }
  let pairs = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let array = arr.slice(0, i);
    array = quicksort(array);
    // console.log(array);
    pairs += binarysearch(array, 0, i - 1, arr[i] * 2);
  }
  return pairs;
}
function binarysearch(arr, low, high, key) {
  if (low > high) return 0;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] > key) {
    if (arr[mid - 1] > key) return binarysearch(arr, low, mid - 1, key);
    else return arr.length - 1 - mid + 1;
  }

  return binarysearch(arr, mid + 1, high, key);
}
