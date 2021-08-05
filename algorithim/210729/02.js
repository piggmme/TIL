// 2. 매출액의 종류 => two pointer + Hashing
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

// ▣ 입력설명
// 매개변수 nums에 N(5<=N<=100,000)일 동안의 매출기록이 주어집니다. 매개변수 k에 K(2<=K<=N)가 주어집니다.
// 각 매출액은 500이하의 음이 아닌 정수입니다.
// ▣ 출력설명
// 첫 줄에 각 구간의 매출액 종류를 순서대로 반환합니다.
// ▣ 매개변수 형식 1
// [20, 12, 20, 10, 23, 17, 10], 4
// ▣ 반환값 형식 1
// [3, 4, 4, 3]
// ▣ 매개변수 형식 2
// [1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3
// ▣ 반환값 형식 2
// [3, 2, 2, 2, 2, 1, 1, 2]

// Sol)
{
  function solution(nums, k) {
    let nH = new Map();
    let answer = [];

    for (let i = 0; i < k - 1; i++) {
      nH.set(nums[i], nH.get(nums[i]) + 1 || 1);
    }
    let lt = 0;
    for (let rt = k - 1; rt < nums.length; rt++) {
      nH.set(nums[rt], nH.get(nums[rt]) + 1 || 1);
      answer.push(nH.size);
      nH.set(nums[lt], nH.get(nums[lt]) - 1);
      if (nH.get(nums[lt]) === 0) nH.delete(nums[lt]);
      lt++;
    }

    return answer;
  }
  //console.log(solution([20, 12, 20, 10, 23, 17, 10], 4)); // [3, 4, 4, 3]
  //console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3)); // [3, 2, 2, 2, 2, 1, 1, 2]
}

// mySol)
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
      else cnt.set(nums[i], cnt.get(nums[i]) + 1); // 키값이 있다면 val + 1
    }
    // 종류를 결과에 추가.
    result.push(cnt.size);

    for (let i = k; i < n; i++) {
      // start의 키값은 제외함. 만약에 1개 이상이였으면, val 하나 감소
      if (cnt.get(nums[start]) > 1)
        cnt.set(nums[start], cnt.get(nums[start]) - 1);
      else cnt.delete(nums[start]); // value가 1이였으면, 1개만 존재했으므로 키값을 제거
      start++;
      end++;
      // end의 키값을 추가함. 만약 이미 있다면 val + 1
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
