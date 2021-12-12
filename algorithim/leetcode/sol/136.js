// https://leetcode.com/problems/single-number/

// XOR
// - 두쌍씩 같은게 나오는 전제 때문에 가능함.
// - 같은것끼리 XOR 하면 상쇄되어 사라짐.
{
  var singleNumber = function (nums) {
    if (nums.length == 1) return nums[0];
    xor = nums[0];
    for (i = 1; i < nums.length; i++) {
      xor ^= nums[i];
      //   console.log(xor);
    }

    return xor;
  };
  console.log(singleNumber([5, 1, 1, 1]));
}

// mysol => hash
{
  var singleNumber = function (nums) {
    const singles = new Set();

    for (const num of nums) {
      if (!singles.has(num)) singles.add(num);
      else singles.delete(num);
    }

    return [...singles][0];
  };
  //   console.log(singleNumber([2, 2, 1]));
  //   console.log(singleNumber([4, 1, 2, 2, 1]));
}
