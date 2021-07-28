// 7. 최소매출 => 효율성!
// 현수의 아빠는 제과점을 운영합니다. 현수아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최소 매출액을 차례로 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
//11 12 15 20 25 10 20 13 15 19
// 연속된 3일간의 매출액을 차례로 구해보면 [11, 12, 15] 중에서 11, [12, 15, 20] 중에서 12, [15, 20, 25] 중에서 15와 같이 계속 구하면 결과는 [11, 12, 15, 10, 10, 10, 13, 13]입니 다.
// 여러분이 현수를 도와주세요.

// 스택을 사용하여 푼다.
// [ , , , ]<= input

// Sol) deque : 자바스크립트의 배열
// 양쪽 모두 넣고 빼기 가능.
// 뒤 : push, pop / 앞 : shift, unshift
// 효율성 생각해야해...
// queue <= [nums[i], i]
{
  function solution(nums, k) {
    let answer = [];
    let deque = [];
    for (let i = 0; i < k - 1; i++) {
      // 앞으로 최소값이 될 수 없는 애들은 빼버림
      while (deque.length > 0 && deque[deque.length - 1][0] > nums[i])
        deque.pop();
      deque.push([nums[i], i]);
    }

    for (let i = k - 1; i < nums.length; i++) {
      while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) {
        deque.pop();
      }
      deque.push([nums[i], i]); // 구간 안에서 가장 큰 값
      answer.push(deque[0][0]); // 최소값 삽입
      if (deque[0][1] === i - k + 1) deque.shift(); // deque는 오름차순을 유지중
    }
    return answer;
  }
  // console.log(solution([11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3)); // [11, 12, 15, 10, 10, 10, 13, 13]
}

// mySol)
{
  function solution(nums, K) {
    const N = nums.length;
    const result = [];
    let sp = 0;
    // 초기 K일 간 매출을 스택에 담고, 그 총합을 구함
    for (let i = 0; i < N - K + 1; i++) {
      result.push(nums[i]);
      for (let j = 0; j < K; j++) {
        // 스택에 담겨있는 값보다 더 작다면...
        if (result[sp] > nums[i + j]) {
          result[sp] = nums[i + j];
        }
      }
      sp += 1;
    }
    return result;
  }
  // console.log(solution([11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3)); // [11, 12, 15, 10, 10, 10, 13, 13]
}
