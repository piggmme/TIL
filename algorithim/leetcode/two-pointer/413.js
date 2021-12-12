// 413. Arithmetic Slices
// https://leetcode.com/problems/arithmetic-slices/

{
  const numberOfArithmeticSlices = nums => {
    let lt = 0,
      rt = 2;
    let count = 0;
    let gap = nums[1] - nums[0];

    while (rt < nums.length) {
      const curGap = nums[rt] - nums[rt - 1];

      if (curGap === gap) {
        count += rt - lt - 1;
        rt++;
      } else {
        lt = rt - 1;
        rt = rt + 1;
        gap = curGap;
      }
    }
    return count;
  };
  console.log(numberOfArithmeticSlices([1, 2, 3, 4])); // 3
  console.log(numberOfArithmeticSlices([1])); // 0
  console.log(numberOfArithmeticSlices([1, 2, 3, 8, 9, 10])); // 2
}

// 투포인터
{
  const numberOfArithmeticSlices = nums => {
    const n = nums.length;
    let lt = 0;
    let answer = 0;
    let len = 1;

    if (n < 3) return 0;

    let rt = 1;
    while (rt < n) {
      const dist = nums[lt + 1] - nums[lt];
      if (dist === nums[rt] - nums[rt - 1]) {
        rt++;
        continue;
      }

      if (rt - lt >= 3) {
        answer += ((rt - lt - 2) * (rt - lt - 1)) / 2;
      }
      lt = rt - 1;
    }
    if (rt - lt >= 3) {
      answer += ((rt - lt - 2) * (rt - lt - 1)) / 2;
    }

    return answer;
  };
  console.log(numberOfArithmeticSlices([1, 2, 3, 4])); // 3
  console.log(numberOfArithmeticSlices([1])); // 0
  console.log(numberOfArithmeticSlices([1, 2, 3, 8, 9, 10])); // 2
}
