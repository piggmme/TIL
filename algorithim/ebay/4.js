function solution(n, k, bulbs) {
  const hash = {
    0: 1,
    1: 2,
    2: 0,
  };

  let bulbsNum = [];
  for (const char of bulbs) {
    bulbsNum.push(char === 'R' ? 0 : char === 'G' ? 1 : 2);
  }

  function BFS() {
    const Q = [bulbsNum];
    while (Q.length) {
      const bulbsNum = Q.shift();
    }
  }
}
console.log(solution(6, 3, 'RBGRGB')); // 3
