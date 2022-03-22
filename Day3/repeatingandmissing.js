/*

Find the repeating and missing numbers
Problem Statement: You are given a read-only array of n integers with values also in the range [1,n] both inclusive.
 Each integer appears exactly once except A which appears twice and B which is missing. 
The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.


Input Format:  array[] = {3,1,2,5,3}

Result: {3,4)

Explanation: A = 3 , B = 4 
Since 3 is appearing twice and 4 is missing   */


const a =[3,1,2,5,3]
console.log(findnumber(a))


function findnumber(arr) {
  let x; //missing number
  let y; //repeating number
  const n = arr.length;

  const sum = (n * (n + 1)) / 2;
  const sumsquare = n*(n + 1)*(2*n + 1) / 6;
  let arraysum=0;
  let arraysquaresum=0;
  for (let i = 0; i < n; i++) {
    arraysum += arr[i];
    arraysquaresum += arr[i] * arr[i];
  }

  const sumdifference=sum-arraysum;
  const sumsquaredifference=sumsquare-arraysquaresum;
  console.log("sumdifference",sumdifference,sumsquaredifference)
// (x-y)=sumdifference ;
// (x+y) =sumsquaredifference/sumdifference;
 x=( sumdifference + (sumsquaredifference/sumdifference))/2;

y=(sumdifference-x)*-1;



  return {
    missing: x,
    repeating: y,
  };
}
