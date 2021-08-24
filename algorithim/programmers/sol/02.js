// lv2. 거리두기 확인하기
// https://programmers.co.kr/learn/courses/30/lessons/81302

// sol)
{
  function isPosible(p) {
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    let flag = false;

    // L = 1 부터
    function DFS(L, x, y, curx, cury) {
      if (flag) return false;
      if (L > 2) {
        // 거리 2 이상이면 그만 찾아봐도 됨
        return true;
      } else {
        for (let i = 0; i < 4; i++) {
          let nx = curx + dx[i];
          let ny = cury + dy[i];
          if (
            nx >= 0 &&
            nx < 5 &&
            ny >= 0 &&
            ny < 5 &&
            (x !== nx || y !== ny)
          ) {
            if (p[nx][ny] === "O") {
              // 빈자리 였을 경우
              DFS(L + 1, x, y, nx, ny);
            } else if (p[nx][ny] === "P") {
              // 거리가 2이내인데 사람이였을 경우 => 거리두기 안지킴
              flag = true;
              return false;
            }
          }
        }
      }
    }

    // DFS 호출
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (p[i][j] === "P") {
          // 거리두기 안지킨 경우를 찾아서, 한번이라도 안지켰으면 0반환
          flag = false;
          DFS(1, i, j, i, j);
          if (flag) {
            return 0;
          }
        }
      }
    }
    return 1;
  }
  function solution(places) {
    var answer = [];
    let n = places.length;

    for (let i = 0; i < n; i++) {
      answer.push(isPosible(places[i]));
    }
    return answer;
  }
  // console.log(
  //   solution([
  //     ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  //     ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  //     ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  //     ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  //     ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  //   ])
  // ); // [1, 0, 1, 1, 1]
}

// 망한 sol)
{
  function isPosible(p) {
    // 대기실 하나 전달받음
    let ch = Array(5).fill(Array(5).fill(0));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    function BFS(x, y) {
      let queue = [];
      queue.push([x, y]);
      while (queue.length) {
        let cur = queue.shift();
        for (let i = 0; i < 4; i++) {
          let nx = cur[0] + dx[i];
          let ny = cur[1] + dy[i];
          console.log(nx, ny, dx[i], dy[i]);
          // 범위 안에 있고, 파티션이 아닌, 사람 또는 책상일 때
          if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && p[nx][ny] !== "X") {
            if (p[nx][ny] === "P" && ch[nx][ny] === 0) {
              //   console.log("사람 ", x, y, nx, ny, ch[nx][ny]);
              // 사람일 경우
              if (Math.abs(nx - x) + Math.abs(ny - y) > 2) {
                // 맨하튼 거리 지킴
                ch[nx][ny] = 1;
              } else {
                // 맨하튼 거리를 지키지 못함.
                console.log("dont", x, y, nx, ny);
                return false;
              }
            } else if (ch[nx][ny] === 0) {
              // 책상일 경우
              ch[nx][ny] = 1;
              queue.push([nx, ny]);
              //   console.log("책상 ", nx, ny);
            }
          }
        }
      }
      return true;
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (p[i][j] == "P") {
          ch = Array(5).fill(Array(5).fill(0));
          ch[i][j] = 1;
          console.log("i j => ", i, j);
          if (!BFS(i, j)) return 0;
        }
      }
    }

    return 1;
  }
  function solution(places) {
    var answer = [];
    let n = places.length;

    for (let i = 0; i < n; i++) {
      console.log("i==", i);
      answer.push(isPosible(places[i]));
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  //       ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  //       ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  //       ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  //       ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  //     ])
  //   ); // [1, 0, 1, 1, 1]
}

{
  function isPosible(p) {
    // 대기실 하나 전달받음
    let ch = Array(5).fill(Array(5).fill(0));
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    let flag = false;
    function DFS(x, y, curx, cury) {
      if (flag) return false;
      for (let i = 0; i < 4; i++) {
        let nx = curx + dx[i];
        let ny = cury + dy[i];

        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
          // 사람인 경우
          if (p[nx][ny] === "P") {
            if (Math.abs(nx - x) + Math.abs(ny - y) <= 2) {
              // 맨허튼 거리 지키지 못함
              flag = true;
              return false;
            }
          } else {
            // 사람이 아닌경우 - 책상
            if (p[nx][ny] === "O") {
              DFS(x, y, nx, ny);
            }
          }
        }
      }
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (p[i][j] == "P") {
          flag = false;
          ch = Array(5).fill(Array(5).fill(0));
          ch[i][j] = 1;
          if (!DFS(i, j, i, j)) return 0;
        }
      }
    }

    return 1;
  }
  function solution(places) {
    var answer = [];
    let n = places.length;

    for (let i = 0; i < n; i++) {
      console.log("i==", i);
      answer.push(isPosible(places[i]));
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  //       ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  //       ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  //       ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  //       ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  //     ])
  //   ); // [1, 0, 1, 1, 1]
}
