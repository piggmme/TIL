// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  const productedAllIncludeZero = nums.reduce((acc, cur) => acc * cur, 1);

  const answer = [];
  for (const num of nums) {
    if (num === 0) answer.push(productedAll);
    else if (productedAllIncludeZero === 0) answer.push(0);
    else answer.push(productedAllIncludeZero / num);
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
