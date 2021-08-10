// 문제 설명
// N개의 문자열이 주어지면 이 문자열들의 최대 공통 접두사를 출력하는 프로그램을 작성하세요. 만약 문자열들이 [“long", "longtime", "longest"] 라면 세 단어의 최대 공통 접두사는 ”long"입니다.

// ▣ 입력설명
// 매개변수 s배열에 N(3<=N<=30)개의 단어가 입력됩니다. 각 단어의 길이는 100을 넘지 않는다.
// 모든 문자열은 모두 소문자로 입력됩니다.

// ▣ 출력설명
// 최대 공통 접두사를 반환하세요. 반드시 공통접두사는 존재합니다.

// ▣ 매개변수 형식
// [“long”, “longtime”, “longest”]

// ▣ 반환값 형식
// long
{
  // map
  function solution(words) {
    let n = words.length;
    let wH = new Map();
    words.sort((a, b) => a.length - b.length);

    for (let i = 0; i < words[0].length; i++) {
      wH.set(words[0].slice(0, i + 1), 1);
    }

    let temp = [];
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (!wH.has(words[i].slice(0, j + 1))) {
          temp.push(words[i].slice(0, j));
          break;
        }
      }
    }

    temp.sort((a, b) => a.length - b.length);

    return temp[0] || words[0];
  }
  //   console.log(solution(["long", "longtime", "longest"]));
  //   console.log(solution(["long", "long", "long"]));
  //   console.log(solution(["lokngsz", "longsa", "longsz"])); // lo
  //   console.log(solution(["ab", "a", "a"]));
}

// sol)
{
  function solution(strs) {
    let answer = "";
    let len = Number.MAX_SAFE_INTEGER;
    strs.forEach((x) => {
      len = Math.min(len, x.length);
    });
    for (let i = 0; i < len; i++) {
      let s = new Set();
      strs.forEach((x) => {
        s.add(x[i]);
      });
      if (s.size === 1) answer += strs[0][i];
    }
    return answer;
  }

  // console.log(solution(["long", "longtime", "longest"]));
}
{
  function solution(strs) {
    let answer = "";
    let len = Number.MAX_SAFE_INTEGER;
    strs.forEach((x) => {
      len = Math.min(len, x.length);
    });
    for (let i = 0; i < len; i++) {
      let m = new Map();
      strs.forEach((x) => {
        m.set(x[i], (m.get(x[i]) || 0) + 1);
      });
      if (m.get(strs[0][i]) === strs.length) answer += strs[0][i];
    }
    return answer;
  }

  // console.log(solution(["long", "longtime", "longest"]));
}
