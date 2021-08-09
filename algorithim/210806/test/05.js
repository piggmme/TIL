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
  console.log(solution([1, 2, 3, 5, 7, 8, 9])); // 5
  console.log(solution([25, 20, 15, 30, 10, 40, 5])); // 5
  console.log(solution([5, 1, 4, 3, 5, 7])); // 4
}

// 백준 제출 해보기

{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let input = [];
  let list = [];
  rl.on("line", function (line) {
    //여러줄 입력
    input.push(line);
    //rl.close()가 없어서 계속입력
    //로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료
  }).on("close", function () {
    // 이런식으로 적절하게 입력값을 처리해줘야한다.
    let n = parseInt(input[0]);
    //띄어쓰기 기준으로 배열에 넣기
    let list = input[1].split(" ").map((el) => parseInt(el));
    solution(list);
    //프로세스 종료
    process.exit();
  });
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
}

{
  function solution(nums) {
    const dSum = Math.abs(Math.max(...nums) - Math.min(...nums));
    // 등차가 될 수 있는 최댓값 지정
    const n = nums.length;
    const dp = new Array(n).fill().map(() => new Array(dSum + 1).fill(0));
    const dp_right = new Array(n).fill().map(() => new Array(dSum + 1).fill(0));
    // 각 배열의 index에 등차로 가능한 값을 저장할 이중 배열을 생성

    let ans = 0;
    for (let i = 1; i < n; i++) {
      const dv = nums[i];
      for (let j = i - 1; j > -1; j--) {
        const d = dv - nums[j];
        // d -> 등차
        if (d > 0) {
          // 왼쪽부터 올라가므로 d > 0일때만 판단해줌
          dp[i][d] = dp[j][d] + 1;
          // 다음 index dp의 등차 d를 가지는 dp 값을 갱신해줌
          ans = Math.max(ans, dp[i][d] + 1);
        }
      }
    }

    // 이하 오른쪽부터 왼쪽으로 오는 등차 dp
    for (let i = n - 2; i > -1; i--) {
      const dv_right = nums[i];
      for (let j = i + 1; j < n; j++) {
        const d = dv_right - nums[j];
        if (d > 0) {
          dp_right[i][d] = dp_right[j][d] + 1;
          ans = Math.max(ans, dp_right[i][d] + 1);
        }
      }
    }
    return ans;
    console.log(ans);
  }
  var input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map(function (a) {
      return +a;
    });
  solution(input);
}

{
  let n, nums;
  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const input = [];
  rl.on("line", (line) => {
    input.push(line); // input 배열에 한 줄씩 문자열로 입력을 받습니다. 즉, 첫 번째 줄이 input[0]에, 두 번째 줄이 input[1]에... 담깁니다.
  }).on("close", () => {
    n = input[0] - 0; // 이건 input[0]이 문자열이라서 - 0을 이용해 숫자형으로 바꾸어 준 것입니다. 상황에 따라 알맞은 자료형으로 바꾸어 사용하면 됩니다.
    nums = [];
    for (let i = 1; i < input.length; i++) {
      nums.push(input[i] - 0);
    }
    // input으로 받은 입력 문자열을 사용하기 좋게 변수에 담아 줍니다.
    // coins의 경우에는 input의 2번째 줄부터 마지막 줄까지 담기게 되므로 반복문으로 push해 주었습니다.

    function solution(n, nums) {
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
    solution(n, nums);

    // 이 윗부분까지 코드를 넣고 마지막에 답을 console.log로 출력해 주면 됩니다.

    process.exit();
  });
}
