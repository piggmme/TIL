// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
{
  var spiralOrder = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const ch = Array(n)
      .fill()
      .map(a => Array(m).fill(0));

    let answer = [];
    let curx = 0,
      cury = 0;
    ch[0][0] = 1;
    answer.push(matrix[0][0]);

    while (answer.length !== m * n) {
      for (let i = 0; i < 4; i++) {
        while (1) {
          const nx = curx + dx[i];
          const ny = cury + dy[i];

          if (nx < 0 || nx >= n || ny < 0 || ny >= m || ch[nx][ny]) {
            break;
          }
          ch[nx][ny] = 1;
          answer.push(matrix[nx][ny]);
          curx = nx;
          cury = ny;
        }
      }
    }

    return answer;
  };
  console.log(
    spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ); // [1,2,3,6,9,8,7,4,5]
  console.log(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]),
  ); // [1,2,3,4,8,12,11,10,9,5,6,7]
}
