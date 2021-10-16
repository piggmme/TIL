// 순위
// https://programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
  const victory = Array(n + 1)
    .fill()
    .map(a => Array(n + 1).fill(0));

  for (const [win, lose] of results) {
    victory[win][lose] = 1;
  }

  // 서로 간의 승리를 저장함.
  for (let l = 1; l <= n; l++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === j) continue;
        if (victory[i][j]) {
          for (let k = 1; k <= n; k++) {
            if (victory[j][k]) {
              victory[i][k] = 1;
            }
          }
        }
      }
    }
  }

  // 등수의 범위 front ~ end 가 하나로 좁혀지면 답이 가능하다.
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let front = 1,
      end = n;
    end -= victory[i].reduce((acc, cur) => acc + cur, 0);
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      if (victory[j][i]) front++;
    }
    if (front === end) answer++;
  }

  return answer;
}
console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ]),
); // 2
console.log(
  solution(5, [
    [1, 2],
    [4, 5],
    [3, 4],
    [2, 3],
  ]),
); // 5
console.log(
  solution(5, [
    [1, 4],
    [4, 2],
    [2, 5],
    [5, 3],
  ]),
); // 5
