// 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
// https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/

{
  const maxSideLength = (mat, threshold) => {
    let ans = 0,
      row = mat.length,
      col = mat[0].length,
      sum = Array.from({ length: row + 1 }, () => Array(col + 1).fill(0));

    for (let i = 1; i <= mat.length; i++) {
      for (let j = 1; j <= mat[0].length; j++) {
        sum[i][j] =
          sum[i][j - 1] + sum[i - 1][j] + mat[i - 1][j - 1] - sum[i - 1][j - 1];
        if (i > ans && j > ans)
          if (
            sum[i][j] +
              sum[i - ans - 1][j - ans - 1] -
              sum[i - ans - 1][j] -
              sum[i][j - ans - 1] <=
            threshold
          )
            ans++;
      }
    }

    return ans;
  };
  console.log(
    maxSideLength(
      [
        [1, 1, 3, 2, 4, 3, 2],
        [1, 1, 3, 2, 4, 3, 2],
        [1, 1, 3, 2, 4, 3, 2],
      ],
      4,
    ),
  );
  //   console.log(
  //     maxSideLength(
  //       [
  //         [18, 70],
  //         [61, 1],
  //         [25, 85],
  //         [14, 40],
  //         [11, 96],
  //         [97, 96],
  //         [63, 45],
  //       ],
  //       40184,
  //     ),
  //   );

  //   console.log(maxSideLength());
  //   console.log(maxSideLength());
}
