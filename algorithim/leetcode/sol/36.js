// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/

{
  var isValidSudoku = function (board) {
    // 1. row
    for (let i = 0; i < 9; i++) {
      const digits = new Set();
      for (let j = 0; j < 9; j++) {
        if (digits.has(board[i][j])) {
          return false;
        }
        if (board[i][j] !== '.') digits.add(board[i][j]);
      }
    }

    // 2. column
    for (let i = 0; i < 9; i++) {
      const digits = new Set();
      for (let j = 0; j < 9; j++) {
        if (digits.has(board[j][i])) {
          return false;
        }
        if (board[j][i] !== '.') digits.add(board[j][i]);
      }
    }

    // 3. 3x3
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const digits = new Set();
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            if (digits.has(board[i + x][j + y])) return false;
            if (board[i + x][j + y] !== '.') digits.add(board[i + x][j + y]);
          }
        }
      }
    }
    return true;
  };
  console.log(
    isValidSudoku([
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]),
  ); // t
  console.log(
    isValidSudoku([
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ]),
  ); // f
}
