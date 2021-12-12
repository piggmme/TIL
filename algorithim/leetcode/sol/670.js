// 670. Maximum Swap
// https://leetcode.com/problems/maximum-swap/
var maximumSwap = function (num) {
  const nums = [...(num + '')];
  const sorted = nums.slice().sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === sorted[i]) continue;
    else {
      const idx = nums.lastIndexOf(sorted[i]);
      const temp = nums[idx];
      nums[idx] = nums[i];
      nums[i] = temp;
      break;
    }
  }
  return nums.join('');
};
console.log(maximumSwap(2736)); //7236
console.log(maximumSwap(9973)); // 9973
console.log(maximumSwap(98368)); // 98863
