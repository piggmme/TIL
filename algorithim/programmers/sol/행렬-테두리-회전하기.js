// https://programmers.co.kr/learn/courses/30/lessons/77485

{
  function solution(rows, columns, queries) {
    const answer = [];
    let num = 1;
    const grid = [...Array(rows)].map(() =>
      [...Array(columns)].map(() => num++),
    );

    for (let [x1, y1, x2, y2] of queries) {
      [x1, y1, x2, y2] = [x1 - 1, y1 - 1, x2 - 1, y2 - 1];

      let [x, y] = [x1, y1];
      const queue = [];

      for (; y < y2; y++) {
        queue.push(grid[x][y]);
      }

      for (; x < x2; x++) {
        queue.push(grid[x][y]);
      }

      for (; y > y1; y--) {
        queue.push(grid[x][y]);
      }

      for (; x > x1; x--) {
        queue.push(grid[x][y]);
      }

      queue.unshift(queue.pop());
      answer.push(Math.min(...queue));

      [x, y] = [x1, y1];

      for (; y < y2; y++) {
        grid[x][y] = queue.shift();
      }

      for (; x < x2; x++) {
        grid[x][y] = queue.shift();
      }

      for (; y > y1; y--) {
        grid[x][y] = queue.shift();
      }

      for (; x > x1; x--) {
        grid[x][y] = queue.shift();
      }
    }

    return answer;
  }
  console.log(
    solution(6, 6, [
      [2, 2, 5, 4],
      [3, 3, 6, 6],
      [5, 1, 6, 3],
    ]),
  ); // [8, 10, 25]
  //   console.log(
  //     solution(3, 3, [
  //       [1, 1, 2, 2],
  //       [1, 2, 2, 3],
  //       [2, 1, 3, 2],
  //       [2, 2, 3, 3],
  //     ]),
  //   );
  //   console.log(solution(100, 97, [[1, 1, 100, 97]]));
}
