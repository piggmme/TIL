// 3. 가장 긴 수열
// 길이가 N인 수열이 주어지면 이 수열에서 연속으로 증가하거나, 또는 연속으로 작아지는 부분 수열 중 가장 길이가 긴 수열을 찾는 프로그램을 작성하세요.
// 만약 [5, 3, 6, 7, 9, 8, 5, 3, 1, 2]이 주어지면 우리가 찾는 가장 긴 수열은 [9, 8, 5, 3, 1] 입니다.
// 수열 [1, 2, 3, 3, 4, 5, 6]과 같이 같은 값이 연속으로 있는 것은 증가 또는 감소로 보지 않 기 때문에 가장 긴 수열은 [3, 4, 5, 6]이 됩니다.

// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=30)길이의 수열이 주어집니다. 수열의 원소는 자연수입니다.
// ▣ 출력설명
// 가장 긴 수열의 길이를 반환합니다.
// ▣ 매개변수 형식 1
// [5, 3, 6, 7, 9, 8, 5, 3, 1, 2]
// ▣ 반환값 형식 1
// 5
// ▣ 매개변수 형식 2
// [5, 2, 4, 7, 6, 3, 9, 10, 11]
// ▣ 반환값 형식 2
// 8
// ▣ 매개변수 형식 3
// [1, 2, 3, 3, 4, 5, 6, 7, 7]
// ▣ 반환값 형식 3
// 5

// Sol)
{
  function solution(nums) {
    let up = 1,
      down = 1;
    let result = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] < nums[i]) up += 1;
      else {
        result = Math.max(result, up);
        up = 1;
      }
      if (nums[i - 1] > nums[i]) down += 1;
      else {
        result = Math.max(result, down);
        down = 1;
      }
    }
    // 끝 자료 갱신
    if (up > 1) result = Math.max(result, up);
    if (down > 1) result = Math.max(result, down);
    return result;
  }
  // console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2])); // 5
  // console.log(solution([5, 2, 4, 7, 6, 3, 9, 10, 11])); // 4
  // console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7])); // 5
}

// mySol)
{
  function solution(arr) {
    let up = 1,
      down = 1;
    let result = [];
    let N = arr.length + 1;
    arr.push(arr[N - 1]);
    for (let i = 1; i < N; i++) {
      if (arr[i] - arr[i - 1] > 0) {
        // 1. 증가인 경우
        if (down > 1) {
          // 감소하다가 증가한 경우
          result.push(down);
          down = 1;
        }
        up += 1;
      } else if (arr[i] - arr[i - 1] < 0) {
        // 2. 감소인 경우
        if (up > 1) {
          // 증가하다 감소한 경우
          result.push(up);
          up = 1;
        }
        down += 1;
      } else {
        // 3. 증감 둘다 안한 경우 + 마지막 경우
        if (up !== 1) {
          result.push(up);
          up = 1;
        } else {
          result.push(down);
          down = 1;
        }
      }
    }
    return Math.max(...result);
  }
  // console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2])); // 5
  // console.log(solution([5, 2, 4, 7, 6, 3, 9, 10, 11])); // 4
  // console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7])); // 5
}
