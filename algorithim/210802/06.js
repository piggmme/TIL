// 6. 최대점수 구하기(DFS)
// 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를
// 풀려고 합니다. 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩
// 니다. 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다. (해당문제는
// 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)
// ▣ 입력설명
// 매개변수 nums에 N(1<=N<=20)개의 문제 정보가 주어집니다.
// 매개변수 m에 제한 시간 M(10<=M<=300)이 주어집니다.
// ▣ 출력설명
// 제한 시간안에 얻을 수 있는 최대 점수를 반환합니다.
// ▣ 매개변수 형식 1
// [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20
// ▣ 반환값 형식 1
// 41
// ▣ 매개변수 형식 2
// [[15, 6], [30, 11], [23, 8], [14, 4], [10, 3], [20, 7]], 25
// ▣ 반환값 형식 2
// 74

// sol)
{
  function solution(nums, m) {
    let n = nums.length;
    let max = Number.MIN_SAFE_INTEGER;
    let total = nums.reduce((a, b) => a + b, 0);

    function DFS(L, sum, time, tsum) {
      if (time > m) return; // 시간이 m보다 크면 그만 동작!! 종료.
      if (sum + (total - tsum) < max) return; // 이후에 더하게 될 나머지 값들을 전부 더해도, 최대값이 되지 못하면 그만!
      if (L === n) {
        max = Math.max(sum, max);
      } else {
        // 푼다
        DFS(L + 1, sum + nums[L][0], time + nums[L][1], tsum + nums[L][0]);

        // 풀지 않는다.
        DFS(L + 1, sum, time, tsum + nums[L][0]);
      }
    }
    DFS(0, 0, 0, 0);
    return max;
  }
  // console.log(
  //   solution(
  //     [
  //       [10, 5],
  //       [25, 12],
  //       [15, 8],
  //       [6, 3],
  //       [7, 4],
  //     ],
  //     20
  //   )
  // ); // 41
  // console.log(
  //   solution(
  //     [
  //       [15, 6],
  //       [30, 11],
  //       [23, 8],
  //       [14, 4],
  //       [10, 3],
  //       [20, 7],
  //     ],
  //     25
  //   )
  // ); // 74
}

// mysol)
{
  function solution(nums, m) {
    let part = [];
    let n = nums.length;
    let max = 0;

    function dfs(L) {
      if (L >= n) {
        // 종료 조건
        if (part.length !== 0) {
          let time = 0,
            sum = 0;
          for (let x of part) {
            time += x[1];
            sum += x[0];
          }
          if (time <= m && max < sum) max = sum;
        }
      } else {
        part.push(nums[L]);
        dfs(L + 1);
        part.pop();
        dfs(L + 1);
      }
    }
    dfs(0);
    return max;
  }
  //   console.log(
  //     solution(
  //       [
  //         [10, 5],
  //         [25, 12],
  //         [15, 8],
  //         [6, 3],
  //         [7, 4],
  //       ],
  //       20
  //     )
  //   ); // 41
  //   console.log(
  //     solution(
  //       [
  //         [15, 6],
  //         [30, 11],
  //         [23, 8],
  //         [14, 4],
  //         [10, 3],
  //         [20, 7],
  //       ],
  //       25
  //     )
  //   ); // 74
}
