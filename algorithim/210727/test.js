// 가장 긴 바이토닉 수열
// 바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미한다
// 길이가 N인 수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉 수열의 길이를 찾는 프로그램을 작성해라
// 만약 수열이 [3,2,5,6,4,3,7] 이면 가장 긴 바이토닉 수열은 [2,5,6,4,3]이다
// 우리가 찾는 바이토닉 수열은 길이가 3 이상이여야 하고, 반드시 증가했다 감소하는 수열이여야 한다.
function solution(arr) {
  let up = 0;
  let cnt = 1;
  let bitonic = [];
  let flag = 0;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      // 증가
      // 바이토닉 시작
      if (flag === 1) {
        // 바이토닉이 끊긴것.
        bitonic.push(cnt); // 카운트 되었다면 추가.
        // 값들 초기화
        flag = 0;
        up = 0;
        cnt = 1;
      }
      up = 1;
      cnt += 1; // 바이토닉 길이 카운트
    } else if (arr[i] > arr[i + 1]) {
      // 감소
      if (up === 1) {
        // 증가했다가 감소 시작.
        up = 0;
        flag = 1; // 바이토닉임을 나타냄
      }
      if (flag === 1) cnt += 1; // 바이토닉이고, 감소중. 길이 카운트
    }
  }
  if (flag === 1) bitonic.push(cnt); // 마지막 바이토닉 길이 카운트

  if (bitonic.length === 0) return 0;
  else return Math.max(...bitonic);
}
console.log(solution([3, 2, 5, 6, 4, 3, 7])); // 5
console.log(solution([3, 3, 3])); // 0
console.log(solution([1, 2, 3, 4, 5])); // 0
console.log(solution([5, 4, 3, 2, 1])); // 0
console.log(solution([1, 2, 1, 2, 1, 2, 1])); // 3
console.log(solution([5, 2, 3, 4, 5, 4, 3])); // 6
console.log(solution([1, 2, 3, 4, 5, 4, 3, 2, 1])); // 9
console.log(solution([1, 2, 3, 4, 5, 4, 3, 2, 1, 10])); // 9
{
  function solution(arr) {
    let up = 0,
      down = 0;
    let cnt = 1;
    let bitonic = [];
    let flag = 0;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        // 증가
        // 바이토닉 시작
        if (flag === 1) {
          // 바이토닉이 끊긴것.
          bitonic.push(cnt); // 카운트 되었다면 추가.
          // 값들 초기화
          flag = 0;
          up = 0;
          down = 0;
          cnt = 1;
        }
        up = 1;
        cnt += 1; // 바이토닉 길이 카운트
      } else if (arr[i] > arr[i + 1]) {
        // 감소
        down = 1;
        if (up === 1) {
          // 증가했다가 감소 시작.
          up = 0;
          flag = 1; // 바이토닉임을 나타냄
        }
        if (flag === 1) cnt += 1; // 바이토닉이고, 감소중. 길이 카운트
      }
    }
    if (flag === 1) bitonic.push(cnt); // 마지막 바이토닉 길이 카운트

    if (bitonic.length === 0) return 0;
    else return Math.max(...bitonic);
  }
}
