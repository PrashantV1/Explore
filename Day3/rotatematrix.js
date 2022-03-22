/* Rotate Image by 90 degree
Problem Statement: Given a matrix, your task is to rotate the matrix by 90 degrees.

Input: [[1,2,3],[4,5,6],[7,8,9]]

Output: [[7,4,1],[8,5,2],[9,6,3]]

Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.  */

// 123a    d741                  2   9  3          4 3 13 2                                     1  15 17 X
// 456b    e852                  13 11 17         13 6  11 9                                     13        3
// 789c    f963                  3   6  15        1  15  17 3                                            9
// defg    gcba                  4  13   1                                                            13   2

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const z = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const b = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
const c = [
  [2, -9, 3],
  [13, 11, -17],
  [3, 6, 15],
  [4, 13, 1],
];
const d = [
  [2, 13],
  [-9, 11],
  [3, 17],
];
console.log(better(d));

/* Approach 1 :  create a new matrix with dimension n*m 
                 take a variable for column length 
                 replace the values as newmatrix[j][z]=matrix[i][j]  */


function rotate(matrix) {
  const rotatematrix = new Array();

  for (let i = 0; i < matrix[0].length; i++) {
    rotatematrix[i] = new Array(matrix.length);
  }
  let z = rotatematrix[0].length - 1;

  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      //  console.log("v", matrix[i][j], "i", i, "j", j);
      rotatematrix[j][z] = matrix[i][j];
      //console.log(matrix[i][j])
    }
    z--;
  }
  return rotatematrix;
}
 

/*   Approach 2 :   Transpose the matrix and then reverse it   
                    if matrix is rectangle then make it a sqauare matrix and follow step 1 */




function better(matrix) {
  const square = (matrix) => {
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
    for (let i = 0; i < matrix.length; i++) {
      //transpose
      for (let j = i + 1; j < matrix[i].length; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      //reverse
      matrix[i] = reverse(matrix[i]);
    }

    return matrix;
  };

  const rectangle = (matrix) => {
    const rowlen = matrix[0].length;
    let z = matrix.length - 1;
    for (let i = 0; i <= 0; i++) {
      for (let j = 0; j <= matrix[i].length - 1; j++) {
        //  console.log("v", matrix[i][j], "i", i, "j", j);
        matrix[j][z] = matrix[i][j];
        //console.log(matrix[i][j])
      }
    }
    matrix = square(matrix);
    matrix.length = rowlen;
    return matrix;
  };

  const rowlength = matrix[0].length;
  const columnlength = matrix.length;
  if (columnlength == rowlength) {
    return square(matrix);
  }
  return rectangle(matrix);
}
