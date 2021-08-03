// 3. 경로 탐색(인접리스트)
// 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
// 로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
// 1 2 3 4 5
// 1 2 5
// 1 3 4 2 5
// 1 3 4 5
// 1 4 2 5
// 1 4 5
// 총 6 가지입니다.
// ▣ 입력설명
// 매개변수 n에 정점의 수 N(1<=N<=20)주어집니다. 이차원 배열 edges에 간선의 정보가 주어
// 집니다.
// ▣ 출력설명
// 총 가지수를 반환합니다.
// ▣ 매개변수 형식 1
// 5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]
// ▣ 반환값 형식 1
// 6
// 입력설명 : [a, b]는 a정점에서 b정점으로 이동할 수 있다는 의미입니다

// mysol
{
  function solution(n, edges) {
    let graph = Array.from(Array(n + 1), () => Array()); // n+1개의 빈배열 생성
    let ch = Array.from({ length: n + 1 }, () => 0); // 방문했는지..
    let answer = 0;

    // 인접리스트 생성
    for (let [a, b] of edges) {
      graph[a].push(b);
    }

    function DFS(v) {
      // 방문하는 경로
      if (v === n) {
        answer++;
      } else {
        for (let nv of graph[v]) {
          if (ch[nv] === 0) {
            ch[nv] = 1;
            DFS(nv);
            ch[nv] = 0;
          }
        }
      }
    }

    ch[1] = 1; // 첫번째 경로 방문
    DFS(1);
    return answer;
  }
  //   console.log(
  //     solution(5, [
  //       [1, 2],
  //       [1, 3],
  //       [1, 4],
  //       [2, 1],
  //       [2, 3],
  //       [2, 5],
  //       [3, 4],
  //       [4, 2],
  //       [4, 5],
  //     ])
  //   ); // 6
}

// sol
{
  function solution(n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array()); // n+1개의 빈배열 생성
    let ch = Array.from({ length: n + 1 }, () => 0); // 방문했는지..

    // 인접리스트 완성
    for (let [a, b] of edges) {
      graph[a].push(b); // a=>b
    }
    let path = []; // 경로 들렸는지 확인함.

    function DFS(v) {
      if (v === n) {
        // 종료 시점
        answer++;
        console.log(path); // 1=>5 들린 경로를 출력함.
      } else {
        for (let nv of graph[v]) {
          // v에서 갈 수 있는 애들. v => nv
          if (ch[nv] === 0) {
            // 방문 안했을 때만..
            ch[nv] = 1;
            path.push(nv);
            DFS(nv); // 다음 정점
            ch[nv] = 0;
            path.pop();
          }
        }
      }
    }

    ch[1] = 1; // 1번 방문했음
    path.push(1); // 처음 경로 삽입해야함.
    DFS(1);
    return answer;
  }
  //   console.log(
  //     solution(5, [
  //       [1, 2],
  //       [1, 3],
  //       [1, 4],
  //       [2, 1],
  //       [2, 3],
  //       [2, 5],
  //       [3, 4],
  //       [4, 2],
  //       [4, 5],
  //     ])
  //   ); // 6
}
