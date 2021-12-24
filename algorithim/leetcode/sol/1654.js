// 1654. Minimum Jumps to Reach Home
// https://leetcode.com/problems/minimum-jumps-to-reach-home/

{
  var minimumJumps = function (forbidden, forward, back, home) {
    const visited = new Set(forbidden);
    const limit = 2000 + forward + back;
    const Q = [[0, false]];
    let jumps = 0;

    while (Q.length) {
      const len = Q.length;
      console.log(Q);

      for (let i = 0; i < len; i++) {
        const [curX, wasBack] = Q.shift();

        if (curX === home) return jumps;

        if (visited.has(curX)) continue;

        visited.add(curX);
        if (!wasBack) {
          const nextX = curX - back;
          if (nextX >= 0) Q.push([nextX, true]);
        }
        const nextX = curX + forward;
        if (nextX <= limit) Q.push([nextX, false]);
      }
      jumps++;
    }

    return -1;
  };
  //   console.log(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9)); // 3
  //   console.log(minimumJumps([8, 3, 16, 6, 12, 20], 15, 13, 11)); // -1
  //   console.log(minimumJumps([1, 6, 2, 14, 5, 17, 4], 16, 9, 7)); // 2
  //   console.log(minimumJumps([18, 13, 3, 9, 8, 14], 3, 8, 6)); // -1
  console.log(
    minimumJumps(
      [
        162, 118, 178, 152, 167, 100, 40, 74, 199, 186, 26, 73, 200, 127, 30,
        124, 193, 84, 184, 36, 103, 149, 153, 9, 54, 154, 133, 95, 45, 198, 79,
        157, 64, 122, 59, 71, 48, 177, 82, 35, 14, 176, 16, 108, 111, 6, 168,
        31, 134, 164, 136, 72, 98,
      ],
      29,
      98,
      80,
    ),
  ); // 121
}
