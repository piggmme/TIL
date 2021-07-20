// 4. 괄호 문자 제거
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
// 재귀를 이용하여 풀었다.
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
