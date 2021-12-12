// 992. Subarrays with K Different Integers
// hard
// https://leetcode.com/problems/subarrays-with-k-different-integers/

// 지영님 풀이
{
  var subarraysWithKDistinct = function (nums, k) {
    const arrayChecker = n => {
      let left = 0;
      let unique = 0;
      let answer = 0;
      const map = new Map();
      for (let right = 0; right < nums.length; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        if (map.get(nums[right]) === 1) unique++;
        while (unique > n) {
          if (map.get(nums[left]) === 1) unique--;
          map.set(nums[left], (map.get(nums[left]) || 0) - 1);
          left++;
        }
        console.log(left, right, map);
        answer += right - left + 1;
      }
      console.log('---------------');
      return answer;
    };
    return arrayChecker(k) - arrayChecker(k - 1);
  };
  // console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
  console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3
}

{
  // answer += rt - lt + 1 => 누적하면 길이 1~n 까지의 수열의 부분잡합을 구할 수 있음
  const countSubArraySet = (nums, k) => {
    let lt = 0;
    const n = nums.length;
    for (let rt = 0; rt < n; rt++) {}
  };
  const subarraysWithKDistinct = (nums, k) => {
    return countSubArraySet(nums, k) - countSubArraySet(nums, k - 1);
  };
  // console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
  // console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3
}
