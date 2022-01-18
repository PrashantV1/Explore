// Problem Statement: Given an integer N, return the first N rows of Pascal’s triangle.
// Input Format: N = 5

// Result:
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

// Explanation: There are 5 rows in the output matrix. Each row corresponds to each one of the rows in the image shown above.
console.log(generatepascal(4));
function generatepascal(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(i + 1);
    matrix[i][0] = 1;
    matrix[i][i]=1;
    for (let j = 1; j < i; j++) {
      matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
    }
  }

  return matrix;
}
