// 1. 재귀함수를 이용한 이진수 출력
// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용
// 해서 출력해야 합니다.

// ▣ 입력설명
// 매개변수 n에 10진수 N(1<=N<=1,000)이 주어집니다.
// ▣ 출력설명
// n의 이진수를 반환하세요.
// ▣ 매개변수 형식
// 11
// ▣ 반환값 형식
// 1011

// sol)
{
  function solution(n) {
    let answer = 0,
      tmp = [];
    function DFS(n) {
      if (n == 0) return;
      else {
        DFS(parseInt(n / 2));
        tmp.push(n % 2);
      }
    }
    DFS(n);
    // 배열안에 있는걸 꺼내서 숫자화 한 다음 비교
    for (let i = 0; i < tmp.length; i++) {
      answer = answer * 10 + tmp[i];
    }
    return answer;
  }
  // console.log(solution(11)); // 1011
  // console.log(solution(1024)); // 2^10 = 10 0000 0000
}

// mysol)
{
  function dfs(n, result) {
    if (n === 0) {
      return; // 종료 조건
    } else {
      result.push(n % 2); // 나머지
      dfs(parseInt(n / 2), result); // 몫
    }
    return [...result].reverse(); // 결과 전달
  }
  function solution(n) {
    let result = [];
    return dfs(n, result).join("");
  }
  // console.log(solution(11)); // 1011
  // console.log(solution(1024)); // 2^10 = 10 0000 0000
}
