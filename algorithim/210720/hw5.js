// 5. 재귀함수를 이용한 이진수 출력
// 10진수 n이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용해서 출력해야 합니다.
function binaryRecursive(decimal) {
  let arr = [];
  if (parseInt(decimal / 2) === 0) {
    arr.push(decimal % 2);
    return arr;
  } else {
    arr = binaryRecursive(parseInt(decimal / 2));
    arr.push(decimal % 2);
    return arr;
  }
}
function solution(decimal) {
  return binaryRecursive(decimal).join("");
}
// console.log(solution(512));
