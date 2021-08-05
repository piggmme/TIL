// 1. 최대매출 => 슬라이딩 윈도우(two pointer)
// 현수의 아빠는 제과점을 운영합니다.
// 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다.
// 이때 K=3이면
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.

// ▣ 입력설명
// 매개변수 nums에 N(5<=N<=100,000)일 동안의 매출액이 주어집니다. 매개변수 k에 K(2<=K<=N)가 주어집니다. 매출액의 500이하의 자연수입니다.
// ▣ 출력설명
// 최대 매출액을 반환합니다.
// ▣ 매개변수 형식 1
// [12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3
// ▣ 반환값 형식 1
// 56
// ▣ 매개변수 형식 2
// [1, 2, 3, 5, 6, 7, 1, 3, 9], 5
// ▣ 반환값 형식 2
// 26
// ▣ 매개변수 형식 3
// [12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4
// ▣ 반환값 형식 3
// 342

// Sol)
{
  function solution(nums, k) {
    let answer,
      sum = 0;
    for (let i = 0; i < k; i++) sum += nums[i];
    answer = sum;
    for (let i = k; i < nums.length; i++) {
      sum += nums[i] - nums[i - k];
      answer = Math.max(answer, sum);
    }
    return answer;
  }
  // console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
  // console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
  // console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); //342
}

// mySol)
{
  function solution(nums, k) {
    const n = nums.length;
    let start = 0,
      end = k - 1;
    let sum = 0,
      max = 0;
    // 초기 k일 간의 총합
    for (let i = 0; i < k; i++) sum += nums[i];
    max = sum;
    // 이후 1일씩 shift하며 최대 매출을 기록함.
    for (let i = k; i < n; i++) {
      sum -= nums[start++];
      sum += nums[++end];
      if (sum > max) max = sum;
    }
    return max;
  }
  //   console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
  //   console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
  //   console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); //342
}

// 옛날 풀이)
{
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
}
