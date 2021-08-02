// 9. 조합의 경우수(메모이제이션)
// 아래 공식을 사용하여 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.

// nCr = n-1Cr-1 + n-1Cr
// ▣ 입력설명
// 매개변수 n에 N(3<=N<=33)과 매개변수 r에 R(0<=R<=n)이 입력됩니다.
// ▣ 출력설명
// 조합수를 반환합니다.
// ▣ 매개변수 형식 1
// 5 3
// ▣ 반환값 형식 1
// 10
// ▣ 매개변수 형식 2
// 33 19
// ▣ 반환값 형식 2
// 818809200

// sol) 메모이제이션 O
{
  function solution(n, r) {
    // 2차원 배열로 메모이제이션.
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    let answer = 0;

    function DFS(n, r) {
      if (dy[n][r] > 0) return dy[n][r]; // 이미 존재하는 값이면 그만해!
      if (n === r || r === 0) {
        // 종료지점
        return 1;
      } else {
        return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
      }
    }
    answer = DFS(n, r);
    return answer;
  }
  //console.log(solution(5, 3));
  // console.log(solution(33, 19));
}

// sol) 메모이제이션 X
{
  function solution(n, r) {
    let answer = 0;

    function DFS(n, r) {
      if (n === r || r === 0) {
        // 종료지점
        return 1;
      } else {
        return DFS(n - 1, r - 1) + DFS(n - 1, r);
      }
    }
    answer = DFS(5, 3);
    return answer;
  }
  //console.log(solution(5, 3));
}
