// 5. 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복횟수가 1인 경우 생략합니다.

// 연속이 아닌경우도 한번에 카운트 되기 때문에.. 아래는 잘못된 풀이
// function solution(str) {
//   const arr = str.split("");
//   let result = [];
//   const char = arr.reduce((acc, cur) => {
//     !acc[cur] ? (acc[cur] = 1) : (acc[cur] += 1);
//     return acc;
//   }, {});
//   for (let c in char) {
//     if (char[c] === 1) result.push(c);
//     else result.push(c, char[c]);
//   }
//   return result.join("");
// }

// MySol)
{
  function solution(str) {
    let result = [];
    let top = str[0];
    let cnt = 1;
    result.push(top);
    for (let i = 1; i < str.length; i++) {
      if (top !== str[i]) {
        top = str[i];
        cnt !== 1 ? result.push(cnt) : result.push();
        cnt = 1;
        result.push(top);
      } else {
        cnt += 1;
      }
    }
    cnt !== 1 ? result.push(cnt) : result.push();
    return result.join("");
  }
  console.log(solution("KKHSSSSSSSE")); // K2HS7E
  console.log(solution("KSHHEAAA")); // KSH2EA3
}

// Sol)
{
  function solution(str) {
    let result = "";
    let cnt = 1;
    str += " "; // 공백 추가
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        cnt += 1;
      } else {
        result += str[i];
        cnt > 1 ? (result += cnt) : (result += "");
        cnt = 1;
      }
    }
    return result;
  }
  console.log(solution("KKHSSSSSSSE")); // K2HS7E
  console.log(solution("KSHHEAAA")); // KSH2EA3
}
