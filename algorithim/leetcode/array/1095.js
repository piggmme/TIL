// https://leetcode.com/problems/find-in-mountain-array/
// 1095. Find in Mountain Array
{
  const findInMountainArray = function (target, mountainArr) {
    const top = () => {
      let lt = 0;
      let rt = mountainArr.length() - 1;
      while (lt <= rt) {
        const mid = Math.floor((lt + rt) / 2);
        if (
          mountainArr.get(mid - 1) < mountainArr.get(mid) &&
          mountainArr.get(mid) > mountainArr.get(mid + 1)
        )
          return mid;
        if (mountainArr.get(mid - 1) > mountainArr.get(mid)) {
          rt = mid;
        }
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
          lt = mid;
        }
      }
    };

    const peak = top();
    if (target > mountainArr.get(peak)) return -1;

    // binary search
    let lt = 0;
    let rt = peak;

    while (lt <= rt) {
      const mid = Math.ceil((lt + rt) / 2);
      if (mountainArr.get(mid) < target) {
        lt = mid + 1;
      } else if (mountainArr.get(mid) > target) {
        rt = mid - 1;
      } else if (mountainArr.get(mid) === target) {
        return mid;
      }
    }

    lt = peak;
    rt = mountainArr.length() - 1;

    while (lt <= rt) {
      const mid = Math.ceil((lt + rt) / 2);
      if (mountainArr.get(mid) > target) {
        lt = mid + 1;
      } else if (mountainArr.get(mid) < target) {
        rt = mid - 1;
      } else if (mountainArr.get(mid) === target) {
        return mid;
      }
    }

    return -1;
  };
  //   console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1]));
  //   console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1])); // 2
  //   console.log(findInMountainArray(3, [0, 1, 2, 4, 2, 1])); // -1
}
