// https://leetcode.com/problems/combination-sum-iii/
// 216. Combination Sum III

{
  const combinationSum3 = (k, n) => {
    const nums = Array.from({ length: 9 }, (_, i) => i + 1);

    const temp = [];
    const answer = [];
    const DFS = (L, s, sum) => {
      if (sum > n) {
        return;
      }
      if (L === k) {
        if (sum === n) {
          answer.push(temp.slice());
        }
        return;
      }

      for (let i = s; i < 9; i++) {
        temp.push(nums[i]);
        DFS(L + 1, i + 1, sum + nums[i]);
        temp.pop();
      }
    };

    DFS(0, 0, 0);
    return answer;
  };
  console.log(combinationSum3(3, 7));
  console.log(combinationSum3(3, 9));
  console.log(combinationSum3(4, 1));
}
