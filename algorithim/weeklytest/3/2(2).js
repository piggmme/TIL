// 숨바꼭질
// https://www.acmicpc.net/problem/17071
// https://engineering.linecorp.com/ko/blog/2019-firsthalf-line-internship-recruit-coding-test/

const solution = (s, e) => {
  function BFS() {
    let L = 1;
    const queue = [s];
    if (s === e) return 0;
    // const ch = Array.from({ length: 500001 }, (_, i) => [0, 0]);
    const ch = Array.from({ length: 500001 }, () => new Array(2).fill(0));
    ch[s][0] = 1;

    while (queue.length) {
      const len = queue.length;
      e += L;
      if (e > 500000) return -1;
      if (ch[e][L % 2]) return L;
      for (let i = 0; i < len; i++) {
        const cur = queue.shift();
        for (let next of [cur + 1, cur - 1, cur * 2]) {
          if (next === e) {
            return L;
          }
          if (next > 0 && next <= 500000 && ch[next][L % 2] === 0) {
            ch[next][L % 2] = 1;
            queue.push(next);
          }
        }
      }
      L++;
    }
  }

  let answer = BFS();
  return answer;
};

// console.log(solution(11, 2)); // 3
// console.log(solution(5, 6)); // 2
// console.log(solution(10, 3)); // 3
// console.log(solution(1, 11)); // 6
// console.log(solution(211, 1)); // 20 -> ch 배열 말고, Set을 사용해야함. 올바른 괄호만들기!

// 아래는 신경 안 써도 됨

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = '';
rl.on('line', line => {
  input += line;
  rl.close();
}).on('close', () => {
  let s = +input.split(' ')[0]; // 수빈이의 위치
  let e = +input.split(' ')[1]; // 동생의 위치

  console.log(solution(s, e));

  process.exit();
});
