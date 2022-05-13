function solution(N) {
  let answer = Number.MIN_SAFE_INTEGER;
  const stack = [...(N + '')];

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '5') {
      const temp = [...stack.slice(0, i), ...stack.slice(i + 1)];
      answer = Math.max(answer, +temp.join(''));
    }
  }
  return answer === 0 ? 0 : answer;
}
console.log(solution(15958));
console.log(solution(-5859));
console.log(solution(-5000));
console.log(solution(959595));
console.log(solution(-959595));
