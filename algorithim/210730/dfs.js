// DFS

// 1. 전위 순회 : 부모 => 왼쪽 => 오른쪽
{
  function dfs(v) {
    // v는 부모
    if (v > 7) return;
    // 종료조건
    else {
      console.log(v);
      dfs(v * 2); // 왼쪽 자식
      dfs(v * 2 + 1); // 오른쪽 자식
    }
  }
  // dfs(1); // 1 2 4 5 3 6 7
}

// 2. 중위 순회 : 왼쪽 => 부모 => 오른쪽
{
  function dfs(v) {
    // v는 부모
    if (v > 7) return;
    // 종료조건
    else {
      dfs(v * 2); // 왼쪽 자식이 해결 되어야,
      console.log(v); // 부모가 출력된다.
      dfs(v * 2 + 1); // 오른쪽 자식
    }
  }
  dfs(1);
}
