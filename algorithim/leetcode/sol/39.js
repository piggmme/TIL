// https://leetcode.com/problems/combination-sum/
// 39. Combination Sum
{
  const combinationSum = (candidates, target) => {
    candidates = candidates.sort((a, b) => a - b);
    const temp = [];
    const answer = [];

    const DFS = (L, sum, s) => {
      if (sum > target) return false;
      if (sum === target) {
        answer.push(temp.slice());
        return true;
      }

      for (let i = s; i < candidates.length; i++) {
        temp.push(candidates[i]);
        const isTarget = DFS(L + 1, sum + candidates[i], i);
        temp.pop();

        if (!isTarget) break;
      }
      return true;
    };
    DFS(0, 0, 0);
    return answer;
  };
  console.log(combinationSum([2, 3, 6, 7], 7));
}
