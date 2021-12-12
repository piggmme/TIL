// 845. Longest Mountain in Array
// https://leetcode.com/problems/longest-mountain-in-array

{
  function longestMountain(arr) {
    let answer = 0;
    let n = arr.length;
    let dist = Array(n).fill(0);
    let ch = Array(n).fill(0);

    let d = 1;
    ch[0] = ch[n - 1] = 1;
    for (let rt = 1; rt < n; rt++) {
      if (arr[rt] > arr[rt - 1]) {
        d += 1;
        dist[rt] += d;
      } else {
        d = 1;
        ch[rt] = 1;
      }
    }
    d = 1;

    for (let lt = n - 2; lt > 0; lt--) {
      if (arr[lt] > arr[lt + 1]) {
        d += 1;
        dist[lt] += d;
      } else {
        d = 1;
        ch[lt] = 1;
      }
    }

    for (let i = 0; i < n; i++) {
      if (!ch[i] && answer < dist[i] - 1) answer = dist[i] - 1;
    }

    return answer;
  }
  console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // 5
  console.log(longestMountain([2, 2, 2])); // 0
}

{
  function longestMountain(arr) {
    let answer = 0;
    let n = arr.length;
    let dist = Array.from({ length: n }, () => 0);
    let ch = Array.from({ length: n }, () => 0);
    ch[0] = 1;
    let d = 1;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] < arr[i]) {
        d++;
        dist[i] = d;
      } else {
        d = 1;
        ch[i] = 1;
      }
    }
    d = 1;
    ch[n - 1] = 1;

    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[i + 1]) {
        d++;
        dist[i] += d;
      } else {
        d = 1;
        ch[i] = 1;
      }
    }
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0 && dist[i] - 1 > answer) {
        answer = dist[i] - 1;
      }
    }

    return answer;
  }
  // console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // 5
  // console.log(longestMountain([2, 2, 2])); // 0
}

{
  const longestMountain = arr => {
    const n = arr.length;
    let answer = [];
    const up = new Map(); // up[edge idx] = start idx
    const down = new Map(); // down[edge idx] = end idx
    let flag = false;

    let lt = 0;
    let rt = 0;
    for (rt = 0; rt < n - 1; rt++) {
      if (arr[rt] < arr[rt + 1]) {
        flag = true;
      } else {
        if (flag) {
          up.set(rt, lt);
          flag = false;
        }
        lt = rt + 1;
      }
    }
    if (flag) up.set(rt, lt);

    rt = n - 1;
    flag = false;
    for (lt = n - 2; lt >= 0; lt--) {
      if (arr[lt] > arr[lt + 1]) {
        flag = true;
      } else {
        if (flag) {
          down.set(lt + 1, rt);
          flag = false;
        }
        rt = lt;
      }
    }
    if (flag) down.set(lt + 1, rt);

    for (const [edge, start] of up) {
      if (
        down.has(edge) &&
        answer.length < arr.slice(start, down.get(edge) + 1).length
      ) {
        answer = arr.slice(start, down.get(edge) + 1);
      }
    }

    return answer.length;
  };

  // console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // [1,4,7,3,2]
  // console.log(longestMountain([2, 2, 2])); //
}

{
  const longestMountain = arr => {
    const n = arr.length;
    let answer = [];
    const up = new Map(); // up[edge idx] = start idx
    const down = new Map(); // down[edge idx] = end idx
    let temp = [];

    let lt = 0;
    let rt = 0;
    for (rt = 0; rt < n - 1; rt++) {
      if (arr[rt] < arr[rt + 1]) {
        temp.push(arr[rt]);
      } else {
        if (temp.length) {
          temp.push(arr[rt]);
          up.set(rt, lt);
          temp = [];
        }
        lt = rt + 1;
      }
    }
    if (temp.length) up.set(rt, lt);

    rt = n - 1;
    temp = [];
    for (lt = n - 2; lt >= 0; lt--) {
      if (arr[lt] > arr[lt + 1]) {
        temp.push(arr[lt + 1]);
      } else {
        if (temp.length) {
          down.set(lt + 1, rt);
          temp = [];
        }
        rt = lt;
      }
    }
    if (temp.length) down.set(lt + 1, rt);

    for (const [edge, start] of up) {
      if (
        down.has(edge) &&
        answer.length < arr.slice(start, down.get(edge) + 1).length
      ) {
        answer = arr.slice(start, down.get(edge) + 1);
      }
    }

    return answer.length;
  };

  // console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // [1,4,7,3,2]
  // console.log(longestMountain([2, 2, 2])); //
}
