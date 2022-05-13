// 1877. Minimize Maximum Pair Sum in Array
// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/

{
  var minPairSum = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let answer = 0;

    let lt = 0;
    let rt = n - 1;
    while (lt <= rt) {
      answer = Math.max(answer, nums[lt] + nums[rt]);
      lt++;
      rt--;
    }
    return answer;
  };
  console.log(minPairSum([3, 5, 2, 3])); // 7
}
