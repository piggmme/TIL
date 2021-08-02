{
  function solution(n) {
    const num = n;
    let arr = [];
    let answer = Number.MAX_SAFE_INTEGER;
    // 숫자 쪼개기
    while (n > 0) {
      arr.push(n % 10);
      n = parseInt(n / 10);
    }

    // 쪼갠 숫자를 재귀로 조합하여 큰 수를 만들기
    // 중복 X, 순서 O => 순열
    let len = arr.length;
    let ch = Array.from({ length: len }, () => 0);
    let flag = false;
    let tmp = [];

    function DFS(L) {
      if (L === len) {
        let sum = tmp.reduce((acc, cur) => acc * 10 + cur, 0);
        if (sum > num) {
          flag = true;
          answer = Math.min(sum, answer);
        }
      } else {
        for (let i = 0; i < len; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            tmp.push(arr[i]);
            DFS(L + 1);
            tmp.pop(arr[i]);
            ch[i] = 0;
          }
        }
      }
    }
    DFS(0);
    if (flag) return answer;
    else return -1;
  }
  //   console.log(solution(123)); // 132
  //   console.log(solution(321)); // -1
  //   console.log(solution(20573)); // 20735
}

// sol2)
{
  function solution(n) {
    const num = n;
    let arr = [];
    let answer = Number.MAX_SAFE_INTEGER;
    // 숫자 쪼개기
    while (n > 0) {
      arr.push(n % 10);
      n = parseInt(n / 10);
    }

    // 쪼갠 숫자를 재귀로 조합하여 큰 수를 만들기
    // 중복 X, 순서 O => 순열
    let len = arr.length;
    let ch = Array.from({ length: len }, () => 0);
    let flag = false;
    let tmp = [];

    function DFS(L, sum) {
      if (L === len) {
        if (sum > num) {
          flag = true;
          answer = Math.min(sum, answer);
        }
      } else {
        for (let i = 0; i < len; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            DFS(L + 1, sum * 10 + arr[i]);
            ch[i] = 0;
          }
        }
      }
    }
    DFS(0, 0);
    if (flag) return answer;
    else return -1;
  }
  console.log(solution(123)); // 132
  console.log(solution(321)); // -1
  console.log(solution(20573)); // 20735
  console.log(solution(53421)); // 54123
}
