// 3. 연속 부분수열 1 => 기본형이라 외우는게 좋다!
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

// Sol)
{
  function solution(nums, m) {
    let lt = 0;
    let sum = 0;
    let answer = 0;

    for (let rt = 0; rt < nums.length; rt++) {
      // lt, rt 변화했을 때 꼭 검사 해야햇!!
      sum += nums[rt];
      if (sum === m) answer++;
      while (sum > m) {
        sum -= nums[lt++];
        if (sum === m) answer++;
      }
    }
    return answer;
  }
  //   console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
  //   console.log(solution([1, 1, 1, 1, 1, 1], 3)); //4
  //   console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)); //6
  // console.log(solution([1, 2, 1, 2, 7, 2, 1], 3)); //6 => 7까지 다 빼버릴 수 있음.
}

// mySol)
{
  function solution(nums, m) {
    let n = nums.length;
    let start = 0,
      end = 1;
    let sum = nums[start];
    let result = 0;

    while (start !== n - 1) {
      if (end !== n) {
        // 끝에 닿기 전
        if (sum < m) {
          // 아직 더 더해야할 때
          sum += nums[end];
          end += 1;
        } else if (sum > m) {
          // 그만 더하고 빼줘야할 때
          sum -= nums[start];
          start += 1;
        } else if (sum === m) {
          // 하나 더 더해야 할 때
          result += 1;
          sum += nums[end];
          end += 1;
        }
      } else {
        // 끝에 닿앗을 경우
        if (sum < m) break;
        else if (sum > m) {
          sum -= nums[start];
          start += 1;
        } else if (sum === m) {
          sum -= nums[start];
          start += 1;
          result += 1;
        }
      }
    }

    return result;
  }
  //   console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
  //   console.log(solution([1, 1, 1, 1, 1, 1], 3)); //4
  //   console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)); //6
}
