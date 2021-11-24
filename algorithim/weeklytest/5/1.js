function solution(coins, m) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  dy[0] = 1;
  for (let x of coins) {
    for (let i = x; i <= m; i++) {
      dy[i] += dy[i - x];
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution([1, 2, 5], 10));
