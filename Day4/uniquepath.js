/* Grid Unique Paths | Count paths from left-top to the right bottom of a matrix
Problem Statement: Given a matrix m X n, count paths from left-top to the right bottom of a matrix 
with the constraints that from each cell you can either only move to the rightward direction or the downward direction.

Input Format: m = 2, n= 2
Ouput: 3   */
// console.log(uniquepath(2, 2));
// function uniquepath(m, n) {
//   let x = 0;
//   while (n >= 0) {
//     x += n;
//     n--;
//   }

//   return x;
// }
b=100
c=100
const a = new Array(b);
for (let i = 0; i < a.length; i++) {
  a[i] = new Array(c);
  for (let j = 0; j < a[i].length; j++) {
    a[i][j] = 0;
  }
}
// console.log(a);
console.log(uniquepath(0, 0, b, c,a));


function uniquepath(i, j, m, n,arr) {
  if (i >= m || j >= n||(m==1 && n==1)) return 0;
  if (i == m - 1 && j == n - 1) return 1;

  //if(arr[i][j]==1) return 1;


if(arr[i][j]==1) 
return arr[i][j];
  return arr[i][j]= uniquepath(i + 1, j, m, n,arr) + uniquepath(i, j + 1, m, n,arr);
}

// function uniquepath(m, n,a) {
//   if(m==1 || n==1) return 1;
//   console.log(m,n)
//   return uniquepath(m - 1, n,dp) + uniquepath(m, n - 1);
// }
