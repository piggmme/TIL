// 1. 올바른 괄호
{
  function solution(str) {
    let stack = [];
    for (let x of str) {
      if (x === '(') stack.push(x);
      else {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }
    if (stack.length !== 0) return false;
    return true;
  }
  //   console.log(solution('(()()))')); // NO
  //   console.log(solution('(()(()))(()')); // NO
}

// 2. 괄호 문자 제거
{
  function solution(str) {
    let stack = [];
    for (let x of str) {
      if (x !== ')') stack.push(x);
      else {
        while (stack.pop() !== '(');
      }
    }
    return stack.join('');
  }
  //   console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
}

// 3. 후위식 연산
{
  function solution(s) {
    let stack = [];
  }
}
