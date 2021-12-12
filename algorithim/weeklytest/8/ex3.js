// https://leetcode.com/problems/longest-palindromic-subsequence/

// 2차원 DP
{
  var longestPalindromeSubseq = function (s) {
    const dy = Array.from(Array(s.length + 1), () =>
      Array(s.length + 1).fill(0),
    );

    for (let i = 1; i <= s.length; i++) dy[i][i] = 1;

    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j < s.length; j++) {
        if (s[j - 1] === s[j + i - 1]) dy[j][j + i] = dy[j + 1][j + i - 1] + 2;
        else {
          dy[j][j + i] = Math.max(dy[j][j + i - 1], dy[j + 1][j + i]);
        }
      }
    }
    return dy[1][s.length];
  };
  console.log(longestPalindromeSubseq('bbaccb')); //4
  //   console.log(longestPalindromeSubseq('bbbab')); //4
  //   console.log(longestPalindromeSubseq('cbbd')); //2
}
