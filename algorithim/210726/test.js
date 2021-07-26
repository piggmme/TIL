function cntChar(str) {
  // 문자열에 들어있는 문자(key)들의 갯수(value)를 객체로 반환
  let arr = str.split("");
  let cnt = arr.reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 1;
    else acc[cur] += 1;
    return acc;
  }, {});

  return cnt; // 객체
}
function solution(words) {
  let N = words.length;
  let maps = [];
  let temp = [];
  let result = [];
  for (let i = 0; i < N; i++) {
    maps.push(cntChar(words[i])); // 문자열을 분석함
  }

  for (let key in maps[0]) {
    // 첫번째 단어를 기준으로
    let flag = true;
    temp = [];
    temp.push(maps[0][key]); // 첫번째 단어의 문자는 일단 temp에 삽입
    for (let i = 1; i < N; i++) {
      // 다음 문자부터
      if (!maps[i][key]) {
        // 해당 키 값이 존재하지 않는다면 벗어남. 다음 문자로 넘어간다.
        flag = false;
        break;
      } else {
        temp.push(maps[i][key]); // 해당 키 값이 존재하면 temp에 삽입.
      }
    }
    if (flag) {
      let cnt = Math.min(...temp); // temp중 최소값만큼 결과에 해당 문자 삽입
      for (let i = 0; i < cnt; i++) result.push(key);
    }
  }
  return result;
}
console.log(solution(["steasue", "sasseysu", "kseseas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));
console.log(solution(["aaaabbbcc", "aabbbbc"]));
