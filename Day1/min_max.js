//Find min and max values from array


const a =[3,1,0,9,2,-1,2,0,9]
const b=[-1]
console.log(minmax(b))
function minmax(arr) {
    if (arr.length == 1) {
   
        return {min:arr[0],max:arr[0]}
      }
  let min = arr[0];
  let max = arr[1];
  if (min > max) {
    max = min;
    min = arr[1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return {
    min: min,
    max: max,
  };
}
