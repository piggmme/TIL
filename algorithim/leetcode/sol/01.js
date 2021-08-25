// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

// (())(()) 를 찾지 못함.
{
  function generateParenthesis(n) {
    let answer = ["()()", "(())"];

    if (n == 1) {
      return ["()"];
    } else if (n == 2) {
      return ["()()", "(())"];
    }

    for (let i = 2; i < n; i++) {
      let len = answer.length;
      for (let j = 0; j < len; j++) {
        let tp = answer.shift();
        let right = tp + "()";
        let left = "()" + tp;
        let cover = "(" + tp + ")";

        if (right === left && !answer.includes(right)) {
          answer.push(right);
        } else {
          if (!answer.includes(right)) answer.push(right);
          if (!answer.includes(left)) answer.push(left);
        }
        if (!answer.includes(cover)) answer.push(cover);
      }
    }

    // let temp = [
    //   "(((())))",
    //   "((()()))",
    //   "((())())",
    //   "((()))()",
    //   "(()(()))",
    //   "(()()())",
    //   "(()())()",
    //   "(())(())",
    //   "(())()()",
    //   "()((()))",
    //   "()(()())",
    //   "()(())()",
    //   "()()(())",
    //   "()()()()",
    // ];

    // for (let x of temp) {
    //   if (!answer.includes(x)) console.log(x);
    // }
    return answer;
  }
  //   console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
  //   console.log(generateParenthesis(1)); // ["()"]
  //   console.log(generateParenthesis(4)); // 14개
  // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
}

// time limit
{
  function generateParenthesis(n) {
    let answer = [];
    let part = [];
    let d = [];
    let ch = Array(n * 2).fill(0);

    for (let i = 0; i < n; i++) {
      d.push("(", ")");
    }

    // cnt 한번도 음수가 되지 않아야 함.
    function DFS(L, cnt) {
      if (L === n * 2) {
        // 종료
        if (cnt === 0) {
          //   console.log(part);
          if (!answer.includes(part.join(""))) answer.push(part.join(""));
        }
        return;
      } else {
        for (let i = 0; i < n * 2; i++) {
          if (cnt < 0) return;

          if (ch[i] === 0) {
            part.push(d[i]);
            ch[i] = 1;
            if (d[i] === "(") cnt++;
            else if (d[i] === ")") cnt--;

            // console.log(part, cnt);
            DFS(L + 1, cnt);

            if (d[i] === "(") cnt--;
            else if (d[i] === ")") cnt++;
            part.pop(d[i]);
            ch[i] = 0;
            // console.log(part, cnt);
          }
        }
      }
    }
    DFS(0, 0, 0);
    return answer;
  }
  //   console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
  //   console.log(generateParenthesis(1)); // ["()"]
  //   console.log(generateParenthesis(4)); // 14개
  // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
}

// time limit
{
  function isPossible(str) {
    let cnt = 0;
    for (let x of str) {
      if (x === "(") cnt++;
      else cnt--;
      if (cnt < 0) return false;
    }
    if (cnt === 0) return true;
    else return false;
  }
  function generateParenthesis(n) {
    let pick = [];
    let answer = [];
    let part = [];
    let len = n * (0 + n - 1);
    let ch = Array(len).fill(0);

    if (n == 1) {
      return ["()"];
    } else if (n == 2) {
      return ["()()", "(())"];
    }

    let cnt = 1,
      i = 0;

    for (; i < n; i++) {
      part.push("(");
      for (let j = 0; j < cnt; j++) {
        part.push("");
        pick.push(part.length - 1);
      }
      cnt++;
    }
    pick.pop();
    pick.push(")");

    // 조합으로 n개 선택.
    // ex) n=3
    // (, 0, (, 0, 0, (, 0, 0, )

    function DFS(L, s) {
      if (L === n) {
        // 종료
        let result = part.join("");
        if (!isPossible(result) || result.length !== 2 * n) {
          return;
        } else if (!answer.includes(result)) {
          answer.push(result);
        }
        return;
      } else {
        // ")" 가 들어갈 자리를 골라!
        for (let i = s; i < len; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            part[pick[i]] = ")";
            DFS(L + 1, i);
            part[pick[i]] = "";
            ch[i] = 0;
          }
        }
      }
    }
    DFS(0, 0);
    return answer;
  }
  //   console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
  //   console.log(generateParenthesis(1)); // ["()"]
  //   console.log(generateParenthesis(2));
  //   console.log(generateParenthesis(4)); // 14개
  // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
}

{
  function generateParenthesis(n) {
    let answer = [];
    let part = ["("];
    let d = [];
    let ch = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      d.push("(");
    }

    // cnt 한번도 음수가 되지 않아야 함.
    function DFS(L, cnt) {
      if (L === n) {
        // 종료
        if (cnt === 0) {
          //   console.log(part);
          if (!answer.includes(part.join(""))) answer.push(part.join(""));
        }
        return;
      } else {
        for (let i = 0; i < n; i++) {
          if (cnt < 0) return;

          if (ch[i] === 0) {
            part.push("(");
            cnt++;
            DFS(L, cnt);
            part.pop();
            part.push(")");
            cnt--;
          }
        }
      }
    }
    DFS(0, 0, 0);
    return answer;
  }
  console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
  //   console.log(generateParenthesis(1)); // ["()"]
  //   console.log(generateParenthesis(4)); // 14개
  // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
}
