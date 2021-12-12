// https://programmers.co.kr/learn/courses/30/lessons/42883
// 큰 수 만들기
{
  function solution(number, k) {
    const stack = [];
    let cnt = k;

    for (const num of number) {
      while (stack.length && cnt !== 0 && num > stack[stack.length - 1]) {
        stack.pop();
        cnt -= 1;
      }
      stack.push(num);
    }

    return cnt === 0
      ? stack.join('')
      : stack.join('').substring(0, stack.length - cnt);
  }
  console.log(solution('1924', 2));
  console.log(solution('1231234', 3));
  console.log(solution('111111', 3));
}
