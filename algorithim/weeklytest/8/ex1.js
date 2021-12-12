// 어린이집 소풍
// 8명의 어린이가 서로 붙으면 싸우는 케이스를 입력
// 싸우지 않게 줄세울 경의우 수를 구함

// 인접행렬
{
  function solution(nums) {
    const students = [...Array(9)].map(() => Array(9).fill(0));
    for (const [student1, student2] of nums) {
      students[student1][student2] = 1;
      students[student2][student1] = 1;
    }

    const temp = [];
    const ch = [...Array(9)].fill(0);
    let answer = 0;

    function DFS(L) {
      if (L === 8) {
        answer++;
        return;
      }
      for (let i = 1; i <= 8; i++) {
        if (ch[i] === 0) {
          if (temp.length === 0 || students[temp[temp.length - 1]][i] === 0) {
            ch[i] = 1;
            temp.push(i);
            DFS(L + 1);
            temp.pop();
            ch[i] = 0;
          }
        }
      }
    }
    DFS(0);
    return answer;
  }

  console.log(
    solution([
      [5, 3],
      [4, 3],
      [4, 7],
      [3, 6],
    ]),
  ); // 10560

  console.log(
    solution([
      [3, 6],
      [5, 7],
      [4, 1],
      [8, 7],
    ]),
  ); // 13152
}

{
  function solution(nums) {
    const students = [...Array(9)].map(() => []);
    for (const [student1, student2] of nums) {
      students[student1].push(student2);
      students[student2].push(student1);
    }

    const temp = [];
    const ch = [...Array(9)].fill(0);
    let answer = 0;

    function DFS(L) {
      if (L === 8) {
        answer++;
        return;
      }
      for (let i = 1; i <= 8; i++) {
        if (ch[i] === 0) {
          if (!students[i].includes(temp[temp.length - 1])) {
            ch[i] = 1;
            temp.push(i);
            DFS(L + 1);
            temp.pop();
            ch[i] = 0;
          }
        }
      }
    }
    DFS(0);
    return answer;
  }
}
