// 8. 제품 이동
// 섬이 많은 나라로 유명한 인도네시아는 N(1≤N≤10,000)개의 섬으로 이루어진 나라이다. 이
// 섬들은 다리로 연결되어 있는데, 각 다리는 통과하려면 무게제한이 있다. 이 무게제한을 넘어
// 가는 무게가 다리를 이용하면 다리는 무너지게 된다.
// 엘리트 무역회사는 이들 섬 중 2개에 공장이 있는데 항상 두 공장에서 서로 제품을 이동하는
// 작업을 한다. 섬의 개수 N과 각 섬을 연결하는 다리 정보가 주어지면 한 번의 이동으로 옮길
// 수 있는 제품의 최대 무게를 구하세요. 단 다리를 건널 수 있는가의 무게제한은 제품의 무게
// 로만 계산한다.

// ▣ 입력설명
// 매개변수 N이 주어지고, 매개변수 edges배열에 각 다리의 정보가 주어집니다.
// edges 배열의 각 행은 다리에 대한 정보를 나타내는 세 자연수 A, B(1≤A, B≤N), C(1≤C≤
// 1,000,000,000)가 주어진다.
// 세 자연수의 의미는 A섬과 B섬이 다리가 연결되어 있으며, 다리를 이동하는 제품의 최대 무게
// 는 C라는 의미이다.
// 마지막 매개변수 s와 e에 두 공장이 있는 섬의 번호가 주어진다.
// ▣ 출력설명
// 첫째 줄에 답을 출력한다.
// ▣ 매개변수 형식
// 5, [[1, 2, 5], [1, 3, 3], [1, 4, 2], [2, 4, 2], [3, 4, 4], [4, 5, 3]], 1, 5
// ▣ 반환값 형식
// 3

{
  function solution(n, edges, s, e) {
    let answer = 0,
      lt = 1,
      rt = 0;
    let graph = Array.from(Array(n + 1), () => Array());

    for (let [a, b, c] of edges) {
      graph[a].push([b, c]);
      graph[b].push([a, c]);
      rt = Math.max(rt, c);
    }

    function BFS(w) {
      // s=>e 까지 갔는가? 확인하려고 했는데...
      // s를 탐색의 root로 지정하고, e를 방문 했는지 ch를 이용해서 확인하면 갔는지 확인할 수 있음!
      let ch = Array.from({ length: n + 1 }, () => 0);
      let queue = [];
      ch[s] = 1;
      queue.push(s);
      while (queue.length) {
        let a = queue.shift();
        // 큐에 담겨있는 것들 뽑아내서, 정보를 확인하고, 다시 확인해야 하는 정보는 큐에 담는다.
        // 정보를 만약 담지 않게 된다면, 그 이후의 동작은 진행하지 않으므로, 그 방향의 경로 탐색이 중지된다.
        // 모든 정보를 탐색 했을 경우에 ch는 전부 1이되고, 큐에 들어있는 정보들은 전부 빠져나오게 된다.
        for (let [b, c] of graph[a]) {
          if (c >= w && ch[b] === 0) {
            ch[b] = 1;
            queue.push(b);
          }
        }
      }
      return ch[e]; // 갔으면 1, 못갔으면 0
    }

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (BFS(mid)) {
        answer = mid;
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    return answer;
  }
  //   console.log(
  //     solution(
  //       5,
  //       [
  //         [1, 2, 5],
  //         [1, 3, 3],
  //         [1, 4, 2],
  //         [2, 4, 2],
  //         [3, 4, 4],
  //         [4, 5, 3],
  //       ],
  //       1,
  //       5
  //     )
  //   );
}

{
  function solution(n, edges, s, e) {
    let mass = edges.map((a) => a[2]);
    let lt = 1,
      rt = Math.max(...mass);
    let graph = Array.from(Array(n + 1), () => Array());
    let answer = lt;

    // 가중치 인접 리스트
    for (let [a, b, c] of edges) {
      graph[a].push([b, c]);
    }

    function isPossible(mass) {
      let ch = Array.from(Array(n + 1), () => 0);
      let answer = true,
        flag = false;

      function DFS(v) {
        if (flag) return;
        for (let nv of graph[v]) {
          if (nv[1] >= mass) {
            // 건널 수 있는 경우
            if (ch[nv[0]] === 0) {
              // 방문하지 않은 경우
              ch[nv[0]] = 1;
              if (nv[0] === e) {
                // 목적지에 도착한 경우
                answer = true;
                flag = true;
              }
              DFS(nv[0]);
            }
          } else {
            answer = false;
            flag = true;
          }
        }
      }
      DFS(s);
      return answer;
    }

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (isPossible(mid)) {
        // 건너는게 가능했다면
        lt = mid + 1;
        answer = Math.max(mid, answer);
      } else {
        rt = mid - 1;
      }
    }
    return answer;
  }
  //   console.log(
  //     solution(
  //       5,
  //       [
  //         [1, 2, 5],
  //         [1, 3, 3],
  //         [1, 4, 2],
  //         [2, 4, 2],
  //         [3, 4, 4],
  //         [4, 5, 3],
  //       ],
  //       1,
  //       5
  //     )
  //   ); // 3
}
