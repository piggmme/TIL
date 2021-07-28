// 01. 올바른 괄호 => 스택

// Sol)
// 입력에 괄호의 쌍이 있으면 7~80 % 스택이다!!
// 여는 괄호를 만나면, 스택에 push
// 닫는 괄호 만나면, 스택의 가장 상단이 짝궁임. pop
{
  function solution(str) {
    let stack = [];
    for (let x of str) {
      if (x === "(") stack.push(x);
      else {
        if (stack.length === 0) return "NO";
        stack.pop();
      }
    }
    if (stack.length > 0) return "NO"; // 덜 pop되면 잘못된 것!
    return "YEST";
  }

  // console.log(solution("(()()))")); // NO
  // console.log(solution("(()(()))(()")); // NO
}

// MySol)
// 여는 괄호 +1, 닫는 괄호 +1
// 한번 이라도 음수 되면 false
// 마지막 값이 양수면 false
{
  function solution(str) {
    let mv = 0,
      haveToOpen = true;
    for (let i = 0; i < str.length; i++) {
      if (haveToOpen) {
        if (str[i] === "(") mv += 1;
        else if (mv === 0) return "NO";
        // 닫히는 괄호일 때
        else {
          // 닫히는 괄호일 때
          haveToOpen = false;
          mv -= 1;
        }
      } else {
        if (str[i] === ")") mv -= 1;
        else if (mv !== 0) return "NO";
        // 열리는 괄호일 때
        else {
          // 열리는 괄호일 때
          haveToOpen = true;
          mv += 1;
        }
      }
    }
    if (mv !== 0) return "NO";
    return "YES";
  }
  // console.log(solution("(()()))")); // NO
  // console.log(solution("(()(()))(()")); // NO
}
