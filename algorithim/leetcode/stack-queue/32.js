// https://leetcode.com/problems/longest-valid-parentheses/
// 32. Longest Valid Parentheses
{
  const longestValidParentheses = s => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(i);
      } else {
        if (!stack.length || s[stack[stack.length - 1]] === ')') {
          stack.push(i);
        } else {
          stack.pop();
        }
      }
    }
    stack.push(s.length);
    stack.unshift(-1);
    console.log(stack);

    let answer = 0;
    for (let i = 1; i < stack.length; i++) {
      answer = Math.max(answer, stack[i] - stack[i - 1] - 1);
    }

    return answer;
  };
  //   console.log(longestValidParentheses('()')); // 0
  //   console.log(longestValidParentheses('(')); // 0
  //   console.log(longestValidParentheses('(()()')); //4
  //   console.log(longestValidParentheses('()(()')); // 2
  //   console.log(longestValidParentheses('(()')); // 2
  //   console.log(longestValidParentheses(')()())')); // 4
  //   console.log(longestValidParentheses('')); // 0
  //   console.log(longestValidParentheses(')(()))()()((())))')); // 10
}

{
  const longestValidParentheses = s => {
    let ts = s.split('');
    let stack = [],
      max = 0;

    console.log(ts);

    ts.forEach((t, i) => {
      if (t == '(') {
        stack.push(i);
      } else {
        if (stack.length === 0 || ts[stack[stack.length - 1]] == ')') {
          stack.push(i);
        } else {
          stack.pop();
        }
      }
    });

    // add two ends
    stack.push(ts.length);
    console.log(stack);
    stack.splice(0, 0, -1);
    console.log(stack);

    for (let i = 0; i < stack.length - 1; i++) {
      let v = stack[i + 1] - stack[i] - 1;
      max = Math.max(max, v);
    }

    return max;
  };
  //   console.log(longestValidParentheses('(')); // 0
  //   console.log(longestValidParentheses('(()()'));
  //   console.log(longestValidParentheses('()(()')); // 2
  //   console.log(longestValidParentheses('(()')); // 2
  //   console.log(longestValidParentheses(')()())')); // 4
  //   console.log(longestValidParentheses('')); // 0
  //   console.log(longestValidParentheses(')(()))()()((())))')); // 10
}
