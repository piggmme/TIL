// 169. Majority Element
// https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// O(n)
{
  var majorityElement = function (nums) {
    const hash = new Map();

    for (const num of nums) {
      hash.set(num, hash.get(num) + 1 || 1);
    }

    let cnt = 0;
    let answer = 0;
    for (const [key, value] of [...hash]) {
      if (cnt < value) {
        cnt = value;
        answer = key;
      }
    }
    return answer;
  };
  console.log(majorityElement([3, 2, 3])); // 3
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
}
