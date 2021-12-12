// https://leetcode.com/problems/move-zeroes/

// 부수효과 발생시켰을 경우에... 배열 순회하는 방법
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  console.log(nums);
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
