// https://leetcode.com/problems/climbing-stairs/
var climbStairs = function (n) {
  const dy = Array(n + 1).fill(0);
  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;

  if (n >= 3) {
    for (let i = 3; i <= n; i++) {
      dy[i] += dy[i - 1] + dy[i - 2];
    }
  }

  return dy[n];
};
console.log(climbStairs(3));
