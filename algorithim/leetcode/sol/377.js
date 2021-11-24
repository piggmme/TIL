// https://leetcode.com/problems/combination-sum-iv/
// 377. Combination Sum IV

// DP
{
  const combinationSum4 = (coins, target) => {
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
      for (const coin of coins) {
        if (coin <= i) dp[i] += dp[i - coin];
      }
      console.log(dp);
    }

    return dp[target];
  };
  console.log(combinationSum4([1, 2, 3], 4)); // 7
  //   console.log(combinationSum4([1, 2, 5], 10)); // 7

  //   console.log(combinationSum4([9], 3)); // 0
}

{
  // 동전 만들기 연습
  const solution = (coins, target) => {
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
      for (let i = coin; i <= target; i++) {
        dp[i] += dp[i - coin];
      }
    }
    return dp[target];
  };
  //   console.log(solution([1, 2, 5], 10)); // 10
}

// DFS => 타임 리밋
{
  const combinationSum4 = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    const answer = [];
    const temp = [];

    const DFS = sum => {
      if (sum > target) return false;
      if (sum === target) {
        answer.push(temp.slice());
        return true;
      }

      for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i]);
        const isPossible = DFS(sum + nums[i]);
        temp.pop();

        if (!isPossible) break;
      }
      return true;
    };
    DFS(0, 0);
    return answer;
  };
  //   console.log(combinationSum4([1, 2, 3], 4));
  //   console.log(combinationSum4([9], 3));
}
{
  const combinationSum4 = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    let answer = 0;

    const DFS = sum => {
      if (sum > target) return false;
      if (sum === target) {
        answer += 1;
        return true;
      }

      for (let i = 0; i < nums.length; i++) {
        const isPossible = DFS(sum + nums[i]);

        if (!isPossible) break;
      }
      return true;
    };
    DFS(0, 0);
    return answer;
  };
  //   console.log(combinationSum4([1, 2, 3], 4));
  //   console.log(combinationSum4([9], 3));
}
