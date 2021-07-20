// 5. 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요
function solution(arr) {
  let min = arr[0];
  for (let a of arr) {
    if (min > a) min = a;
  }
  return min;
}
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
