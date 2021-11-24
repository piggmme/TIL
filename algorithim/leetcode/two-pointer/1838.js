// https://leetcode.com/problems/frequency-of-the-most-frequent-element/
// 1838. Frequency of the Most Frequent Element
{
  const maxFrequency = (nums, k) => {
    nums.sort((a, b) => a - b);

    let left = 0;
    let max = 0;
    let curr = 0;
    for (let rt = 0; rt < nums.length; rt++) {
      curr += nums[rt];
      while ((rt - left + 1) * nums[rt] > curr + k) {
        curr -= nums[left++];
      }
      max = Math.max(max, rt - left + 1);
    }
    return max;
  };
  console.log(maxFrequency([1, 2, 4], 5));
  console.log(maxFrequency([1, 4, 8, 13], 5));
}

{
  const maxFrequency = (nums, k) => {
    nums.sort((a, b) => a - b);

    let lt = 0;
    let max = 0;
    let total = 0;

    for (let rt = 0; rt < nums.length; rt++) {
      total += nums[rt];
      while ((rt - lt + 1) * nums[rt] > total + k) {
        total -= nums[lt++];
      }
      max = Math.max(max, rt - lt + 1);
    }
    return max;
  };
  console.log(maxFrequency([1, 2, 4], 5));
  console.log(maxFrequency([1, 4, 8, 13], 5));
}
