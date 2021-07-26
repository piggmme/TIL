// 3. 접미사 정렬
// 문자열 s가 주어지면 s문자열의 모든 접미사를 구하고 사전순으로 출력하는 프로그램을 작성 하세요.
// substring(시작 인덱스, 종료 인덱스)
function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.push(s.substring(i, s.length));
  }
  return answer.sort();
}
console.log(solution("kseaedu"));
