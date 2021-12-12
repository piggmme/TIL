// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
// 1658. Minimum Operations to Reduce X to Zero

// sliding window
{
  const minOperations = (nums, x) => {
    const total = nums.reduce((acc, cur) => acc + cur, 0);
    const target = total - x;
    let answer = Number.MAX_SAFE_INTEGER;

    if (total < x) return -1;

    let lt = 0;
    let sum = 0;
    for (let rt = 0; rt < nums.length; rt++) {
      sum += nums[rt];
      while (sum > target) {
        sum -= nums[lt++];
      }
      if (sum === target)
        answer = Math.min(answer, nums.length - (rt - lt + 1));
    }
    return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
  };
  //   console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
  //   console.log(minOperations([5, 6, 7, 8, 9], 4)); // -1
  //   console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); // 5
  console.log(minOperations([1, 1], 3)); // -1
}

// DFS X
{
  var minOperations = function (nums, x) {
    let answer = Number.MAX_SAFE_INTEGER;
    const DFS = (L, sum, arr) => {
      if (sum > x) return;
      if (sum === x) {
        answer = Math.min(L, answer);
        return;
      }
      if (arr.length === 0) return;

      DFS(L + 1, sum + arr[arr.length - 1], arr.slice(0, arr.length - 1));
      DFS(L + 1, sum + arr[0], arr.slice(1));
    };
    DFS(0, 0, nums.slice());
    return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
  };
  //   console.log(minOperations([1, 1, 4, 2, 3], 5));
  //   console.log(minOperations([5, 6, 7, 8, 9], 4));
  //   console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
  //   console.log(
  //     minOperations(
  //       [
  //         8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993,
  //         9904, 8819, 1231, 6309,
  //       ],
  //       134365,
  //     ),
  //   );
}
