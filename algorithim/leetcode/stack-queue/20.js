// https://leetcode.com/problems/valid-parentheses/
// 20. Valid Parentheses
{
  const isValid = s => {
    const open = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    const close = {
      ')': '(',
      ']': '[',
      '}': '{',
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      if (open[s[i]]) stack.push(s[i]);
      if (close[s[i]]) {
        if (stack.pop() !== close[s[i]]) return false;
      }
    }
    return !stack.length;
  };
  console.log(isValid('()'));
  console.log(isValid('()[]{}'));
  console.log(isValid('(]'));
  console.log(isValid('[[[]'));
  console.log(isValid('(])'));
}
{
  const isValid = s => {
    const hash = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]]) stack.push(hash[s[i]]);
      else if (s[i] !== stack.pop()) return false;
    }
    return !stack.length;
  };
  //   console.log(isValid('()'));
  //   console.log(isValid('()[]{}'));
  //   console.log(isValid('(]'));
  //   console.log(isValid('[[[]'));
  //   console.log(isValid('(])'));
}

{
  const isValid = s => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push('(');
        continue;
      }
      if (s[i] === ')') {
        if (stack.length === 0) return false;
        if (stack[stack.length - 1] === '(') stack.pop();
        else stack.push(s[i]);
        continue;
      }
      if (s[i] === '[') {
        stack.push('[');
        continue;
      }
      if (s[i] === ']') {
        if (stack.length === 0) return false;
        if (stack[stack.length - 1] === '[') stack.pop();
        else stack.push(s[i]);
        continue;
      }
      if (s[i] === '{') {
        stack.push('{');
        continue;
      }
      if (s[i] === '}') {
        if (stack.length === 0) return false;
        if (stack[stack.length - 1] === '{') stack.pop();
        else stack.push(s[i]);
        continue;
      }
    }

    return !stack.length;
  };
  //   console.log(isValid('()'));
  //   console.log(isValid('()[]{}'));
  //   console.log(isValid('(]'));
  //   console.log(isValid('[[[]'));
  //   console.log(isValid('(])'));
}
