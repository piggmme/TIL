// 2. 이진트리 순회(깊이우선탐색 : DFS)
// 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
// 전위순회 출력 : 1 2 4 5 3 6 7
// 중위순회 출력 : 4 2 5 1 6 3 7
// 후위순회 출력 : 4 5 2 6 7 3 1
// 아래 코드는 위에 있는 이진트리를 전위순회한 것입니다. 여러분이 아래 코드를 분석해보고,
// 중위순회, 후위순회를 출력해보세요. 그리고 스택에 스택프레임을 만들면서 분석도 해보세요.
{
  function solution(n) {
    // 전위
    let answer = "";
    function DFS(v) {
      if (v > 7) return;
      else {
        answer += v + " ";
        DFS(v * 2);
        DFS(v * 2 + 1);
      }
    }
    DFS(n);
    return answer;
  }
  // console.log(solution(1)); // : 1 2 4 5 3 6 7
}
{
  function solution(n) {
    // 중위
    let answer = "";
    function DFS(v) {
      if (v > 7) return;
      else {
        DFS(v * 2);
        answer += v + " ";
        DFS(v * 2 + 1);
      }
    }
    DFS(n);
    return answer;
  }
  // console.log(solution(1)); // 4 2 5 1 6 3 7
}

{
  function solution(n) {
    // 후위
    let answer = "";
    function DFS(v) {
      if (v > 7) return;
      else {
        DFS(v * 2);
        DFS(v * 2 + 1);
        answer += v + " ";
      }
    }
    DFS(n);
    return answer;
  }
  // console.log(solution(1)); // 4 5 2 6 7 3 1
}
