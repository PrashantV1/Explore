// // Set Matrix Zero
// // Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its
// //                    entire column and row to 0 and then return the matrix.

// // Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

// // Output: [[1,0,1],[0,0,0],[1,0,1]]

// // Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.



/* Approach create a  variable check with false
 Now loop through matrix and  store the position of 0 and change check with true
 when array reaches end column and if check is marked as true set the array to 0
 Now when loop is end then loop through the stored object and change all stored value indexes to 0 
 return matrix  
 */



const a = [
  [2, 4, 8],
  [8, 0, 3],
  [1, 7, 7],
];

console.log(setzero(b));

function setzero(matrix) {
  const row = matrix.length;

  const setcolumnzero = (matrix, column) => {
    const row = matrix.length;
    for (let i = 0; i < row; i++) {
      matrix[i][column] = 0;
    }

    return matrix;
  };

  const setrowzero = (matrix, row) => {
    const column = matrix[row].length;

    for (let i = 0; i < column; i++) {
      matrix[row][i] = 0;
    }

    return matrix;
  };

  const zerocolumn = [];
  for (let i = 0; i < row; i++) {               //Main code 
    const column = matrix[i].length;

    let check = false;
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] == 0) {
        zerocolumn.push(j);
        check = true;
      }
      if (j == column - 1 && check) {
        setrowzero(matrix, i);
      }
    }
  }

  for (let i = 0; i < zerocolumn.length; i++) {
    setcolumnzero(matrix, zerocolumn[i]);
  }

  return matrix;
}

