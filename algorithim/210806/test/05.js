// 문제 설명
// 길이가 N인 자연수 수열이 주어지면 이 수열에서 등차수열을 이루는 부분수열 중 최대길이를 갖는 부분수열을 구하는 프로그램을 작성하세요.
// 만약 주어지는 수열이 [1, 2, 3, 5, 7, 8, 9]가 주어지면 등차수열을 이루는 최대길이 부분수열은 [1, 3, 5, 7, 9]로 그 길이는 5입니다. 부분수열을 입력된 순서는 유지해야 합니다.

// ▣ 입력설명
// 매개변수 nums 에 길이가 N(3<=N<=1,000)인 수열이 전달됩니다. 수열의 모든 원소는 서로 다릅니다.

// ▣ 출력설명
// 등차수열을 이루는 최대부분수열의 길이를 반환합니다.

// ▣ 매개변수 형식 1
// [1, 2, 3, 5, 7, 8, 9]

// ▣ 반환값 형식 1
// 5

// ▣ 매개변수 형식 2
// [25, 20, 15, 30, 10, 40, 5]

// ▣ 반환값 형식 2
// 5

// 출력설명 : 최대길이 등차수열은 [25, 20, 15, 10, 5]입니다.

// DFS - 조합
{
  function solution(nums) {
    let n = nums.length;
    let temp = [],
      part = [],
      answer = 0;

    function DFS(L, s) {
      if (temp.length !== 0) part.push(temp.slice());
      for (let i = s; i < n; i++) {
        temp.push(nums[i]);
        DFS(L + 1, i + 1);
        temp.pop();
      }
    }
    DFS(0, 0);

    for (let i = 0; i < part.length; i++) {
      let d = part[i][0] - part[i][1];
      let flag = true;
      for (let j = 1; j < part[i].length - 1; j++) {
        if (part[i][j] - part[i][j + 1] !== d) {
          flag = false;
          break; // 수열이 아님
        }
      }
      if (flag) {
        answer = Math.max(answer, part[i].length);
      }
    }
    console.log(answer);
    return answer;
  }
  // console.log(solution([1, 2, 3, 5, 7, 8, 9])); // 5
  // console.log(solution([25, 20, 15, 30, 10, 40, 5])); // 5
  // console.log(solution([5, 1, 4, 3, 5, 7])); // 4
}

// sol)
{
  function solution(nums) {
    let answer = 0;
    let n = nums.length;
    dy = Array.from(Array(n), () => Array(n).fill(0));
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        dy[i][j] = 2;
        let pre = nums[i] * 2 - nums[j]; // 2a - (a + d) = a - d
        let pos = 0;
        for (; pos < i; pos++) {
          if (nums[pos] === pre) break;
        }
        if (pre === nums[pos]) dy[i][j] = dy[pos][i] + 1;
        answer = Math.max(answer, dy[i][j]);
      }
    }
    console.log(dy);
    return answer;
  }
  console.log(solution([1, 2, 3, 5, 7, 8, 9]));
}
