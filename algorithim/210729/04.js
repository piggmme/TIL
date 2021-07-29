// 4. 연속 부분수열 2
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 주어진 수열이 [1, 2, 3, -3, 1, 2]이고, M값이 3이라면
// 합이 3이 되는 연속부분수열은 [1, 2], [1, 2, 3, -3], [2, 3, -3, 1], [3], [3, -3, 1, 2], [1, 2]로 총 6가지입니다.

// Sol)
{
  function solution(nums, m) {
    let answer = 0;
    sum = 0;
    let nH = new Map();
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum === m) answer++;
      if (nH.has(sum - m)) answer += nH.get(sum - m);
      nH.set(sum, nH.get(sum) + 1 || 1);
    }
    return answer;
  }
  //   console.log(solution([1, 2, 3, -3, 1, 2], 3)); // 6
  //   console.log(solution([-1, 0, 1], 0)); // 2
  //   console.log(solution([-1, -1, -1, 1], 0)); // 1
  //   console.log(solution([1, 1, -1, 1, 2, 1, -1, 1], 3)); // 8
}

// Sol)
// lt, rt 쓰지 않음!! 조심해라~ => 밀고 가는 방법 안통해!!
{
  function solution(nums, m) {
    let n = nums.length;
    let nH = new Map();
    let sum = 0; // 쭈욱 누적해 나감. 처음부터 현재까지 누적합!
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (nH.has(sum - m)) {
        // m이 될 수 있는 순간이, value에 저장되어있음
        result += nH.get(sum - m);
      } else {
        nH.set(sum, nH.get(sum) + 1 || 1);
      }
      if (sum === m) result += 1;
    }
    return result;
  }
  //   console.log(solution([1, 2, 3, -3, 1, 2], 3)); // 6
  //   console.log(solution([-1, 0, 1], 0)); // 2
  //   console.log(solution([-1, -1, -1, 1], 0)); // 1
  //   console.log(solution([1, 1, -1, 1, 2, 1, -1, 1], 3)); // 8
}
