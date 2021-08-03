// 12. 수들의 조합
// N개의 정수가 주어지면 그 숫자들 중 M개를 뽑는 조합의 합이 임의의 정수 K의 배수인 개수
// 는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
// 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고, 3개를 뽑은 조합의 합이 6의 배수인 조합을
// 찾으면 4+8+12 2+4+12로 2가지가 있습니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=20)개의 정수가 주어집니다.
// 매개변수 m에 자연수 M(2<=M<=N)이 주어지고, 매개변수 k에 K값이 주어집니다.
// ▣ 출력설명
// 총 가지수를 반환합니다.
// ▣ 매개변수 형식 1
// [2, 4, 5, 8, 12], 3, 6
// ▣ 반환값 형식 1
// 2
// ▣ 매개변수 형식 2
// [3, 5, 7, 8, 9, 12, 14], 4, 8
// ▣ 반환값 형식 2
// 5

// sol) 바로 썸에 증가.
{
  function solution(nums, m, k) {
    let n = nums.length;
    let result = 0;

    function DFS(L, s, sum) {
      if (L === m) {
        // m개를 뽑음
        if (sum % k === 0) result += 1;
      } else {
        for (let i = s; i < n; i++) {
          DFS(L + 1, i + 1, sum + nums[i]);
        }
      }
    }
    DFS(0, 0, 0);
    return result;
  }
  //   console.log(solution([2, 4, 5, 8, 12], 3, 6)); // 2
  //   console.log(solution([3, 5, 7, 8, 9, 12, 14], 4, 8)); // 5
}

// mysol)
{
  function solution(nums, m, k) {
    let n = nums.length;
    let tmp = [];
    let result = 0;

    function DFS(L, s) {
      if (L === m) {
        // m개를 뽑음
        let sum = tmp.reduce((acc, cur) => acc + cur, 0);
        if (sum % k === 0) result += 1;
      } else {
        for (let i = s; i < n; i++) {
          tmp.push(nums[i]);
          DFS(L + 1, i + 1);
          tmp.pop();
        }
      }
    }
    DFS(0, 0);
    return result;
  }
  //   console.log(solution([2, 4, 5, 8, 12], 3, 6)); // 2
  //   console.log(solution([3, 5, 7, 8, 9, 12, 14], 4, 8)); // 5
}
