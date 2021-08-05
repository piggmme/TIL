// 1. 수열축소
// 길이가 N인 수열이 주어지면 인접한 두 수의 차이를 이용해 길이가 N-1인 수열을 만듭니다.
// 만약 수열이 [5, 3, 7, 9, -2]라면 [(3-5), (7-3), (9-7), (-2-9)] => [-2, 4, 2, -11]로 수 열의 길이를 줄일 수 있습니다.
// 이런 과정을 길이축소작업이라 하겠습니다.
// N길이의 수열이 주어지면 M번의 길이축소작업을 한 결과를 구하는 프로그램을 작성하세요.

// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=30)길이의 수열이 주어지고, 매개변수 m에 M(M<N)이 주어집니 다.
// ▣ 출력설명
// M번의 길이축소작업을 거친 수열을 반환합니다..
// ▣ 매개변수 형식 1
// [5, 3, 7, 9, -2], 1
// ▣ 반환값 형식 1
// [-2, 4, 2, -11]
// ▣ 매개변수 형식 2
// [5, 3, 7, 9, -2], 2
// ▣ 반환값 형식 1
// [6, -2, -13]

// Sol)
// 한 배열 안에서, 빼고 앞에다가 삽입하는 방법
{
  function solution(nums, m) {
    let N = nums.length;
    for (let j = 0; j < m; j++) {
      for (let i = 0; i < N - j - 1; i++) {
        nums[i] = nums[i + 1] - nums[i];
      }
    }
    return nums.slice(0, N - m);
  }
  // console.log(solution([5, 3, 7, 9, -2], 1)); // [-2, 4, 2, -11]
  // console.log(solution([5, 3, 7, 9, -2], 2)); // [6, -2, -13]
}

// 재귀
{
  function solution(nums, m) {
    let result = [];
    if (m === 0) {
      // 종료 조건
      return nums; // 종료값 반환
    }
    for (let i = 1; i < nums.length; i++) result.push(nums[i] - nums[i - 1]);
    return solution(result, m - 1); // 자기자신을 다시 호출.
    // 스택에 쌓인 자기 함수들은 계속 깨어나고, 종료값을 반환하고, 깨어나고 를 반복.
  }
  // console.log(solution([5, 3, 7, 9, -2], 1)); // [-2, 4, 2, -11]
  // console.log(solution([5, 3, 7, 9, -2], 2)); // [6, -2, -13]
}
// 이중 포문
{
  function compactArr(nums, m) {
    let result = [];
    for (let i = 1; i < nums.length; i++) {
      result.push(nums[i] - nums[i - 1]);
    }
    return result;
  }
  function solution(nums, m) {
    let result = nums;
    while (1) {
      if (m === 0) {
        return result;
      } else {
        result = compactArr(result, m);
        m -= 1;
      }
    }
  }
  //   console.log(solution([5, 3, 7, 9, -2], 1)); // [-2, 4, 2, -11]
  //   console.log(solution([5, 3, 7, 9, -2], 2)); // [6, -2, -13]
}
