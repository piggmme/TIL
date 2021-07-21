// 5. 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복횟수가 1인 경우 생략합니다.
function solution(str) {
  const arr = str.split("");
  let result = [];
  const char = arr.reduce((acc, cur) => {
    !acc[cur] ? (acc[cur] = 1) : (acc[cur] += 1);
    return acc;
  }, {});
  for (let c in char) {
    if (char[c] === 1) result.push(c);
    else result.push(c, char[c]);
  }
  return result.join("");
}
// console.log(solution("KKHSSSSSSSE")); // K2HS7E
// console.log(solution("KSHHEAAA")); // KSH2EA3
