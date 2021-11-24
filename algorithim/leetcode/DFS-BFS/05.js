// 51. N-Queens
// https://leetcode.com/problems/n-queens/
{
  const solveNQueens = n => {
    const board = Array(n)
      .fill()
      .map(() => Array(n).fill(0));
    const queensPos = [];
    const queens = [];

    // 대각선, 열에 퀸이 존재하지 않는다면 탐색을 진행함
    const DFS = L => {
      if (queens.length === n) {
        queensPos.push(queens.slice());
        return;
      } else {
        // 행당 하나의 퀸만 올라감
        for (let i = 0; i < n; i++) {
          if (isValid(L, i)) {
            board[L][i] = 1;
            queens.push(i);
            DFS(L + 1);
            board[L][i] = 0;
            queens.pop();
          }
        }
      }
    };

    // 대각선, 열에 퀸이 존재하는지 확인함
    const isValid = (x, y) => {
      // 같은 열에 퀸 존재하는지 확인
      for (let i = 0; i < x; i++) {
        if (board[i][y]) return false;
      }
      // \ 대각선에 퀸 존재하는지 확인
      for (let i = 1; ; i++) {
        if (x - i < 0 || y - i < 0) break;
        if (board[x - i][y - i]) return false;
      }
      // / 대각선에 퀸 존재하는지 확인
      for (let i = 1; ; i++) {
        if (x - i < 0 || y + i >= n) break;
        if (board[x - i][y + i]) return false;
      }
      return true;
    };

    const createStringAnswer = () => {
      const answer = [];
      for (const queens of queensPos) {
        const temp = [];
        for (const pos of queens) {
          const str = '.'.repeat(pos) + 'Q' + '.'.repeat(n - pos - 1);
          temp.push(str);
        }
        answer.push(temp);
      }
      return answer;
    };

    DFS(0);
    return createStringAnswer();
  };
  console.log(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
  console.log(solveNQueens(1));
}
