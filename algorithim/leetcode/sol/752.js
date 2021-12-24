// 752. Open the Lock
// https://leetcode.com/problems/open-the-lock/

{
  const getCombinations = comb => {
    const ans = [];
    for (let i = 0; i < comb.length; i++) {
      ans.push(comb.slice(0, i) + ((+comb[i] + 1) % 10) + comb.slice(i + 1));
      ans.push(comb.slice(0, i) + ((+comb[i] + 9) % 10) + comb.slice(i + 1));
    }
    return ans;
  };
  var openLock = function (deadends, target) {
    const dead = new Set(deadends);
    let queue = ['0000'];
    const seen = new Set(['0000']);
    let turns = 0;

    while (queue.length) {
      const next = [];
      for (const comb of queue) {
        if (comb === target) return turns;
        if (dead.has(comb)) continue;
        for (const c of getCombinations(comb)) {
          if (seen.has(c)) continue;
          seen.add(c);
          next.push(c);
        }
      }
      turns++;
      queue = next;
    }

    return -1;
  };
  console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202')); // 6
  // console.log(openLock(['8888'], '0009')); // 1
  // console.log(
  //   openLock(
  //     ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
  //     '8888',
  //   ),
  // ); // -1
  // console.log(openLock(['0000'], '8888')); // -1
}

{
  var openLock = function (deadends, target) {
    const targetArr = target.split('');
    const dead = new Set(deadends);
    const seen = new Set(['0000']);
    let state = '0000';

    if (dead.has('0000')) return -1;

    const Q = [state];

    function BFS() {
      let L = 0;
      while (Q.length) {
        const len = Q.length;
        for (let i = 0; i < len; i++) {
          const curState = Q.shift();
          for (let j = 0; j < 4; j++) {
            // +1
            let temp = curState.split('').slice();
            temp[j] = temp[j] === '9' ? 0 : +temp[j] + 1;
            let str = temp.join('');
            if (str === target) return L + 1;
            if (seen.has(str)) continue;
            if (!dead.has(str)) {
              Q.push(str);
              seen.add(str);
            }

            // -1
            temp = curState.split('').slice();
            temp[j] = temp[j] === '0' ? 9 : temp[j] - 1;
            str = temp.join('');
            if (str === target) return L + 1;
            if (seen.has(str)) continue;
            if (!dead.has(str)) {
              Q.push(str);
              seen.add(str);
            }
          }
        }
        L++;
      }
      return -1;
    }
    return BFS(0);
  };
  // console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202')); // 6
  // console.log(openLock(['8888'], '0009')); // 1
  // console.log(
  //   openLock(
  //     ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
  //     '8888',
  //   ),
  // ); // -1
  // console.log(openLock(['0000'], '8888')); // -1
}
