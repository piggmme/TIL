// 4. 연속된 문자 지우기
// 문자열 s가 주어지면 이웃한 두 개이 문자가 같으면 두 문자를 제거합니다.
// 이 과정을 반복해 서 최종적으로 남는 문자만으로 이루어진 문자열을 출력하는 프로그램을 작성하세요.
// 만약 "acbbcaa"라는 문자열이 주어진다면 최초 bb가 연속되어 있어 제거하고 나면 “accaa"가 되고,
// 다시 cc가 연속되어 제거하면 ”aaa"가 되고 “aa"연속되어 제거하면 ”a"가 최종적으로 남습니다.

// ▣ 입력설명
// 매개변수 s에 문자열이 주어집니다. 문자열은 소문자로 이루어져 있으면 그 길이는 200,000을 넘지 않습니다.
// ▣ 출력설명
// 최종 문자열을 반환하세요.
// ▣ 매개변수 형식 1
// acbbcaa
// ▣ 반환값 형식 1
// a
// ▣ 매개변수 형식 1
// bacccaba
// ▣ 반환값 형식 1
// bacab

// Sol)
// 스택이 비어있으면 push
// 스택의 상단과 비교해서 같다면, 넣지않고 pop
{
  function solution(str) {
    let stack = [];
    for (let x of str) {
      if (stack.length === 0) stack.push(x);
      else {
        if (stack[stack.length - 1] === x) stack.pop(x);
        else stack.push(x);
      }
    }
    return stack.join("");
  }
  // console.log(solution("acbbcaa")); // a
  // console.log(solution("bacccaba")); // bacaba
}

// MySol) 스택
{
  function solution(str) {
    let arr = str.split("");
    const N = str.length;
    let stack = [];
    let sp = -1;

    for (let i = 0; i < N; i++) {
      stack.push(arr[i]);
      sp += 1;
      if (sp !== 0) {
        if (stack[sp] === stack[sp - 1]) {
          stack.pop();
          stack.pop();
          sp -= 2;
        }
      }
    }
    return stack.join("");
  }

  // console.log(solution("acbbcaa")); // a
  // console.log(solution("bacccaba")); // bacaba
}
