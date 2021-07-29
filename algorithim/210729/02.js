// 2. 매출액의 종류
// 현수의 아빠는 제과점을 운영합니다.
// 현수아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 매출액의 종류를 각 구간별로 구하라고 했습니다.
// 만약 N=7이고 7일 간의 매출기록이
// 20 12 20 10 23 17 10
// 각 연속 4일간의 구간의 매출종류는
// 첫 번째 구간은 [20, 12, 20, 10]는
// 두 번째 구간은 [12, 20, 10, 23]는
// 세 번째 구간은 [20, 10, 23, 17]는
// 네 번째 구간은 [10, 23, 17, 10]는
// N일간의 매출기록과 연속구간의 길이 K가 주어지면 첫 번째 구간부터 각 구간별 매출액의 종 류를 출력하는 프로그램을 작성하세요.
{
  function solution(nums, k) {
    let n = nums.length;
    let cnt = new Map();
    let start = 0,
      end = k - 1;
    let result = [];

    // 초기 k일 간의 매출 종류
    for (let i = 0; i < k; i++) {
      if (!cnt.get(nums[i])) cnt.set(nums[i], 1);
      // 키값이 없으면 삽입
      else cnt.set(nums[i], cnt.get(nums[i]) + 1);
    }
    // 종류를 결과에 추가.
    result.push(cnt.size);

    for (let i = k; i < n; i++) {
      // start의 키값은 제외함. 만약에 1개 이상이였으면, 하나 감소
      if (cnt.get(nums[start]) > 1)
        cnt.set(nums[start], cnt.get(nums[start]) - 1);
      else cnt.delete(nums[start]);
      start++;
      end++;
      // end의 키값을 추가함. 만약 이미 있다면 추가 안함.
      if (!cnt.get(nums[end])) cnt.set(nums[end], 1);
      else cnt.set(nums[end], cnt.get(nums[end]) + 1);

      // 종류를 결과에 추가.
      result.push(cnt.size);
    }
    return result;
  }
  //   console.log(solution([20, 12, 20, 10, 23, 17, 10], 4)); // [3, 4, 4, 3]
  //   console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3)); // [3, 2, 2, 2, 2, 1, 1, 2]
}
