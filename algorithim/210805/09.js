// 9. 최소편집 => 응용 돼서 많이 나옴
// 문자열 A와 문자열 B가 주어져 있을 때, 문자열 A를 문자열 B로 편집(삽입, 삭제, 대체)하여
// 바꾸려 한다.
// 이때 편집하는 최소 횟수를 구하는 프로그램을 작성하세요.
// 만약 문자열 A가 aabab이고 문자열 B가 babb라면 2회의 편집으로 바꿀 수 있다. 문자열
// aabab에서 제일 앞에 있는 a를 b로 대체하면 babab이고 네 번째 a를 삭제하면 된다.
// ▣ 입력설명
// 매개변수 s1에 첫 번째 문자열이 주어지고, 매개변수 s2에 두 번째 문자열이 주어집니다.
// 두 문자열의 길이는 1000을 넘지 않으며 대문자로 주어진다.
// ▣ 출력설명
// 최소 편집 횟수를 반환합니다.
// ▣ 매개변수 형식 1
// BAOBAB
// BACBA
// ▣ 반환값 형식 1
// 2

{
  function solution(s1, s2) {
    let answer = 0;
    let len1 = s1.length;
    let len2 = s2.length;
    let dy = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    // dy[i][j] : s1[0~i] 문자열을 s2[0~j] 문자열로 바꾸는데 사용된 최소 편집 횟수

    // 공집합과 동일하려면 계속 삭제
    for (let i = 0; i <= len1; i++) dy[i][0] = i;
    for (let i = 0; i <= len2; i++) dy[0][i] = i;

    // s1[i] == s2[j] : 대각선 값 그대로
    // s1[i] != s2[j] : (위, 왼, 대)중 작은것 -1
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        if (s1[i - 1] === s2[j - 1]) dy[i][j] = dy[i - 1][j - 1];
        else {
          dy[i][j] = Math.min(dy[i - 1][j], dy[i][j - 1], dy[i - 1][j - 1]) + 1;
        }
      }
    }
    //  console.log(dy);
    answer = dy[len1][len2];

    return answer;
  }
  console.log(solution("BAOBAB", "BACBA")); // 2
}
