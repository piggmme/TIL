// https://programmers.co.kr/learn/courses/30/lessons/60058

const isBalancedString = str => {
  const brackets = {
    '(': 0,
    ')': 0,
  };

  for (const char of str) {
    brackets[char] += 1;
  }

  return brackets['('] === brackets[')'];
};

const isCorrectString = str => {
  const stack = [];

  for (const char of str) {
    if (char === '(') stack.push('(');
    else {
      if (!stack.length) return false;
      if (stack[stack.length - 1] === ')') return false;
      stack.pop();
    }
  }

  return !stack.length;
};

function solution(p) {
  // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
  let answer = '';
  if (!p.length) return '';

  if (isCorrectString(p)) return p;

  // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
  let u = '';
  let v = '';
  for (let i = 1; i <= p.length; i++) {
    u = p.substring(0, i);
    if (isBalancedString(u)) {
      v = p.substring(i);
      break;
    }
  }

  // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
  if (isCorrectString(u)) {
    // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
    return u + solution(v);
  }

  // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
  //   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
  let temp = '(';

  //   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
  //   4-3. ')'를 다시 붙입니다.
  temp += solution(v) + ')';

  //   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
  temp += [...u.substring(1, u.length - 1)]
    .map(char => (char === '(' ? ')' : '('))
    .join('');

  //   4-5. 생성된 문자열을 반환합니다.
  return temp;
}
console.log(solution('(()())()')); // "(()())()"
console.log(solution(')(')); // "()"
console.log(solution('()))((()')); // "()(())()"
