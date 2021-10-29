// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  const left = Array(nums.length).fill(1);
  const right = Array(nums.length).fill(1);
  const answer = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
    const j = nums.length - i - 1;
    right[j] = right[j + 1] * nums[j + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
