// 221. Maximal Square
// https://leetcode.com/problems/maximal-square/

// dp
{
  var maximalSquare = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dy = [...Array(m + 1)].map(() => Array(n + 1).fill(0));
    let answer = 0;

    for (let x = 1; x <= m; x++) {
      for (let y = 1; y <= n; y++) {
        if (matrix[x - 1][y - 1] === '1') {
          dy[x][y] = Math.min(dy[x - 1][y], dy[x][y - 1], dy[x - 1][y - 1]) + 1;
          answer = Math.max(answer, dy[x][y]);
        }
      }
    }
    return answer * answer;
  };
  console.log(
    maximalSquare([
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ]),
  ); // 4
  console.log(
    maximalSquare([
      ['0', '1'],
      ['1', '0'],
    ]),
  ); // 1
  console.log(maximalSquare([['0']])); // 0
}
