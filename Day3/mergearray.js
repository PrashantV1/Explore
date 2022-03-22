//merge two sorted array
const a = [1, 2, 3, 4]; // -1234        -1034        -1014                   -1012
const b = [-1, 0, 5, 7, 8]; //01578      12578        23578                  34578
console.log(mergewithoutspace(a, b));

function merge(left, right) {
  const output = [];

  let i = 0;
  let j = 0;

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

//Now merge without extra space




function mergewithoutspace(left, right) {
  let i = 0;

  const quicksort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > pivot) right.push(arr[i]);
      else left.push(arr[i]);
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
  };

  while (i < left.length) {
    const current = left[i];
    if (current > right[0]) {
      left[i] = right[0];
      right[0] = current;
     right=quicksort(right);
     console.log("right",right)
      i++;
    } else i++;
  }
  let j = 0;

  while (j < right.length) {
    left.push(right[j]);
    j++;
  }
  return left;
}
