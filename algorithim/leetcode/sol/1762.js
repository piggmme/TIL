function solution(heights) {
  const n = heights.length;
  const answer = [];
  let max = 0;
  for (let i = n; i >= 0; i--) {
    if (max < heights[i]) {
      max = Math.max(max, heights[i]);
      answer.push(i);
    }
  }
  return answer.reverse();
}
console.log(solution([4, 2, 3, 1])); // [0,2,3]
console.log(solution([4, 3, 2, 1])); // [0,1,2,3]
console.log(solution([1, 3, 2, 4])); // [3]
