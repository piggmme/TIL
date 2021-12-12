function solution(w, h, t, s, points) {
  let answer = 0;

  const cntTree = (i, j) => {
    let cnt = 0;
    for (const [x, y] of points) {
      if (x <= i && x >= i - s && y <= j && y >= j - s) {
        cnt++;
      }
    }
    return cnt;
  };

  for (const [x, y] of points) {
    for (let i = 0; i <= s; i++) {
      for (let j = 0; j <= s; j++) {
        if (x + i <= w && y + j <= h) {
          answer = Math.max(answer, cntTree(x + i, x + j));
        }
      }
    }
  }
  return answer;
}
console.log(
  solution(10, 9, 8, 3, [
    [3, 4],
    [6, 3],
    [5, 7],
    [6, 6],
    [9, 5],
    [6, 9],
    [7, 8],
    [8, 9],
  ]),
);
