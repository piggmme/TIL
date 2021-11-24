// https://leetcode.com/problems/jump-game-iii/
// 1306. Jump Game III

// DFS
{
  const canReach = (arr, start) => {
    const ch = Array(arr.length).fill(false);
    const DFS = L => {
      if (ch[L]) return;

      ch[L] = true;
      DFS(L + arr[L]);
      DFS(L - arr[L]);
    };
    DFS(start);

    return !!arr.filter((el, i) => el === 0 && ch[i]).length;
  };
  console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5)); // true
  console.log(canReach([3, 0, 2, 1, 2], 2));
  console.log(canReach([0, 3, 0, 6, 3, 3, 4], 6));
}

// my sol
{
  const canReach = (arr, start) => {
    const n = arr.length;
    const queue = [start];
    const ch = Array(n).fill(0);

    while (queue.length) {
      const idx = queue.shift();
      if (arr[idx] === 0) return true;
      if (ch[idx + arr[idx]] === 2) continue;
      if (idx + arr[idx] < n) {
        queue.push(idx + arr[idx]);
        ch[idx + arr[idx]] += 1;
      }
      if (idx - arr[idx] >= 0) {
        queue.push(idx - arr[idx]);
        ch[idx - arr[idx]] += 1;
      }
    }
    return false;
  };

  //   console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5)); // true
  //   console.log(canReach([3, 0, 2, 1, 2], 2));
}
