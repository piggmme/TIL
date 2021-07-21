// 4. 격자판 최대합
// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

// k번째 - : k0, k1, k2, ..., kn
// k번째 | : 0k, 1k, 2k, ..., nk
// \ : 00, 11, ..., nn
// / : 0n, 1(n-1), 2(n-2), ..., n0

function solution(arr) {
  let max = 0,
    temp = 0,
    sum = 0;
  const n = arr.length;
  // 행 중에 최대값 찾기
  for (let i = 0; i < n; i++) {
    sum = arr[i].reduce((acc, cur) => acc + cur, 0);
    max = max < sum ? sum : max;
  }

  // 열 중에 최대값 찾기
  for (let i = 0; i < n; i++) {
    temp = arr.reduce((acc, cur) => {
      acc.push(cur[i]);
      return acc;
    }, []);
    sum = temp.reduce((acc, cur) => acc + cur, 0);
    max = max < sum ? sum : max;
  }

  // \ 대각선
  sum = arr.reduce((acc, cur, idx) => {
    return (acc += cur[idx]);
  }, 0);
  max = max < sum ? sum : max;

  // / 대각선
  sum = arr.reduce((acc, cur, idx) => {
    return (acc += cur[n - idx - 1]);
  }, 0);
  max = max < sum ? sum : max;

  return max;
}

// console.log(
//   solution([
//     [10, 13, 10, 12, 15],
//     [12, 39, 30, 23, 11],
//     [11, 25, 50, 53, 15],
//     [19, 27, 29, 37, 27],
//     [19, 13, 30, 13, 19],
//   ])
// );
