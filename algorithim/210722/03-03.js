// 3. 최대 매출
// 현수의 아빠는 제과점을 운영합니다.
// 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다.
// 이때 K=3이면
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.

// Queue를 사용하여 푼다.
// input => [ , , , ] => output

function solution(nums, K) {
  const N = nums.length;
  // 초기 K일 간 매출을 큐에 담고, 그 총합을 구함
  let frame = nums.filter((n, idx) => idx < K);
  let result = frame.reduce((acc, cur) => acc + cur, 0);

  for (let i = K; i < N; i++) {
    // frame 중의 처음을 제거
    frame.shift();
    // frame에 다음날을 추가
    frame.push(nums[i]);
    // 총 합을 구함
    let sum = frame.reduce((acc, cur) => acc + cur, 0);
    result = result < sum ? sum : result;
  }
  return result;
}
// console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
