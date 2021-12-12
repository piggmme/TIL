// 1249. Minimum Remove to Make Valid Parentheses
// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

{
  var minRemoveToMakeValid = function (s) {
    const arr = [...s];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(') stack.push('(');
      else if (arr[i] === ')') {
        if (stack.length === 0) {
          arr.splice(i, 1);
          i--;
        } else {
          stack.pop();
        }
      }
    }
    while (stack.length) {
      let idx = arr.lastIndexOf('(');
      arr.splice(idx, 1);
      stack.pop();
    }
    return arr.join('');
  };
  console.log(minRemoveToMakeValid('abc'));
  console.log(minRemoveToMakeValid('))(('));
  console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
  console.log(minRemoveToMakeValid('a)b(c)d'));
  console.log(minRemoveToMakeValid('(a(b(c)d)'));
}

{
  var minRemoveToMakeValid = function (s) {
    const stack = [];

    const parentheses = s
      .match(/(\(|\))+/g)
      ?.map(str => str.split(''))
      .flat(2);

    if (!parentheses) return s;

    for (let i = 0; i < parentheses.length; i++) {
      if (stack.length === 0 || parentheses[i] === '(')
        stack.push(parentheses[i]);
      else if (stack[stack.length - 1] === ')') stack.push(parentheses[i]);
      else stack.pop();
    }

    const map = new Map();

    for (let i = 0; i < stack.length; i++) {
      map.set(stack[i], map.get(stack[i]) + 1 || 1);
    }

    const answer = [...s];

    if (map.has('(')) {
      for (let i = answer.length - 1; i >= 0; i--) {
        if (answer[i] === '(') {
          answer[i] = null;
          map.set('(', map.get('(') - 1);
        }
        if (map.get('(') === 0) break;
      }
    }
    if (map.has(')')) {
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] === ')') {
          answer[i] = null;
          map.set(')', map.get(')') - 1);
        }
        if (map.get(')') === 0) break;
      }
    }

    return answer.join('');
  };
  //   console.log(minRemoveToMakeValid('abc'));
  //   console.log(minRemoveToMakeValid('))(('));
  //   console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
  //   console.log(minRemoveToMakeValid('a)b(c)d'));
  //   console.log(minRemoveToMakeValid('(a(b(c)d)'));
}
