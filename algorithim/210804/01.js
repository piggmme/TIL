// 1. 친구인가? (Disjoint-Set : Union&Find) 서로소 집합.
// 서로 같은 집합인지 다른 집합인지 확인하면 된다.
// => 무방향
// 오늘은 새 학기 새로운 반에서 처음 시작하는 날이다. 현수네 반 학생은 N명이다. 현수는 각
// 학생들의 친구관계를 알고 싶다.
// 모든 학생은 1부터 N까지 번호가 부여되어 있고, 현수에게는 각각 두 명의 학생은 친구 관계
// 가 번호로 표현된 숫자쌍이 주어진다. 만약 (1, 2), (2, 3), (3, 4)의 숫자쌍이 주어지면 1번 학
// 생과 2번 학생이 친구이고, 2번 학생과 3번 학생이 친구, 3번 학생과 4번 학생이 친구이다.
// 그리고 1번 학생과 4번 학생은 2번과 3번을 통해서 친구관계가 된다.
// 학생의 친구관계를 나타내는 숫자쌍이 주어지면 특정 두 명이 친구인지를 판별하는 프로그램
// 을 작성하세요. 두 학생이 친구이면 “YES"이고, 아니면 ”NO"를 출력한다.

// ▣ 입력설명
// 매개변수 n에 반 학생수인 자연수 N(1<=N<=1,000)이 주어집니다.
// 매개변수 nums에 M(1<=M<=3,000)개의 숫자쌍이 주어집니다.
// 매개변수 s1, s2에 두 학생이 친구인지 확인해야 하는 학생번호가 주어집니다.
// ▣ 출력설명
// “YES"또는 "NO"를 반환합니다.
// ▣ 매개변수 형식 1
// 9, [[1, 2], [2, 3], [3, 4], [1, 5], [6, 7], [7, 8], [8, 9]], 3, 8
// ▣ 반환값 형식 1
// NO

// mysol)
{
  function solution(n, nums, s1, s2) {
    let unf = Array.from({ length: n + 1 }, (v, i) => i);
    function Find(x) {
      if (x === unf[x]) return x;
      else return (unf[x] = Find(unf[x])); // 부모를 갱신
    }
    function Union(a, b) {
      let fa = Find(a);
      let fb = Find(b);
      if (fa !== fb) {
        unf[fa] = unf[fb]; // 같은 부모 처리 함
      }
    }

    for (let [a, b] of nums) {
      Union(a, b);
    }

    if (Find(s1) !== Find(s2)) return "NO";
    else return "YES";
  }
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       8
  //     )
  //   ); // NO
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       2
  //     )
  //   ); // YES
}

// sol
{
  function solution(n, nums, s1, s2) {
    let answer = "YES";
    let unf = Array.from({ length: n + 1 }, (v, i) => i);

    // 집합 번호 찾아줌
    function Find(v) {
      if (v === unf[v]) return v;
      else return (unf[v] = Find(unf[v]));
    }
    // union 함수 => 연결 처리 해줌
    function Union(a, b) {
      let fa = Find(a);
      let fb = Find(b);
      if (fa !== fb) unf[fa] = fb;
    }

    for (let [a, b] of nums) {
      Union(a, b); // 집합화 시켜줌
    }

    // console.log(unf);
    if (Find(s1) !== Find(s2)) answer = "NO";

    return answer;
  }
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       9
  //     )
  //   ); // NO
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       2
  //     )
  //   ); // YES
}

// mysol) DFS
{
  function solution(n, nums, s1, s2) {
    let graph = Array.from(Array(n + 1), () => Array());
    let answer = "NO";
    let ch = Array.from(Array(n + 1), () => 0); // 방문했는지..

    // 무방향 인접 리스트
    for (let [a, b] of nums) {
      graph[a].push(b);
      graph[b].push(a);
    }

    function DFS(v) {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          ch[nv] = 1;
          if (nv === s2) answer = "YES";
          DFS(nv);
        }
      }
    }

    ch[s1] = 1;
    DFS(s1, s2);
    return answer;
  }
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       8
  //     )
  //   ); // NO
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       2
  //     )
  //   ); // YES
}
