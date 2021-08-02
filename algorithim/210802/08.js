// 8. 순열 구하기 => 한번 뽑은 애는 다시 뽑지않게.. (오늘 문제!! 순열!!)
// 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합
// 니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=10)개의 자연수가 오름차순으로 주어집니다.
// 매개변수 m에 M(2<=M<=N)이 주어집니다.
// ▣ 출력설명
// 중복순열의 결과를 배열형태로 반환합니다.
// ▣ 매개변수 형식 1
// [3, 6, 9], 2
// ▣ 반환값 형식 1
// [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]

// Sol)
{
  function solution(nums, m) {
    let answer = [],
      tmp = [];
    let n = nums.length;
    let ch = Array.from({ length: n }, () => 0);

    function DFS(L) {
      if (L === m) {
        answer.push(tmp.slice());
      } else {
        for (let i = 0; i < n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1; // 숫자 뽑았다.
            tmp.push(nums[i]);
            DFS(L + 1);
            tmp.pop();
            ch[i] = 0; // 숫자 안뽑았다.
          }
        }
      }
    }
    DFS(0);
    return answer;
  }
  //console.log(solution([3, 6, 9], 2));
  //[[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]
}

// 1~n까지 순열로 뽑기
{
  function solution(n, m) {
    let answer = [];
    let ch = Array.from({ length: n + 1 }, () => 0);
    let tmp = [];
    function DFS(L) {
      if (L === m) {
        answer.push(tmp.slice());
      } else {
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1; // 숫자 뽑았다.
            tmp.push(i);
            DFS(L + 1);
            tmp.pop();
            ch[i] = 0; // 숫자 안뽑았다.
          }
        }
      }
    }
    DFS(0);
    return answer;
  }
  // console.log(solution(3, 2));
}

// mytry)
{
  function solution(n, m) {
    let answer = [];
    let tmp = [];
    let ch = Array.from({ length: n + 1 }, () => 0);

    function DFS(L) {
      if (L === m) {
        answer.push(tmp.slice());
      } else {
        // n개의 숫자중 하나를 골라.
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            tmp.push(i);
            DFS(L + 1);
            tmp.pop();
            ch[i] = 0;
          } // else return; // 이거 왜 안되지...
        }
      }
    }
    DFS(0);
    return answer;
  }
  //console.log(solution(3, 2));
}
