// H-index
// https://programmers.co.kr/learn/courses/30/lessons/42747
{
  function solution(citations) {
    let max_used = Math.max(...citations);
    let answer = 0;

    for (let h = 0; h <= max_used; h++) {
      let used_paper = citations.filter((a) => a >= h).length;
      let unused_paper = citations.filter((a) => a <= h).length;
      if (used_paper >= h && unused_paper <= h) answer = h;
    }
    return answer;
  }
  console.log(solution([3, 0, 6, 1, 5])); // 3
  console.log(solution([0, 0, 1, 1, 1])); // 0
  console.log(solution([31, 66])); // 2
}
