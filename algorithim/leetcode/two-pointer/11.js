// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
{
  const maxArea = height => {
    let max = Number.MIN_SAFE_INTEGER;

    let lt = 0,
      rt = height.length - 1;
    while (lt <= rt) {
      const area = (rt - lt) * Math.min(height[rt], height[lt]);
      max = Math.max(max, area);
      if (height[lt] < height[rt]) lt += 1;
      else rt -= 1;
    }
    return max;
  };
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
  console.log(maxArea([4, 3, 2, 1, 4]));
  console.log(maxArea([1, 2, 1]));
  console.log(maxArea([1, 3, 2, 5, 25, 24, 5])); // 24
}
