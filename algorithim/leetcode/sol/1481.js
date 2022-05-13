// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
// 1481. Least Number of Unique Integers after K Removals

{
  var findLeastNumOfUniqueInts = function (arr, k) {
    const nH = new Map();

    for (const num of arr) {
      nH.set(num, nH.get(num) + 1 || 1);
    }

    const sortedNum = [...nH].sort((a, b) => a[1] - b[1]);
    for (const [num, cnt] of sortedNum) {
      if (k >= cnt) {
        k -= cnt;
        nH.delete(num);
      } else {
        break;
      }
    }

    return nH.size;
  };
  console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
  console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
}
