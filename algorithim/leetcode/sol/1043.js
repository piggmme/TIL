// 1043. Partition Array for Maximum Sum
// https://leetcode.com/problems/partition-array-for-maximum-sum/

// DP
{
  var maxSumAfterPartitioning = function (arr, k) {
    const n = arr.length;
    const dy = Array(n).fill(0);
    dy[0] = arr[0];

    for (let i = 1; i < n; i++) {
      curMaxInPartition = 0;
      for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
        curMaxInPartition = Math.max(curMaxInPartition, arr[i - j + 1]);
        dy[i] = Math.max(
          dy[i],
          (i < k ? 0 : dy[i - j]) + j * curMaxInPartition,
        );
      }
    }
    return dy[n - 1];
  };
  console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)); // 84
  console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)); // 83
  console.log(maxSumAfterPartitioning([1], 1)); // 1
  console.log(
    maxSumAfterPartitioning(
      [
        20779, 436849, 274670, 543359, 569973, 280711, 252931, 424084, 361618,
        430777, 136519, 749292, 933277, 477067, 502755, 695743, 413274, 168693,
        368216, 677201, 198089, 927218, 633399, 427645, 317246, 403380, 908594,
        854847, 157024, 719715, 336407, 933488, 599856, 948361, 765131, 335089,
        522119, 403981, 866323, 519161, 109154, 349141, 764950, 558613, 692211,
      ],
      26,
    ),
  ); // 42389649
}

// DFS 매우 느림
{
  var maxSumAfterPartitioning = function (arr, k) {
    const n = arr.length;
    let answer = 0;

    function DFS(start, sum) {
      if (start >= n) {
        answer = Math.max(answer, sum);
        return;
      }
      for (let i = start + 1; i <= n && i <= start + k; i++) {
        const part = arr.slice(start, i);
        DFS(i, sum + Math.max(...part) * (i - start));
      }
    }
    DFS(0, 0);

    return answer;
  };
  // console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)); // 84
  // console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)); // 83
  // console.log(maxSumAfterPartitioning([1], 1)); // 1
  // console.log(
  //   maxSumAfterPartitioning(
  //     [
  //       20779, 436849, 274670, 543359, 569973, 280711, 252931, 424084, 361618,
  //       430777, 136519, 749292, 933277, 477067, 502755, 695743, 413274, 168693,
  //       368216, 677201, 198089, 927218, 633399, 427645, 317246, 403380, 908594,
  //       854847, 157024, 719715, 336407, 933488, 599856, 948361, 765131, 335089,
  //       522119, 403981, 866323, 519161, 109154, 349141, 764950, 558613, 692211,
  //     ],
  //     26,
  //   ),
  // );
}
