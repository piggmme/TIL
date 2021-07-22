// 5. 연속 부분 수열
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
// 시간복잡도를 고려해야 하는 문제입니다.
function solution(arr, m) {
  const N = arr.length;
  let queue = [];
  let sum = arr[0];
  let result = 0;
  for (let i = 0; i < N; i++) {
    queue.push(arr[i]);
    sum += arr[i];
    if (sum > m) sum -= queue.shift();
    if (sum === m) result += 1;
  }
  return result;
}
// console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
