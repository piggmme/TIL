// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function (nums) {
  const setNum = new Set(nums);
  return setNum.size !== nums.length;
};
console.log(containsDuplicate([1, 2, 3, 1]));
