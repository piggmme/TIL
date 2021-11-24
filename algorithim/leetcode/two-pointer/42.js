// Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/
{
  const findWaterVolume = height => {
    let answer = Array(height.length).fill(0);
    let n = height.length;
    let lt = 0;
    let rt = 1;
    while (lt < n - 2) {
      if (height[lt] === 0) {
        lt += 1;
        rt += 1;
      } else if (rt < n && height[lt] > height[rt]) {
        rt += 1;
      } else if (rt === n) {
        lt += 1;
        rt = lt + 1;
      } else if (height[lt] <= height[rt]) {
        for (let i = lt + 1; i < rt; i++) {
          // console.log(height[lt], height[i], i);
          answer[i] = height[lt] - height[i];
        }
        lt = rt;
        rt += 1;
      }
    }
    return answer;
  };
  const trap = function (height) {
    const answer = Array(height.length).fill(0);
    const right = findWaterVolume(height);
    const left = findWaterVolume(height.reverse()).reverse();

    for (let i = 0; i < height.length; i++) {
      answer[i] = Math.max(right[i], left[i]);
    }

    return answer.reduce((acc, cur) => acc + cur, 0);
  };

  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  console.log(trap([4, 2, 0, 3, 2, 5])); // 9
  console.log(trap([4, 2, 3])); // 1
  console.log(
    trap([
      6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1,
      3,
    ]),
  ); // 83
  console.log(trap([6, 8, 5, 0, 0, 6, 5])); // 13
}
