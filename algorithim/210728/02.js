// 2. 괄호 문자 제거
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
// 재귀를 이용하여 풀었다.

// ▣ 입력설명
// 매개변수 s에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 남은 문자만 반환 한다.
// ▣ 매개변수 형식 1
// (A(BC)D)EF(G(H)(IJ)K)LM(N)
// ▣ 반환값 형식 1
// EFLM

// Sol)
// 여는괄호, 문자 -> push
// 닫는괄호 -> pop을 여는 괄호까지.
{
  function solution(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ")") {
        stack.push(str[i]);
      } else {
        while (stack.pop() !== "(");
      }
    }
    return stack.join("");
  }
  //  console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")); // EFLM
}

// MySol)
{
  function delBracketsRecursive(arr) {
    let start = arr.length - 1;
    let find = false;
    for (let end = 0; end < arr.length; end++) {
      if (arr[end] === ")") {
        arr.splice(start, end - start + 1);
        find = true;
        return delBracketsRecursive(arr);
      } else if (arr[end] === "(") {
        start = end;
      }
    }
    if (!find) return arr;
  }

  function solution(str) {
    let arr = str.split("");
    return delBracketsRecursive(arr).join("");
  }
  // console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
}
