// https://programmers.co.kr/learn/courses/30/lessons/17687
// [3차] n진수 게임

{
  function solution(n, t, m, p) {
    let answer = '';
    let cnt = 1;
    let num = 0;
    while (answer.length < t) {
      const nNum = num.toString(n).toUpperCase();

      for (let i = 0; i < nNum.length; i++) {
        if (cnt === p) answer += nNum[i];
        if (cnt === m) cnt = 0;
        cnt++;
      }
      num++;
    }
    return answer.slice(0, t);
  }
  console.log(solution(2, 4, 2, 1));
  console.log(solution(16, 16, 2, 1));
  console.log(solution(16, 16, 2, 2));
}
