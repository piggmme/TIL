// 문제 설명
// 0과 1로 구성된 길이가 N인 수열이 주어집니다.
// 여러분은 이 수열에서 최대 k번을 0을 1로 변경할 수 있습니다.
// 여러분이 최대 k번의 변경을 통해 이 수열에서 1로만 구성된 최대 길이의 연속부분수열을 찾는 프로그램을 작성하세요.
// 만약 길이가 15인 다음과 같은 수열이 주어지고 k=2라면
// 1 0 0 1 1 1 0 1 1 1 0 1 0 0 1
// 여러분이 만들 수 있는 1이 연속된 최대 길이의 연속부분수열은 1 0 0 1 1 1 1 1 1 1 1 1 0 0 1 이며
// 그 길이는 9입니다.

// ▣ 입력설명
// 매개변수 nums 배열에 길이가 N(5<=N<100,000)인 수열이 주어지고, 1000이하의 k가 주어집니다.

// ▣ 출력설명
// 최대길이를 반환하세요.

// ▣ 매개변수 형식
// [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2

// ▣ 반환값 형식
// 9

// BFS?
{
  function solution(nums, k) {
    let n = nums.length;

    while (k > 0) {
      let one = Array(n).fill(0);
      let zero = Array(n).fill(0);
      // 연속된 1이 얼마 있는지 표현
      if (nums[0] === 1) one[0] = 1;
      for (let i = 1; i < n; i++) {
        if (nums[i] === 1) {
          one[i] = one[i - 1] + 1;
        }
      }
      // 최종 연속 값으로 갱신
      for (let i = n - 1; i >= 1; i--) {
        if (nums[i] === 1 && nums[i - 1]) one[i - 1] = one[i];
      }
      // 0이 들어가면 좋은 자리를 가중치를 두어 표현
      // 오른쪽으로 밀면서
      if (one[0] === 1) zero[1] = 2;
      for (let i = 1; i < n - 1; i++) {
        if (one[i] > 0) {
          if (one[i + 1] === 0) zero[i + 1] = one[i] + 1;
        }
      }
      // 왼쪽에서 밀면서
      if (one[n - 1] === 1) zero[n - 2] = zero[n - 2] + one[n - 1] + 1;
      for (let i = n - 2; i >= 0; i--) {
        if (one[i] > 0) {
          if (one[i - 1] === 0) zero[i - 1] = zero[i - 1] + one[i] + 1;
        }
      }

      // 최대 중요한 위치 찾기
      let idx = 0,
        max = 0;
      for (let i = 0; i < n; i++) {
        if (max < zero[i]) {
          idx = i;
          max = zero[i];
        }
      }
      // 1을 삽입
      nums[idx] = 1;
      k--;
    }

    let answer = 0,
      one = Array(n).fill(0);
    // 연속된 1 찾기
    if (nums[0] === 1) one[0] = 1;
    for (let i = 1; i < n; i++) {
      if (nums[i] === 1) {
        one[i] = one[i - 1] + 1;
      }
    }

    return Math.max(...one);
  }
  // console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2));
  //console.log(solution([0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0], 2)); // 5
}

// 제출
{
  {
    function solution(nums, k) {
      let n = nums.length;
      let answer = 0,
        cnt = 0;
      for (let i = 0; i < n; i++) {
        if (i > n - k) break;
        if (nums[i] === 0) cnt++;
        for (let j = i; j < n; j++) {
          if (nums[j] === 0 && cnt === k) {
            answer = Math.max(answer, j - i);
            cnt = 0;
            break;
          }
          if (nums[j] === 0) cnt++;
        }
      }
      return answer;
    }
    //   console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2)); // 9
  }
}
