// 14. 송아지 찾기(BFS : 상태트리탐색) => 트리의 L을 알고싶을 때!!
// 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 현수의 위치와 송아
// 지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음
// 과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다.
// 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수
// 있다. 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성
// 하세요.
// ▣ 입력설명
// 매개변수 s에 현수의 위치 S와 매개변수 e에 송아지의 위치 E가 주어집니다.
// 직선의 좌표 점은 1부터 10,000까지이다.
// ▣ 출력설명
// 점프의 최소횟수를 반환합니다. 답은 1이상입니다.
// ▣ 매개변수 형식 1
// 5 14
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// 8 3
// ▣ 반환값 형식 2
// 5

// mytry2)
{
  function solution(s, e) {
    function BFS() {
      let ch = Array.from({ length: 10001 }, () => 0);
      let L = 0;
      let queue = [];
      queue.push(s);
      ch[s] = 1;
      while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
          let v = queue.shift();
          for (let nv of [v + 1, v - 1, v + 5]) {
            if (nv === e) return L + 1;
            if (nv > 0 && nv <= 10000 && ch[nv] === 0) {
              // 방문하지 않았고, 경계 이내에서
              queue.push(nv);
              ch[nv] = 1;
            }
          }
        }
        L++;
      }
    }
    return BFS();
  }
  //   console.log(solution(5, 14)); //3
  //   console.log(solution(8, 3)); //5
}

// mytry)
{
  function solution(s, e) {
    function BFS() {
      let ch = Array.from({ length: 10001 }, () => 0);
      let queue = [];
      let L = 0; // 답이 될 변수. 레벨.
      queue.push(s); // 현수의 위치부터 시작
      ch[s] = 1; //현수 위치 방문했다고 체크함.

      while (queue.length) {
        // queue에 더이상 들어있는 값이 없을 때 까지 push & shift를 반복
        let len = queue.length; // queue에서 shift, push하니까...이전 길이값을 미리 저장
        for (let i = 0; i < len; i++) {
          let v = queue.shift(); // queue에서 하나 꺼냄
          // 그 곳으로 부터 인접한 곳을 탐색함.
          for (let nv of [v + 1, v - 1, v + 5]) {
            if (nv === e) return L + 1;
            if (ch[nv] === 0 && nv > 0 && nv <= 10000) {
              queue.push(nv); // 큐에 넣고
              ch[nv] = 1; // 방문 표시
            }
          }
        }
        L++;
      }
    }
    return BFS();
  }
  //   console.log(solution(5, 14)); //3
  //   console.log(solution(8, 3)); //5
}

// sol)
{
  function solution(s, e) {
    let answer = 0;
    function BFS() {
      let ch = Array.from({ length: 10001 }, () => 0); // 방문했는지 확인
      let queue = [];
      queue.push(s); // root값 초기화
      ch[s] = 1;
      let L = 0; // 답이될 변수. 레벨
      while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
          // 해당 레벨의 갯수만큼 반복함. 종료하면 그 해당 레벨 갯수만큼은 빠지고, 이후 단계만 들어가있음.
          // 큐의 길이만큼 반복함.
          let x = queue.shift();
          for (let nx of [x - 1, x + 1, x + 5]) {
            if (nx === e) return L + 1; // 자식을 미리 확인.
            // nx는 x의 자식들
            if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
              ch[nx] = 1;
              queue.push(nx); // 큐에다가 x의 자식들을 넣어줌.
            }
          }
        }
        L++; // 다음 레벨 증가.
      }
    }
    return BFS();
  }
  //   console.log(solution(5, 14)); //3
  //   console.log(solution(8, 3)); //5
}
