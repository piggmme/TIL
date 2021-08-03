// 13. 이진트리 레벨탐색(넓이우선탐색 : BFS)
// 아래 그림과 같은 이진트리를 큐(Queue) 자료구조를 이용해 레벨탐색을 해보세요
// 레벨탐색 출력 : 1 2 3 4 5 6 7
// 아래 코드는 Queue 자료구조를 이용해 위에 트리를 레벨탐색한 코드입니다. 스스로 분석해
// 보세요.
{
  function solution() {
    let answer = "";
    function BFS() {
      let queue = [];
      queue.push(1);
      while (queue.length) {
        let v = queue.shift();
        answer += v + " ";
        for (let nv of [v * 2, v * 2 + 1]) {
          if (nv > 7) continue;
          queue.push(nv);
        }
      }
    }
    BFS();
    return answer;
  }
  //  console.log(solution());
}
