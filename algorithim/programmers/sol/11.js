// 괄호 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/76502
{
  function solution(s) {
    let answer = 0;
    const temp = s.split('');

    function canRemove(a, b) {
      if (a === '(') return b === ')';
      if (a === '[') return b === ']';
      if (a === '{') return b === '}';
    }

    function isCorrect(temp) {
      let stack = [];
      stack.push(temp.shift());
      while (temp.length) {
        const top = temp.shift();
        if (canRemove(stack[stack.length - 1], top)) stack.pop();
        else stack.push(top);
      }
      if (stack.length) return false;
      return true;
    }

    if (isCorrect(temp.slice())) answer++;
    for (let i = 0; i < temp.length - 1; i++) {
      temp.push(temp.shift());
      if (isCorrect(temp.slice())) answer++;
    }
    return answer;
  }
  console.log(solution('[](){}'));
  console.log(solution('}]()[{'));
  console.log(solution('[)(]'));
  console.log(solution('({[}])'));
}
