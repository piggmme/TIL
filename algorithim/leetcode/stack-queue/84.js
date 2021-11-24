// https://leetcode.com/problems/largest-rectangle-in-histogram/
// https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/1430546/Monotonique-Stack-Solution-Intuition-(Javascript)
// 84. Largest Rectangle in Histogram

{
  const largestRectangleArea = heights => {
    heights.push(0);
    let answer = 0;
    const stack = [];

    for (let i = 0; i < heights.length; i++) {
      let start = i;

      while (stack.length && heights[i] < stack[stack.length - 1][1]) {
        const [pos, height] = stack.pop();
        answer = Math.max(answer, (i - pos) * height);
        start = pos;
      }

      stack.push([start, heights[i]]);
    }

    return answer;
  };
  console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
  //   console.log(largestRectangleArea([2, 4]));
}
