// 프렌즈4블록
// https://programmers.co.kr/learn/courses/30/lessons/17679
{
  // 전치 행렬
  function transpose(m, n, board) {
    const arr = [];
    for (let y = 0; y < n; y++) {
      arr.push([]);
      for (let x = m - 1; x >= 0; x--) {
        arr[y].push(board[x][y]);
      }
    }
    return arr;
  }
  function solution(m, n, board) {
    let answer = 0;
    let transposedBoard = transpose(m, n, board);

    let flag = true;
    while (flag) {
      flag = false;
      const checkBox = Array.from({ length: n }, () => Array(m).fill(0));
      transposedBoard.forEach((boxLine, x) => {
        boxLine.forEach((box, y) => {
          if (
            x + 1 < n &&
            y + 1 < m &&
            box === transposedBoard[x][y + 1] &&
            box === transposedBoard[x + 1][y] &&
            box === transposedBoard[x + 1][y + 1]
          ) {
            checkBox[x][y] = -1;
            checkBox[x + 1][y] = -1;
            checkBox[x][y + 1] = -1;
            checkBox[x + 1][y + 1] = -1;
            flag = true;
          }
        });
      });
      answer += checkBox.reduce(
        (acc, cur) => acc + cur.filter(box => box === -1).length,
        0,
      );
      transposedBoard = transposedBoard.map((boxLine, x) =>
        boxLine.filter((_, y) => checkBox[x][y] !== -1),
      );
    }
    return answer;
  }
  console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
  console.log(
    solution(6, 6, [
      'TTTANT',
      'RRFACC',
      'RRRFCC',
      'TRRRAA',
      'TTMMMF',
      'TMMTTJ',
    ]),
  ); // 15
}
