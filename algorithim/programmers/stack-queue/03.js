// 기능 개발
// 스택, 큐
// https://programmers.co.kr/learn/courses/30/lessons/42586
{
  function solution(progresses, speeds) {
    let answer = [];
    while (progresses.length) {
      // 날마다 진도 나감
      for (let i = 0; i < speeds.length; i++) {
        progresses[i] += speeds[i];
      }
      // 만약 idx = 0 이 100% 이상을 도달했다면 shift
      let cnt = 0;
      while (progresses[0] >= 100) {
        cnt++;
        progresses.shift();
        speeds.shift();
      }
      if (cnt !== 0) answer.push(cnt);
    }
    return answer;
  }
  // console.log(solution([93, 30, 55], [1, 30, 5])); // 	[2, 1]
  console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
}
