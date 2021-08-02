// 5. 바둑이 승차(DFS) => DFS: 중위
// 철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태
// 울수가 없다. 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
// N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운
// 무게를 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums에 N(1<=N<=30)마리 바둑이의 무게 정보가 주어집니다.
// 매개변수 c에 자연수 C(1<=C<=100,000,000)가 주어집니다.
// ▣ 출력설명
// 가장 무거운 무게를 반환하세요.
// ▣ 매개변수 형식 1
// [81, 58, 42, 33, 61], 259
// ▣ 반환값 형식 1
// 242
// ▣ 매개변수 형식 2
// [34, 56, 55, 67, 33, 76, 63, 43], 379
// ▣ 반환값 형식 2
// 372

// sol) cut edge
{
  function solution(nums, c) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = nums.length;
    let total = nums.reduce((a, b) => a + b, 0);

    function DFS(L, sum, tsum) {
      if (sum > c) return; // cut 해주기!!
      if (sum + (total - tsum) < answer) return; // total-tsum = 앞으로 적용할 애들과 sum의 합이, 현재 최대값보다 작다면? 그만!
      if (L === n) {
        answer = Math.max(answer, sum);
      } else {
        DFS(L + 1, sum + nums[L], tsum + sum[L]); // tsum은 적용한 애들의 총 무게...
        DFS(L + 1, sum, tsum + sum[L]);
      }
    }
    DFS(0, 0, 0);
    return answer;
  }
  // console.log(solution([81, 58, 42, 33, 61], 259)); //  242
  // console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379)); // 372
}

// mysol)
{
  function solution(nums, c) {
    let n = nums.length;
    let max = 0;

    function DFS(L, sum) {
      if (L === n) {
        if (sum <= c && max < sum) max = sum;
      } else {
        DFS(L + 1, sum + nums[L]);
        DFS(L + 1, sum);
      }
    }
    DFS(0, 0);
    return max;
  }
  // console.log(solution([81, 58, 42, 33, 61], 259)); //  242
  // console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379)); // 372
}

// mysol)
{
  function solution(nums, c) {
    let max = 0;
    let part = [];
    let n = nums.length;

    function dfs(L) {
      if (L >= n) {
        // 종료 조건
        if (part.length !== 0) {
          let sum = part.reduce((acc, cur) => acc + cur, 0);
          if (max < sum && sum < c) max = sum;
        }
      } else {
        part.push(nums[L]);
        dfs(L + 1);
        part.pop();
        dfs(L + 1);
      }
    }
    dfs(0);
    return max;
  }
  //   console.log(solution([81, 58, 42, 33, 61], 259)); //  242
  //   console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379)); // 372
}
