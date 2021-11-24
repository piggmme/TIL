// https://leetcode.com/problems/single-element-in-a-sorted-array/
// 540. Single Element in a Sorted Array
{
  const singleNonDuplicate = nums => {
    let lt = 0,
      rt = nums.length - 1;

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      const first = nums[mid - 1];
      const second = nums[mid];
      const third = nums[mid + 1];
      if (first === second) {
        if ((mid - 1) % 2 === 1) {
          // 홀 => 한개 이후
          rt = mid - 1;
        } else {
          // 짝 => 한개 이전
          lt = mid + 1;
        }
      }
      if (second === third) {
        if (mid % 2 === 1) {
          // 홀 => 한개 이후
          rt = mid - 1;
        } else {
          // 짝 => 한개 이전
          lt = mid + 1;
        }
      }
      if (first != second && second != third) {
        return nums[mid];
      }
    }
  };
  console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
  console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
}
