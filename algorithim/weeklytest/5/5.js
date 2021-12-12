// 장난감 조립
// 우리는 어떤 장남감을 여러 가지 부품으로 조립하여 만들려고 한다. 이 장난감을 만드는데는 기본부품과그 기본부품들을조립하여만든중간부품이사용된다.기본부품은다른부품 을 사용하여 조립될 수 없는 부품이다. 중간 부품은 또 다른 중간 부품이나 기본 부품을 이용 하여 만들어지는 부품이다.
// 예를 들어 보자. 기본 부품으로서 1, 2, 3, 4가 있다. 중간 부품 5는 2개의 기본 부품 1과 2개 의 기본 부품 2로 만들어 진다. 그리고 중간 부품 6은 2개의 중간 부품 5, 3개의 기본 부품 3 과 4개의 기본 부품 4로 만들어진다. 마지막으로 장남감 완제품 7은 2개의 중간 부품 5, 3개 의 중간 부품 6과 5개의 기본 부품 4로 만들어진다. 이런 경우에 장남감 완제품 7을 만드는데 필요한 기본 부품의 개수는 1번 16개, 2번 16개, 3번 9개, 4번 17개이다. 이와 같이 어떤 장 남감 완제품과 그에 필요한 부품들 사이의 관계가 주어져 있을 때 하나의 장난감 완제품을 조 립하기 위하여 필요한 기본 부품의 종류별 개수를 계산하는 프로그램을 작성하시오.
// ▣ 입력설명
// 매개변수 N에 정수 N(3≤N≤100)이 주어지는데, 1부터 N- 1까지는 기본 부품이나 중간 부품의 번호를 나타내고 N은 완제품의 번호를 나타낸다. 매개변수 relations에 어떤 부품을 완성하는 데 필요한 부품들간의 관계가 3개의 정수 X,Y,K로 주어진다. 이 뜻은 중간 부품이나 완제품 X 를 만드는데 필요한 중간 부품 혹은 기본 부품 Y가 K개 필요하다는 뜻이다.
// ▣ 출력설명
// 하나의 완제품을 조립하는데 필요한 기본 부품의 수를 반환합니다. 반드시 기본 부품의 번호
// 가 작은 것부터 큰 순서가 되도록 한다.
// ▣ 매개변수 형식 1
// 7, [[5, 1, 2], [5, 2, 2], [7, 5, 2], [6, 5, 2], [6, 3, 3], [6, 4, 4], [7, 6, 3], [7, 4, 5]]
// ▣ 반환값 형식 1
// [[1, 16], [2, 16], [3, 9], [4, 17]]
// 예제설명
// 7번 완제품을 만드는데 1번 기본부품 16개, 2번 기본부품 16개, 3번 기본부품 9개, 4번 기본 부품 17개가 필요하다는 의미입니다.

// 위상정렬
{
  function solution(n, relations) {
    const graph = [...Array(n + 1)].map(() => []);
    const inDegrees = Array(n + 1).fill(0);

    for (const [end, start, cost] of relations) {
      graph[start].push([end, cost]);
      inDegrees[end] += 1;
    }

    const dy = [...Array(n + 1)].map(() => Array(n + 1).fill(0));

    const Q = [];
    for (let i = 1; i <= n; i++) {
      if (inDegrees[i] === 0) {
        dy[i][i] = 1;
        Q.push(i);
      }
    }

    while (Q.length) {
      const node = Q.shift();
      for (const [next, cost] of graph[node]) {
        for (let i = 1; i < n; i++) {
          dy[i][next] += dy[i][node] * cost;
        }
        inDegrees[next]--;
        if (inDegrees[next] === 0) Q.push(next);
      }
    }

    const answer = [];
    for (let i = 1; i < n; i++) {
      if (dy[i][n] > 0) answer.push([i, dy[i][n]]);
    }

    return answer;
  }

  console.log(
    solution(7, [
      [5, 1, 2],
      [5, 2, 2],
      [7, 5, 2],
      [6, 5, 2],
      [6, 3, 3],
      [6, 4, 4],
      [7, 6, 3],
      [7, 4, 5],
    ]),
  ); // [ [ 1, 16 ], [ 2, 16 ], [ 3, 9 ], [ 4, 17 ] ]
  // console.log(
  //   solution(5, [
  //     [5, 4, 3],
  //     [5, 1, 5],
  //     [5, 3, 4],
  //     [4, 1, 1],
  //     [4, 2, 3],
  //   ]),
  // );
}

{
  function solution(n, relations) {
    const answer = [];
    const graph = Array.from(Array(n + 1), () => Array());
    const indegrees = Array(n + 1).fill(0);
    const dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    Q = [];

    for (let [a, b, c] of relations) {
      graph[b].push([a, c]);
      indegrees[a]++;
    }
    console.log(graph, indegrees);

    for (let i = 1; i < n; i++) {
      if (indegrees[i] === 0) {
        Q.push(i);
        dy[i][i] = 1;
      }
    }
    while (Q.length) {
      cur = Q.shift();
      for (let [next, cnt] of graph[cur]) {
        for (let i = 1; i < n; i++) {
          dy[i][next] += dy[i][cur] * cnt;
        }
        indegrees[next]--;
        if (indegrees[next] === 0) Q.push(next);
      }
    }
    for (let i = 1; i < n; i++) {
      if (dy[i][n] > 0) answer.push([i, dy[i][n]]);
    }
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [5, 1, 2],
  //       [5, 2, 2],
  //       [7, 5, 2],
  //       [6, 5, 2],
  //       [6, 3, 3],
  //       [6, 4, 4],
  //       [7, 6, 3],
  //       [7, 4, 5],
  //     ]),
  //   );
  // console.log(
  //   solution(5, [
  //     [5, 4, 3],
  //     [5, 1, 5],
  //     [5, 3, 4],
  //     [4, 1, 1],
  //     [4, 2, 3],
  //   ]),
  // );
}

// 한결님 코드
{
  function solution(n, relations) {
    let answer = [[]];
    const complex = new Map();
    for (const [high, low, num] of relations) {
      complex.set(high, [...(complex.get(high) || []), [low, num]]);
    }
    const basic = new Map();
    let queue = [];
    queue.push([n, 1]);
    while (queue.length) {
      console.log(queue);
      const [part, num] = queue.shift();
      for (let i = 0; i < num; i++) {
        if (complex.has(part)) {
          queue = [...queue, ...complex.get(part)];
        } else {
          basic.set(part, (basic.get(part) || 0) + 1);
        }
      }
    }

    answer = [...basic.entries()].sort((a, b) => a[0] - b[0]);
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [5, 1, 2],
  //       [5, 2, 2],
  //       [7, 5, 2],
  //       [6, 5, 2],
  //       [6, 3, 3],
  //       [6, 4, 4],
  //       [7, 6, 3],
  //       [7, 4, 5],
  //     ]),
  //   );
}
