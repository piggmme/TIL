// 8. 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

// ▣ 입력설명
// 매개변수 nums에 N*N(2<=N<=100)크기의 격자판 정보가 주어집니다. 각 자연수는 100을 넘 지 않는다.
// ▣ 출력설명
// 봉우리의 개수를 반환하세요.
// ▣ 매개변수 형식
// [[5, 3, 7, 2, 3], [3, 7, 1, 6, 1], [7, 2, 5, 3, 4], [4, 3, 6, 4, 1], [8, 7, 3, 5, 2]]
// ▣ 반환값 형식 10

{
  function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let flag = true;
        for (let k = 0; k < 4; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];
          if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < n &&
            arr[nx][ny] >= arr[i][j]
          ) {
            flag = false;
            break;
          }
        }
        if (flag) answer += 1;
      }
    }
    return answer;
  }

  //   console.log(
  //     solution([
  //       [5, 3, 7, 2, 3],
  //       [3, 7, 1, 6, 1],
  //       [7, 2, 5, 3, 4],
  //       [4, 3, 6, 4, 1],
  //       [8, 7, 3, 5, 2],
  //     ])
  //   );
}

// mySol)
/*
{
  let visited;
  let nx = [-1, 1, 0, 0];
  let ny = [0, 0, -1, 1];
  function dfs(arr, x, y) {
    visited[x][y] = true;
    let top = true;
    for (let i = 0; i < 4; i++) {
      let dx = x + nx[i];
      let dy = y + ny[i];
      if (
        (dx < 0 && dx > arr.length) ||
        (dy < 0 && dy > arr.length) ||
        visited[dx][dy] === true
      )
        continue;
        if(arr[x][y] < arr[dx][dy]) top = false;
      dfs(arr, x, y);
    }
  }
  function solution(arr) {
    const N = arr.length;
    visited = Array.from(Array(N), () => Array(N).fill(false));
    return dfs(arr, 0, 0);
  }
  console.log(
    solution([
      [5, 3, 7, 2, 3],
      [3, 7, 1, 6, 1],
      [7, 2, 5, 3, 4],
      [4, 3, 6, 4, 1],
      [8, 7, 3, 5, 2],
    ])
  );
}
*/
