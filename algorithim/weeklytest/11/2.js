// 부분 수열의 합
// N개의 자연수로 이루어진 수열이 주어지면 이 수열에 존재하는 부분수열 중에서 원소의 총합이 홀수인 부분수열의 개수를 구하는 프로그램을 작성하세요.
// 만약 주어진 수열이 [1, 3, 5] 라면 이 수열의 부분수열들은
// [[1],[1, 3],[1, 3, 5],[3],[3, 5],[5]] 이고 각 부분수열의 원소총합은 [1, 4, 9, 3, 8, 5]이다. 여기서 부분수열의 합이 홀수인 것은 [1, 9, 3, 5]로 답은 4입니다.

// ▣ 입력설명
// 매개변수 nums에 N개의 원소를 갖는 수열이 주어집니다.(1<=N<=100,000), 수열의 원소는 100를 넘지 않는 자연수이다.

// ▣ 출력설명
// 부분수열의 합이 홀수인 부분수열의 개수를 반환합니다. 합이 홀수인 경우가 없다면 0을 반환합니다. 답이 너무 클 수 있으므로 1000000007로 나눈 나머지를 답으로 합니다.

// ▣ 매개변수 형식 1
// [1, 3, 5]

// ▣ 반환값 형식 1
// 4

// sum - k
{
  function solution(nums) {
    const n = nums.length;
    let [odd, even] = [0, 0];
    let answer = 0;
    let sum = 0;

    for (let lt = 0; lt < n; lt++) {
      sum += nums[lt];
      if (sum % 2 === 1) {
        answer++;
        answer += even;
        odd++;
      } else {
        answer += odd;
        even++;
      }
    }
    return answer % 1000000007;
  }
  console.log(solution([1, 3, 5]));
}

// my sol
{
  function solution(nums) {
    const n = nums.length;
    let answer = 0;
    for (let lt = 0; lt < n; lt++) {
      let sum = 0;
      for (let rt = lt; rt < n; rt++) {
        sum += nums[rt];
        if (sum % 2 === 1) answer++;
      }
    }
    return answer % 1000000007;
  }
  // console.log(solution([1, 3, 5]));
}
