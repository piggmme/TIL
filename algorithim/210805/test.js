// 마운틴 수열
// 수열 S가 어떤 수 Si를 기준으로
// S1 < S2 < ... < Si-1 < Si > Si+1 > ... > Sn-1 > Sn
// 을 만족한다면 그 수열을 마운틴 수열이라고 한다.
// - 마운틴 수열
// {10, 20, 30, 20, 10}
// - 마운틴 수열이 아닌 것
// {1,2,3,2,1,2,3}
// 수열 A가 주어졌을 때, 그 수열의 부분 수열 중 마운틴 수열이면서 가장 긴 수열의 길이를 구하라.
// 부분이라는 것은 수를 제외하는 것은 허락하되, 순서는 바꿔선 안된다.
{
  function solution(nums) {
    let n = nums.length;
    // dy[i] : i번째 항이 마지막 항이 되는 최대 부분 증가 수열의 길이
    let dy = Array.from({ length: n });
    dy[0] = 1; // 혼자 한개
    // dx[i] : i번째 항이 마지막 항이 되는 최대 부분 감소 수열의 길이
    let dx = Array.from({ length: n });
    dx[n - 1] = 1; // 혼자 한개.

    // 최대 부분 증가 수열 구함
    for (let i = 0; i < n; i++) {
      let max = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] < nums[i] && dy[j] > max) {
          max = dy[j];
        }
      }
      dy[i] = max + 1;
    }

    // 최대 부분 감소 수열 구함
    for (let i = n - 1; i >= 0; i--) {
      let max = 0;
      for (let j = i + 1; j < n; j++) {
        if (nums[j] < nums[i] && dx[j] > max) {
          max = dx[j];
        }
      }
      dx[i] = max + 1;
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
      answer = Math.max(dy[i] + dx[i] - 1, answer);
    }
    return answer;
  }
  // console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 7
  // console.log(solution([1, 6, 2, 3, 4, 5, 1, 4, 3, 2, 1])); // 9
  // console.log(solution([1, 5, 2, 1, 4, 3, 4, 5, 2, 1])); // 7
  // console.log(solution([1])); // 1
  // console.log(solution([1, 2])); // 2
  // console.log(solution([2, 1])); // 2
}
