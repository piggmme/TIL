// 8. 문자열 구분하기
// N개의 문자열이 주어지면 모든 문자열을 구분할 수 있는 최소길이 접두어를 찾는 프로그램을 작성하세요.

// Sol) Map을 사용
{
  function solution(words) {
    let sH = new Map();
    for (let i = 0; i < words[0].length; i++) {
      // 접두어의 길이
      let flag = true;
      for (let j = 0; j < words.length; j++) {
        // 단어를 하나하나 접근함
        let x = words[j].substring(0, i + 1);
        if (sH.has(x)) {
          // key값이 없어! unique 하지 않다! 끝! 그만돌아!
          flag = false;
          break;
        }
        sH.set(x, 1); // key값을 저장.
      }
      if (flag) {
        // 전부 unique했다는 뜻...정답!
        return i + 1;
      }
    }
  }
  console.log(solution(["seeasue", "sesseysu", "semeas"]));
  console.log(solution(["ackky", "kabck", "yokkcs"]));
  console.log(solution(["longlong", "longtong", "longbig"]));
}

// MySol)
{
  function solution(words) {
    let cnt = 1;
    for (let i = 0; i < words[0].length; i++) {
      // 문자열의 길이 만큼
      for (let j = 1; j < words.length; j++) {
        if (words[0][i] !== words[j][i]) return cnt;
      }
      cnt += 1;
    }
    return cnt;
  }
  console.log(solution(["seeasue", "sesseysu", "semeas"]));
  console.log(solution(["ackky", "kabck", "yokkcs"]));
  console.log(solution(["longlong", "longtong", "longbig"]));
}
