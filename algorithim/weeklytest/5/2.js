function solution(coins, m) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  dy[0] = 1;
  for (let i = 1; i <= m; i++) {
    for (let x of coins) {
      if (i - x >= 0) dy[i] += dy[i - x];
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution([50, 20, 30, 70, 90], 1000));
