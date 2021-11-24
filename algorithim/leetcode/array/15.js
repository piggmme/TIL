// 3sum
// https://leetcode.com/problems/3sum/

// ? ,,
{
  const threeSum = nums => {
    const answer = [];
    nums.sort((a, b) => a - b);

    const setAnswer = ([n1, n2, n3]) => {
      for (const [a, b, c] of answer) {
        if (n1 === a && n2 === b && n3 === c) return;
      }
      answer.push([n1, n2, n3]);
    };

    for (let lt = 0; lt < nums.length - 1; lt++) {
      let rt = nums.length - 1;
      if (rt - lt === 0) break;
      console.log(lt, rt);

      for (let mid = lt + 1; mid < rt; mid++) {
        const total = nums[lt] + nums[rt] + nums[mid];

        if (total === 0) {
          setAnswer([nums[lt], nums[rt], nums[mid]]);
          rt--;
          break;
        }
      }
    }
    return answer;
  };
  console.log(threeSum([-1, 0, 1, 2, -1, -4]));
  console.log(threeSum([]));
  console.log(threeSum([0]));
}

// DFS
{
  const threeSum = nums => {
    let answer = [];
    let part = [];

    const setAnswer = ([n1, n2, n3]) => {
      for (const [a, b, c] of answer) {
        if (n1 === a && n2 === b && n3 === c) return;
      }
      answer.push([n1, n2, n3]);
    };

    const DFS = (L, s) => {
      if (L === 3) {
        if (part.reduce((acc, cur) => acc + cur, 0) === 0) {
          setAnswer(part.slice().sort((a, b) => a - b));
        }
        return;
      } else {
        for (let i = s; i < nums.length; i++) {
          part.push(nums[i]);
          DFS(L + 1, i + 1);
          part.pop();
        }
      }
    };
    DFS(0, 0);
    return answer;
  };
  //   console.log(threeSum([-1, 0, 1, 2, -1, -4]));
  //   console.log(threeSum([]));
  //   console.log(threeSum([0]));
}
