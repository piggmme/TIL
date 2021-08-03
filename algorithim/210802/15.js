// 15. 미로의 최단거리 통로(BFS) ** 코드
// 7*7 격자판 미로를 탈출하는 최단경로의 길이를 출력하는 프로그램을 작성하세요. 경로의 길
// 이는 출발점에서 도착점까지 가는데 이동한 횟수를 의미한다. 출발점은 격자의 (1, 1) 좌표이
// 고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 도로이다.
// 격자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면
// 위와 같은 경로가 최단 경로의 길이는 12이다.
// ▣ 입력설명
// 매개변수 board에 7*7 격자의 정보가 주어집니다.
// ▣ 출력설명
// 최단으로 움직인 칸의 수를 반환합니다. 도착할 수 없으면 -1를 출력한다.
// ▣ 입력예제 1
// [[0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 0, 1, 1],
// [1, 1, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 0, 0]]
// ▣ 출력예제 1
// 12

// mysol)
{
  function solution(board) {
    let n = board.length;
    let dist = Array.from(Array(7), () => Array(7).fill(0));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    function BFS(x, y) {
      let queue = [];
      queue.push([x, y]);
      board[x][y] = 1;
      while (queue.length) {
        let cur = queue.shift(); // 큐에서 꺼낸 현재 처리해야하는 값
        for (let i = 0; i < 4; i++) {
          let nx = cur[0] + dx[i];
          let ny = cur[1] + dy[i];
          if (nx >= 0 && nx < 7 && ny >= 0 && ny < 7 && dist[nx][ny] === 0) {
            // 갈 수 있는 위치
            queue.push([nx, ny]);
            board[nx][ny] = 1;
            dist[nx][ny] += dist[cur[0]][cur[1]] + 1;
          }
        }
      }
    }
    BFS(0, 0); // 시작점

    if (dist[6][6] === 0) return -1;
    return dist[6][6];
  }
  console.log(
    solution([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 0, 0, 0],
    ])
  ); // 12
}

// sol)
{
  function solution(board) {
    let answer = 0;
    let n = board.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let dist = Array.from(Array(7), () => Array(7).fill(0));

    function BFS(x, y) {
      let queue = [];
      queue.push([x, y]);
      board[x][y] = 1;
      while (queue.length) {
        let curr = queue.shift();
        for (let j = 0; j < 4; j++) {
          let nx = curr[0] + dx[j];
          let ny = curr[1] + dy[j];
          if (nx >= 0 && nx < 7 && ny >= 0 && ny < 7 && board[nx][ny] == 0) {
            board[nx][ny] = 1;
            dist[nx][ny] = dist[curr[0]][curr[1]] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
    BFS(0, 0);
    console.log(dist);
    if (dist[6][6] === 0) return -1;
    else return dist[6][6];
  }
  //   console.log(
  //     solution([
  //       [0, 0, 0, 0, 0, 0, 0],
  //       [0, 1, 1, 1, 1, 1, 0],
  //       [0, 0, 0, 1, 0, 0, 0],
  //       [1, 1, 0, 1, 0, 1, 1],
  //       [1, 1, 0, 1, 0, 0, 0],
  //       [1, 0, 0, 0, 1, 0, 0],
  //       [1, 0, 1, 0, 0, 0, 0],
  //     ])
  //   ); // 12
}
