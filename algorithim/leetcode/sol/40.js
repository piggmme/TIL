// 40. Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/

// DFS
{
  const combinationSum2 = (candidates, target) => {
    candidates.sort((a, b) => a - b);
    const temp = [];
    const answer = [];
    // 조합
    const DFS = (L, s, sum) => {
      if (sum > target) return;
      if (sum === target) {
        answer.push(temp.slice());
        return;
      }
      for (let i = s; i < candidates.length; i++) {
        // 이건 모지??..
        if (i > s && candidates[i] === candidates[i - 1]) continue;
        temp.push(candidates[i]);
        DFS(L + 1, i + 1, sum + candidates[i]);
        temp.pop();
      }
    };
    DFS(0, 0, 0);
    return answer;
  };
  console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
  console.log(combinationSum2([2, 5, 2, 1, 2], 5));
}

// my sol DFS => 런타임 에러
{
  const combinationSum2 = (candidates, target) => {
    candidates.sort((a, b) => a - b);
    const temp = [];
    const answer = new Set();
    // 조합
    const DFS = (L, s, sum) => {
      if (sum > target) return;
      if (sum === target) {
        answer.add(
          temp
            .slice()
            .sort((a, b) => a - b)
            .join(),
        );
        return;
      }
      for (let i = s; i < candidates.length; i++) {
        temp.push(candidates[i]);
        DFS(L + 1, i + 1, sum + candidates[i]);
        temp.pop();
      }
    };
    DFS(0, 0, 0);
    return [...answer].map(str => [...str.split(',')].map(a => a * 1));
  };
  //   console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
  //   console.log(combinationSum2([2, 5, 2, 1, 2], 5));
}
