// 4. 동아리 개수 => 무방향 그래프
// 현수가 다니는 학교에는 동아리가 많이 있습니다. 현수가 다니는 학교의 동아리의 개수를 구하는
// 프로그램을 작성하세요.
// 현수가 다니는 학교의 학생은 1번부터 N번까지 번호가 부여된 N명의 학생들로 되어 입력됩니다.
// 만약 1번 학생과 2번 학생이 같은 동아리 이면 (1, 2) 순서쌍으로 입력되며, (2, 3)이 입력되면
// 1, 2, 3번 학생은 같은 동아리입니다.
// 모든 학생은 동아리를 가지고 있습니다
// ▣ 입력설명
// 매개변수 n에 현수가 다니는 학교의 학생수 N(5<=N<=30,000)이 주어집니다.
// 매개변수 edges에 두 학생의 정보를 나타내는 순서쌍의 주어집니다.
// ▣ 출력설명
// 현수가 다니는 학교의 동아리 개수를 반환하세요.
// ▣ 매개변수 형식 1
// 7, [[1, 2], [2, 3], [1, 4], [1, 5]]
// ▣ 반환값 형식 1
// 3
// 출력설명 : (1, 2, 3, 4, 5), (6), (7) 3개의 동아리가 존재합니다.
// 즉 1번, 2번, 3번, 4번, 5번 학생이 같은 동아리 이고, 6번 혼자서 동아리, 7번 혼자서 동아리가 됩니
// 다.

// mysol2)
{
  function solution(n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array.from({ length: n + 1 }, () => 0);

    // 인접 리스트 생성
    for (let [a, b] of edges) {
      graph[a].push(b);
    }

    // DFS 완전 탐색
    function DFS(v) {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          ch[nv] = 1;
          DFS(nv);
        }
      }
    }

    // 전체 학생을 뺑뺑 돌면서 확인함
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        DFS(i);
        answer++;
      }
    }
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [1, 2],
  //       [2, 3],
  //       [1, 4],
  //       [1, 5],
  //     ])
  //   ); // 3
}

//mysol
{
  function solution(n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array.from({ length: n + 1 }, () => 0);

    // 인접 리스트 작성
    for (let [a, b] of edges) {
      graph[a].push(b);
    }

    function DFS(v) {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          ch[nv] = 1; // 인접한 학생 방문 처리
          DFS(nv);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      // 학생수 만큼 뺑뺑 돌면서 방문하지 않은 학생이 있는지 확인한다
      if (ch[i] === 0) {
        ch[i] = 1; // 해당 학생 방문 했다고 표시
        DFS(i);
        answer++;
      }
    }
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [1, 2],
  //       [2, 3],
  //       [1, 4],
  //       [1, 5],
  //     ])
  //   ); // 3
}

// sol)
{
  function solution(n, edges) {
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array.from({ length: n + 1 }, () => 0);
    let answer = 0;

    // 무방향, 인접 리스트 생성
    // 서로 연결된 동아리 학생들
    for (let [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }

    function DFS(v) {
      for (let nv of graph[v]) {
        // v => nv
        if (ch[nv] === 0) {
          // 방문처리
          ch[nv] = 1;
          DFS(nv); // 다음 정점
        }
      }
    }

    for (let i = 1; i <= n; i++) {
      // 돌면셔 방문하지 않은 곳 들어가, 그와 연결되어 있는 애들까지 DFS로 방문처리해버림
      if (ch[i] === 0) {
        answer++;
        ch[i] = 1;
        DFS(i);
      }
    }
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [1, 2],
  //       [2, 3],
  //       [1, 4],
  //       [1, 5],
  //     ])
  //   ); // 3
}
