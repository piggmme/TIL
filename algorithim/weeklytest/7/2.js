// 어떤 지역의 높이 정보가 주어졌을 때, 장마철에 물에 잠기지 않는 안전한 영역의 최대 개수를 계산하는 프로그램을 작성하라.

// ▣ 입력설명
// 매개변수 board에 N*N 지역의 높이 정보가 전달됩니다. N 개의 각 줄에는 2차원 배열의 첫 번째 행부터 N번째 행까지 순서대로 한 행씩 높이 정보가 입력된다. 각 줄에는 각 행의 첫 번째 열부터 N번째 열까지 N 개의 높이 정보를 나타내는 자연수가 빈 칸을 사이에 두고 입력된다. 높이는 1이상 100 이하의 정수이다.

// ▣ 출력설명
// 첫장마철에 물에 잠기지 않는 안전한영역의 최대 개수를 반환한다.

// ▣ 매개변수 형식 1
// [[6, 8, 2, 6, 2],
// [3, 2, 3, 4, 6],
// [6, 7, 3, 3, 2],
// [7, 2, 5, 3, 6],
// [8, 9, 5, 2, 7]]

// ▣ 반환값 형식 1
// 5

{
  function solution(board) {
    let answer = 0;
    const N = board.length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    let maxHeight = 0;
    for (const col of board) {
      for (const row of col) {
        maxHeight = Math.max(maxHeight, row);
      }
    }

    let visited = [...Array(N)].map(() => Array(N).fill(0));

    const settingVisited = h => {
      visited = [...Array(N)].map(() => Array(N).fill(0));
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (board[i][j] <= h) visited[i][j] = 1;
        }
      }
    };

    const DFS = (x, y) => {
      //   console.log(x, y, visited);
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
          visited[nx][ny] = 1;
          DFS(nx, ny);
        }
      }
    };

    const searchNodes = h => {
      let cnt = 0;
      settingVisited(h);

      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (!visited[i][j]) {
            cnt += 1;
            DFS(i, j);
          }
        }
      }
      return cnt;
    };

    for (let h = 1; h < maxHeight; h++) {
      answer = Math.max(answer, searchNodes(h));
    }

    return answer;
  }
  console.log(
    solution([
      [6, 8, 2, 6, 2],
      [3, 2, 3, 4, 6],
      [6, 7, 3, 3, 2],
      [7, 2, 5, 3, 6],
      [8, 9, 5, 2, 7],
    ]),
  ); // 5
}
