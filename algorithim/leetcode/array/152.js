// 152. Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/

// 연속 곱 구하기
{
  var maxProduct = function (nums) {
    let globalMax = nums[0];

    for (let i = 0; i < nums.length; i++) {
      let localMax = 1;
      for (let j = i; j < nums.length; j++) {
        localMax *= nums[j];
        globalMax = Math.max(localMax, globalMax);
      }
    }
    return globalMax;
  };
  console.log(maxProduct([2, 3, -2, 4]));
  console.log(maxProduct([-2, 0, -1]));
}

// DP ?
{
  var maxProduct = function (nums) {
    let maxGlobal = nums[0];
    let maxCur = nums[0];
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
      const tempMaxCur = nums[i] * maxCur;

      maxCur = Math.max(nums[i], nums[i] * min, tempMaxCur);
      min = Math.min(nums[i], nums[i] * min, tempMaxCur);
      maxGlobal = Math.max(maxCur, maxGlobal);
    }
    return maxGlobal;
  };
  //   console.log(maxProduct([2, 3, -2, 4]));
  //   console.log(maxProduct([-2, 0, -1]));
}
