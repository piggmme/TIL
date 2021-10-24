// https://programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기
// 효율성 통과 O => 문자열을 그대로 사용하자.
{
  function solution(s) {
    if (s.length % 2) return 0;

    const stack = [];
    let i;
    stack.push(s[0]);

    for (i = 1; i < s.length; i++) {
      if (stack[stack.length - 1] === s[i]) stack.pop();
      else stack.push(s[i]);

      if (s.length - i < stack.length) return 0;
    }

    if (stack.length === 0) return 1;
    else return 0;
  }
  console.log(solution('baabaa'));
  console.log(solution('cdcd'));
}

// 효율성 통과 X ! => 배열을 사용하지 말자. (아마  shift 때문이라고 예상됨)
{
  function solution(s) {
    if (s.length % 2) return 0;

    const string = s.split('');
    const stack = [];

    stack.push(string.shift());

    while (string.length) {
      const temp = string.shift();
      if (stack[stack.length - 1] === temp) stack.pop();
      else stack.push(temp);

      if (string.length < stack.length) return 0;
    }
    if (stack.length === 0) return 1;
    else return 0;
  }
  //   console.log(solution('baabaa'));
  //   console.log(solution('cdcd'));
}
