// 재귀 함수

// ex1)
// 재귀는 스택 프레임이 생긴다.
// 스택 프레임은 "매개변수, 지역변수, 복귀 주소" 정보가 저장된다
// 스택 프레임 : 하위 => [dfs(3), dfs(2), dfs(1)] => 상위
// 위처럼 쌓이면서 함수들은 대기 상태로 들어간다.. 호출 이후는 깨어난 후에 실행함.
// 깨어나는 순서는 상위부터!
// 1. dfs(1) 깨어나고, console.log 하고, 종료
// 2. dfs(2) 깨어나고, console.log 하고, 종료
// 3. dfs(3) 깨어나고, console.log 하고, 종료
{
  function dfs(v) {
    if (v === 0) return;
    else {
      dfs(v - 1);
      console.log(v); // 1 2 3
    }
  }
  dfs(3);
}

// ex2)
// 호출되는 순서!
// 1. dfs(3) 호출되고, console.log하고, dfs(2) 호출
// 2. dfs(2) 호출되고, console.log하고, dfs(1) 호출
// 3. dfs(1) 호출되고, console.log하고, dfs(0) 호출
// 4. dfs(0) 호출되고, if조건문 들어가고, 종료됨

// 스택 프레임 : 하위 => [dfs(3), dfs(2), dfs(1)] => 상위
// 위처럼 쌓이면서 함수들은 대기 상태로 들어간다.. 호출 이후는 깨어난 후에 실행함.
// 깨어나는 순서는 상위부터!
// 1. dfs(1) 깨어나고 종료
// 2. dfs(2) 깨어나고 종료
// 3. dfs(3) 깨어나고 종료
{
  function dfs(v) {
    if (v === 0) return;
    else {
      console.log(v); // 3 2 1
      dfs(v - 1);
    }
  }
  dfs(3);
}
