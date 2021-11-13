// 구간합 구하기
// https://www.acmicpc.net/problem/2042
{
  function solution(nums, order) {
    let answer = [];
    const n = nums.length;
    let totalN = 1;

    let s = 1;
    while (s <= n) {
      s *= 2;
      totalN += s;
    }

    const indexTree = Array(totalN + 1).fill(0);

    for (let i = 0; i < n; i++) {
      indexTree[s + i] = nums[i];
    }

    for (let i = s - 1; i > 0; i--) {
      indexTree[i] = indexTree[i * 2] + indexTree[i * 2 + 1];
    }

    const update = (idx, val) => {
      const sub = val - indexTree[idx];
      while (idx > 0) {
        indexTree[idx] += sub;
        idx = Math.floor(idx / 2);
      }
    };

    const get = (start, end) => {
      let sum = 0;
      while (start <= end) {
        if (start % 2 === 1) sum += indexTree[start];
        if (end % 2 === 0) sum += indexTree[end];
        start = Math.floor((start + 1) / 2);
        end = Math.floor((end - 1) / 2);
      }

      return sum;
    };

    for (const [op, a, b] of order) {
      if (op === 1) update(a + s - 1, b);
      if (op === 2) answer.push(get(a + s - 1, b + s - 1));
    }

    console.log(indexTree);
    return answer;
  }

  // [a,b,c] => a = 1 ? b = c
  // [a,b,c] => a = 2 ? b ~ c 사이의 합
  console.log(
    solution(
      [1, 2, 3, 4, 5],
      [
        [1, 3, 6],
        [2, 2, 5],
        [1, 5, 2],
        [2, 3, 5],
      ],
    ),
  );
}
