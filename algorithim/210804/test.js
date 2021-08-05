{
  // 이분탐색
  function solution(nums, H) {
    let n = nums.length;
    let answer = 0;
    nums.sort((a, b) => b - a); // 내림차순
    let lt = 1,
      rt = nums[0];

    function count(h) {
      let cnt = 0;
      for (let x of nums) {
        if (x % h !== 0) {
          // 시간을 다 채우지 못하고 먹은 경우
          cnt += parseInt(x / h) + 1;
        } else {
          // 시간 안에 딱 떨어지게 먹은 경우
          cnt += parseInt(x / h);
        }
      }
      return cnt;
    }

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (count(mid) <= H) {
        answer = mid;
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
    }

    return answer;
  }
  // console.log(solution([29, 12, 24, 5, 19], 6)); // 최소값 K
}

{
  // 타일 점프
  function solution(nums) {
    let n = nums.length;
    let queue = [],
      L = 0;
    let ch = Array.from({ length: n }, () => 0);
    let flag = false;

    // 첫번째 타일
    queue.push(0); // 인덱스를 담을 것임.
    ch[0] = 1;

    function BFS() {
      while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
          let v = queue.shift();
          let arr = Array.from({ length: nums[v] }, (v, i) => i + 1); // +1, +2,..., +num[v]
          for (let nv of arr) {
            let cur = v + nv; // 현재 위치에서 이동 거리 더함
            if (cur === n - 1) {
              flag = true;
              return L + 1;
            }
            if (ch[cur] === 0 && cur < n) {
              // 방문하지 않았을 경우
              ch[cur] = 1;
              queue.push(cur);
            }
          }
        }
        L++;
      }
    }

    let answer = BFS();
    return flag === true ? answer : -1;
  }
  //   console.log(solution([2, 2, 0, 2, 1, 1])); // 3
  //   console.log(solution([1, 0, 1, 1, 3, 1, 2, 1])); // -1
}

{
  // 타일 점프
  function solution(nums) {
    let n = nums.length;
    let queue = [],
      L = 0;
    let ch = Array.from({ length: n }, () => 0);

    // 첫번째 타일
    queue.push(0); // 인덱스를 담을 것임.
    ch[0] = 1;

    function BFS() {
      while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
          let v = queue.shift();
          let arr = Array.from({ length: nums[v] }, (v, i) => i + 1); // +1, +2,..., +num[v]
          for (let nv of arr) {
            let cur = v + nv; // 현재 위치에서 이동 거리 더함
            if (cur === n - 1) {
              return L + 1;
            }
            if (ch[cur] === 0 && cur < n) {
              // 방문하지 않았을 경우
              ch[cur] = 1;
              queue.push(cur);
            }
          }
        }
        L++;
      }
    }

    let answer = BFS();
    return answer ? answer : -1; // 리턴값이 있으면 도착한것임.
  }
  // console.log(solution([2, 2, 0, 2, 1, 1])); // 3
  // console.log(solution([1, 0, 1, 1, 3, 1, 2, 1])); // -1
}
