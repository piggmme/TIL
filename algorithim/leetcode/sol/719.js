// https://leetcode.com/problems/find-k-th-smallest-pair-distance
// 719. Find K-th Smallest Pair Distance

// binary search
{
  const smallestDistancePair = (nums, k) => {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    const countSmallDistance = mid => {
      let cnt = 0;
      for (let lt = 0; lt < n; lt++) {
        for (let rt = lt + 1; rt < n; rt++) {
          if (nums[rt] - nums[lt] < mid) cnt++;
        }
      }
      return cnt;
    };

    // binary search
    let lt = 0,
      rt = 1000000;
    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      const cntLessThanMeIncludeMe = countSmallDistance(mid + 1);
      const cntLessThanMe = countSmallDistance(mid);

      if (cntLessThanMeIncludeMe >= k && cntLessThanMe < k) {
        return mid;
      }
      if (cntLessThanMeIncludeMe < k) {
        lt = mid + 1;
      }
      if (cntLessThanMe >= k) {
        rt = mid - 1;
      }
    }
  };
  //   console.log(smallestDistancePair([62, 100, 4], 2)); // 58
  //   console.log(smallestDistancePair([1, 1, 1], 2)); // 0
  //   console.log(smallestDistancePair([1, 6, 1], 3)); // 5
  //   console.log(smallestDistancePair([1, 3, 1], 1)); // 0
}

// DFS => 메모리 초과
{
  const smallestDistancePair = (nums, k) => {
    const n = nums.length;
    const dist = [];
    const temp = [];
    nums.sort((a, b) => a - b);

    const DFS = (L, s) => {
      if (L === 2) {
        dist.push(Math.abs(temp[0] - temp[1]));
        return;
      }
      for (let i = s; i < n; i++) {
        temp.push(nums[i]);
        DFS(L + 1, i + 1);
        temp.pop();
      }
    };
    DFS(0, 0);
    return dist.sort((a, b) => a - b)[k - 1];
  };
  //   console.log(smallestDistancePair([62, 100, 4], 2)); // 58
  //   console.log(smallestDistancePair([1, 3, 1], 1)); // 0
}

// 반복문 => 런타임 에러남.
{
  const smallestDistancePair = (nums, k) => {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    const temp = [];

    for (let lt = 0; lt < n; lt++) {
      for (let rt = lt + 1; rt < n; rt++) {
        temp.push(nums[rt] - nums[lt]);
      }
    }

    temp.sort((a, b) => a - b);

    return temp[k - 1];
  };
  console.log(smallestDistancePair([62, 100, 4], 2)); // 58
  console.log(smallestDistancePair([1, 1, 1], 2)); // 0
  console.log(smallestDistancePair([1, 6, 1], 3)); // 5
  console.log(smallestDistancePair([1, 3, 1], 1)); // 0
}
