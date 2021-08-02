// 10. 수열 추측하기
// 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼
// 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 예를 들어 N이 4 이고 가장 윗 줄에 3
// 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
// 3 1 2 4
// 4 3 6
// 7 9
// 16
// N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하
// 시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
// ▣ 입력설명
// 매개변수 n에 N(1≤N≤10)과 매개변수 f에 F가 주어집니다.
// N은 가장 윗줄에 있는 숫자의 개수를 의미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이
// 하입니다.
// ▣ 출력설명
// 삼각형에서 가장 위에 들어갈 N개의 숫자를 배열형태로 반환합니다. 답이 존재하지 않는 경우는
// 입력으로 주어지지 않는다.
// ▣ 매개변수 형식 1
// 4 16
// ▣ 반환값 형식 1
// [3, 1, 2, 4]
// ▣ 매개변수 형식 2
// 5 50
// ▣ 반환값 형식 2
// [1, 2, 4, 3, 5]

// sol)
{
  function solution(n, f) {
    // 2차원 배열로 메모이제이션.
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    let answer;
    let flag = false;
    let ch = Array.from({ length: n + 1 }, () => 0);
    let p = [],
      b = [];

    function combi(n, r) {
      // nCr을 구함.
      if (dy[n][r] > 0) return dy[n][r];
      if (n === r || r === 0) return 1;
      else {
        return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
      }
    }

    function DFS(L, sum) {
      if (flag) return;
      if (L === n) {
        if (sum === f) {
          answer = p.slice();
          flag = true;
        }
      } else {
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            p.push(i);
            DFS(L + 1, sum + p[p.length - 1] * b[L]);
            ch[i] = 0;
            p.pop();
          }
        }
      }
    }

    for (let i = 0; i < n; i++) {
      b.push(combi(n - 1, i));
    }

    DFS(0, 0);
    return answer;
  }
  //   console.log(solution(4, 16));
  //   console.log(solution(5, 50));
}

// sol2)
{
  function solution(n, f) {
    // 2차원 배열로 메모이제이션.
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    let answer;
    let flag = false;
    let ch = Array.from({ length: n + 1 }, () => 0);
    let p = [],
      b = [];

    function DFS(L, sum) {
      if (flag) return;
      if (L === n) {
        if (sum === f) {
          answer = p.slice();
          flag = true;
        }
      } else {
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            p.push(i);
            DFS(L + 1, sum + p[p.length - 1] * b[L]);
            ch[i] = 0;
            p.pop();
          }
        }
      }
    }

    b.push(1);
    for (let i = 1; i < n; i++) {
      b.push((b[i - 1] * (n - i)) / i);
    }

    DFS(0, 0);
    return answer;
  }
  //   console.log(solution(4, 16));
  //   console.log(solution(5, 50));
}
