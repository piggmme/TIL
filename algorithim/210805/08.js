// 8. 최대공통부분문자열(LCS)
// 최대 공통 부분 문자열이란 두 문자열 acbehf와 , abefc의 공통의 부분 문자열 중에서 가장
// 긴 것을 의미한다. 여기서 최대 공통 부분 문자열은 abef 이다.
// 두 문자열이 주어지면 두 문자열의 최대공통부분문자열의 길이를 출력하는 프로그램을 작성하
// 세요.
// ▣ 입력설명
// 매개변수 s1에 첫 번째 문자열이 주어지고, 매개변수 s2에 두 번째 문자열이 주어집니다.
// 두 문자열의 길이는 1000을 넘지 않으며 소문자로 주어진다.
// ▣ 출력설명
// 최대공통부분문자열의 길이를 출력합니다.
// ▣ 매개변수 형식 1
// acbehf
// abefc
// ▣ 반환값 형식 1
// 4

// sol)
{
  function solution(s1, s2) {
    let answer = 0;
    let str = [];
    let len1 = s1.length;
    let len2 = s2.length;
    let dy = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));

    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        if (s1[i - 1] === s2[j - 1]) dy[i][j] = dy[i - 1][j - 1] + 1;
        else {
          dy[i][j] = Math.max(dy[i - 1][j], dy[i][j - 1]);
        }
      }
    }
    console.log(dy);
    answer = dy[len1][len2];

    let path = [];
    function DFS(p1, p2) {
      if (p1 === 0 || p2 === 0) return;
      if (s1[p1 - 1] === s2[p2 - 1]) {
        DFS(p1 - 1, p2 - 1);
        path.push(s1[p1 - 1]);
      } else {
        if (dy[p1 - 1][p2] > dy[p1][p2 - 1]) DFS(p1 - 1, p2);
        else DFS(p1, p2 - 1);
      }
    }
    DFS(len1, len2);
    console.log(path);
    return answer;
  }
  // console.log(solution("acbehf", "abefc")); // 4
}

// mysol)
{
  function solution(s1, s2) {
    let row = s1.length + 1;
    let col = s2.length + 1;
    let dy = Array.from(Array(row), () => Array(col).fill(0));

    for (let i = 1; i < row; i++) {
      for (let j = 1; j < col; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dy[i][j] = dy[i - 1][j - 1] + 1;
        } else {
          dy[i][j] = Math.max(dy[i - 1][j], dy[i][j - 1]);
        }
      }
    }

    return dy[row - 1][col - 1];
  }
  // console.log(solution("acbehf", "abefc")); // 4
}
