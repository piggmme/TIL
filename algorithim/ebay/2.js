{
  function solution(stones, k) {
    let zero = stones.filter(stone => stone === 0).length;
    let len = stones.length;
    const tempIdx = [];
    const answers = [];

    // 중복 순열
    function DFS(zero) {
      console.log({ zero, stones, tempIdx });
      if (zero === len - 1) {
        if (stones.find(stone => stone !== 0) === k) {
          // console.log(tempIdx);
          answers.push(tempIdx.slice());
        }
        return;
      }
      if (zero > 1) return;

      for (let i = 0; i < len; i++) {
        if (zero > 1) break;
        if (zero === 1) {
          const zeroIdx = stones.findIndex(stone => stone === 0);
          if (zeroIdx !== i) continue;
        }
        for (let j = 0; j < len; j++) {
          if (j !== i) {
            stones[j] -= 1;
            if (stones[j] === 0) zero++;
          }
        }
        stones[i] += 1;
        tempIdx.push(i);

        DFS(zero);

        tempIdx.pop();
        stones[i] -= 1;
        for (let j = 0; j < len; j++) {
          if (j !== i) {
            if (stones[j] === 0) zero--;
            stones[j] += 1;
          }
        }
      }
    }

    DFS(zero);
    console.log(answers);

    return answers.length ? answers.sort().pop().join('') : -1;
  }
  // console.log(solution([1, 3, 2], 3)); // 202
  //   console.log(solution([4, 2, 2, 1, 4], 1)); // 3213
  // console.log(solution([5, 7, 2, 4, 9], 20)); // -1
}

{
  function solution(stones, k) {
    function BFS(stones, num, zero) {
      console.log({ stones, num, zero });
      let Q = [[num, stones, zero, []]];
      const indexs = [];

      while (Q.length) {
        let [num, stones, zero, tempIdx] = Q.shift();
        if (zero === stones.length - 1) {
          if (stones.find(stone => stone !== 0) === k) {
            indexs.push(tempIdx.slice());
          }
        }

        if (zero > 1) continue;
        if (zero === 1) {
          const zeroIdx = stones.findIndex(stone => stone === 0);
          if (zeroIdx !== num) continue;
        }

        tempIdx.push(num);
        for (let j = 0; j < stones.length; j++) {
          if (j !== num) {
            stones[j] -= 1;
            if (stones[j] === 0) zero++;
          }
        }
        stones[num] += 1;

        for (let i = 0; i < stones.length; i++)
          Q.push([i, stones, zero, tempIdx]);
      }
    }

    const zero = stones.filter(stone => stone === 0).length;
    let answers = [];
    for (let i = 0; i < stones.length; i++) {
      answers.push(BFS(stones, i, zero));
    }

    console.log(answers);

    return answers.length ? answers.sort().pop().join('') : -1;
  }
  // console.log(solution([1, 3, 2], 3)); // 202
  console.log(solution([4, 2, 2, 1, 4], 1)); // 3213
  // console.log(solution([5, 7, 2, 4, 9], 20)); // -1
}
