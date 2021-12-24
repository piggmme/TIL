// 1
function solution(nums) {
  let left = [nums[0]];

  let i;
  for (i = 1; i < nums.length; i++) {
    const right = nums.slice(i);
    const leftMax = Math.max(...left);
    const rightMin = Math.min(...right);

    if (leftMax > rightMin) {
      left.push(nums[i]);
    } else break;
  }
  return i;
}

console.log(solution([5, 0, 3, 8, 6])); // 3
console.log(solution([1, 1, 1, 0, 6, 12])); // 4
