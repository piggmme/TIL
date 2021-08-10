// 문제 설명
// 올바르지 않은 괄호문자열이 주어지면, 최소횟수로 괄호를 제거하여 올바른 괄호문자열로 만드는 프로그램을 작성하세요.
// 괄호를 최소로 제거했을 때 나올 수 있는 모든 올바른 괄호문자열의 경우수를 출력합니다.

// ▣ 입력설명
// 올바르지 않은 괄호문자열이 매개변수 s에 주어집니다.

// ▣ 출력설명
// 최소횟수로 괄호를 지웠을 때 나올 수 있는 모든 올바른 괄호문자열의 경우수를 반환합니다.

// ▣ 매개변수 형식
// "()(()()"

// ▣ 반환값 형식
// 2

// 출력설명 : “()(()()”를 괄호 하나만 지우는 경우에 2종류의 올바른 괄호문자열을 만들 수 있습니다.
// “()(()()”에서 세번째 (를 지우면 “()()()”와 같은 올바른 괄호문자열을 만들 수 있고,
// “()(()()”에서 여섯번째 (를 지우면 “()(())”와 같은 올바른 괄호문자열을 만들 수 있습니다.

// DFS
// 지워서 만들 수 있는 모든 경우의 수의 문자열에서, 올바른 괄호인지 판단하고,
// 올바른 괄호라면 삭제한 횟수를 카운트해 map에 삽입 {삭제한 횟수: cnt++}
// 삭제한 횟수 중 최소를 반환.

// my sol)
{
  function solution(str) {
    let n = str.length;
    let part = [];
    let possible = new Map();

    // 문자열이 들어오면, 해당 문자열이 올바른 괄호인지 판단하고 bool로 반환
    function isPossible(str) {
      let stack = [];
      for (let x of str) {
        if (x === "(") stack.push(x);
        else {
          if (stack.length === 0) return false;
          stack.pop();
        }
      }
      if (stack.length > 0) return false; // 덜 pop되면 잘못된 것!
      return true;
    }

    // 문자열을 삭제하여 만들 수 있는 모든 경우의 부분집합을 생성
    // 부분집합 중에서 전부 삭제하지 않고, 올바른 괄호인 경우 possible 객체에 저장.
    function DFS(L) {
      if (L === n) {
        if (part.length !== 0 && isPossible(part)) {
          possible.set(
            part.slice().join(""),
            possible.get(part.slice().join("")) + 1 || 1
          );
        }
      } else {
        part.push(str[L]);
        DFS(L + 1);
        part.pop();
        DFS(L + 1);
      }
    }
    DFS(0);

    // possible 객체를 돌면서, pH라는 맵 객체에
    // 삭제한 괄호 수를 key값으로 하여 가능한 모든 경우의 올바른 괄호를 저장할 것
    let pH = new Map();
    for (let [st, v] of possible) {
      let key = n - st.length; // 삭제한 괄호수
      pH.set(key, pH.get(key) + 1 || 1);
    }

    // 최소 길이의 키 값을 찾아서, 그 갯수를 반환함.
    let answer_key = n;
    for (let [key, val] of pH) {
      answer_key = Math.min(key, answer_key);
    }
    return pH.get(answer_key) || 0;
  }

  // console.log(solution("()(()()"));
  // console.log(solution("()(()(")); // ()() 최선. 2개 삭제.
  // console.log(solution(")))(((")); // 0
}

// sol)
{
  function solution(s) {
    let answer;
    let Q = new Set([s]);
    while (Q.size) {
      const next = new Set();
      for (let x of Q) {
        if (isValid(x)) {
          let answer = [...Q].filter(isValid);
          return answer[0] === "" ? 0 : answer.length;
        }
        for (let i = 0; i < x.length; i++) {
          next.add(x.slice(0, i) + x.slice(i + 1));
        }
      }
      Q = next;
    }
    return answer;
  }
  function isValid(str) {
    let cnt = 0;
    for (let ch of str) {
      if (ch === "(") cnt++;
      else if (ch === ")") cnt--;
      if (cnt < 0) return false;
    }
    return cnt === 0;
  }
  // console.log(solution(")("));
}
