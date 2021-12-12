// 130. Surrounded Regions
// https://leetcode.com/problems/surrounded-regions/

var solve = function (board) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const m = board.length;
  const n = board[0].length;

  const visited = [...Array(m)].map(() => Array(n).fill(0));
  let temp = [];

  const flip = temp => {
    for (const [x, y] of temp) {
      if (x === 0 || x === m - 1 || y === 0 || y === n - 1) return;
    }
    for (const [x, y] of temp) {
      board[x][y] = 'X';
    }
  };

  const DFS = (x, y) => {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx < 0 ||
        nx >= m ||
        ny < 0 ||
        ny >= n ||
        visited[nx][ny] ||
        board[nx][ny] === 'X'
      )
        continue;

      temp.push([nx, ny]);
      visited[nx][ny] = 1;
      DFS(nx, ny);
    }
  };

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 'O' && visited[x][y] === 0) {
        temp = [[x, y]];
        visited[x][y] = 1;
        DFS(x, y);
        flip(temp);
      }
    }
  }
  //   console.log(board);
};

console.log(
  solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ]),
);
// [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'X', 'X'],
// ];

// console.log(
//   solve([
//     ['X', 'X', 'X'],
//     ['X', 'O', 'X'],
//     ['X', 'X', 'X'],
//   ]),
// );
// // [
// //   ['X', 'X', 'X'],
// //   ['X', 'X', 'X'],
// //   ['X', 'X', 'X'],
// // ];

// console.log(
//   solve([
//     ['X', 'O', 'X'],
//     ['O', 'X', 'O'],
//     ['X', 'O', 'X'],
//   ]),
// );
// // [
// //   ['X', 'O', 'X'],
// //   ['O', 'X', 'O'],
// //   ['X', 'O', 'X'],
// // ];

// console.log(
//   solve([
//     ['O', 'O', 'O', 'O', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'X', 'O'],
//     ['O', 'X', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'O', 'O'],
//   ]),
// );
// // [
// //   ['O', 'O', 'O', 'O', 'X', 'X'],
// //   ['O', 'O', 'O', 'O', 'O', 'O'],
// //   ['O', 'X', 'O', 'X', 'O', 'O'],
// //   ['O', 'X', 'O', 'O', 'X', 'O'],
// //   ['O', 'X', 'O', 'X', 'O', 'O'],
// //   ['O', 'X', 'O', 'O', 'O', 'O'],
// // ];
