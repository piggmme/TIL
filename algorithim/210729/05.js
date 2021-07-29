//  5. 연속 부분수열 3
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면
// 13123
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.

// answer += (rt -lt +1)
// rt증가하면 무조건 answer 증가!
// 근데 그건 sum의 조건의 의해서 lt가 증가/그대로!!

// Sol)
{
  function solution(nums, m) {
    let n = nums.length;
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < n; rt++) {
      sum += nums[rt];
      while (sum > m) {
        sum -= nums[lt++];
      }
      answer += rt - lt + 1; // sum이 m 이하일 때. 위의 반복문에 의해서 항상 만족됨.
    }
    return answer;
  }
  //   console.log(solution([1, 3, 1, 2, 3], 5)); // 10
  //   console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 15
  //   console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)); // 22
  // console.log(solution([1, 1, 7], 5)); // 3 => 7인 경우 lt++이기 때문에, 22번째 줄 연산 이후 1증가하여 0이됨.
}
