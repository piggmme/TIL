// 7. 최소매출 => 효율성!
// 현수의 아빠는 제과점을 운영합니다. 현수아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최소 매출액을 차례로 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
//11 12 15 20 25 10 20 13 15 19
// 연속된 3일간의 매출액을 차례로 구해보면 [11, 12, 15] 중에서 11, [12, 15, 20] 중에서 12, [15, 20, 25] 중에서 15와 같이 계속 구하면 결과는 [11, 12, 15, 10, 10, 10, 13, 13]입니 다.
// 여러분이 현수를 도와주세요.

// ▣ 입력설명
// 매개변수 nums에 N(5<=N<=100,000)일 동안의 매출액이 주어집니다. 매개변수 k에 K(2<=K<=N)가 주어집니다. 매출액의 500이하의 자연수입니다.
// ▣ 출력설명
// 최대 매출액을 반환합니다.
// ▣ 매개변수 형식 1
// [11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3
// ▣ 반환값 형식 1
// [11, 12, 15, 10, 10, 10, 13, 13]

// 스택을 사용하여 푼다.
// [ , , , ]<= input

// Sol) deque : 자바스크립트의 배열
// 양쪽 모두 넣고 빼기 가능.
// 뒤 : push, pop / 앞 : shift, unshift
// 효율성 생각해야해...
// queue <= [nums[i], i]

// Sol)
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

// mySecondTry)
{
  function solution(nums, k) {
    let stack = []; // 0: 인덱스, 1: 매출액
    let n = nums.length;
    let result = [];
    // (1) 초기 k일 동안 최소값 찾기
    for (let i = 0; i < k; i++) {
      // 1-1. 기존에 있던 숫자가 지금 들어오는 숫자보다 크면, 최소값이 될 일이 없으니 삭제해도 됨...
      while (stack.length > 0 && nums[i] < stack[stack.length - 1][1])
        stack.pop();
      // 1-2. 숫자 들어옴
      stack.push([i, nums[i]]);
    }
    // 1-3. 현재 최소값 저장
    result.push(stack[0][1]);

    // (2) 이후 최소값 구간 찾기.
    for (let i = k; i < n; i++) {
      // 2-1. 날짜 기한이 지난 아이는 삭제함
      if (stack[0][0] === i - k) stack.shift();

      while (stack.length > 0 && nums[i] < stack[stack.length - 1][1])
        stack.pop();
      // 2-2. 기존에 있던 숫자가 지금 들어오는 숫자보다 크면, 최소값이 될 일이 없으니 삭제해도 됨...

      // 2-3. 숫자 들어옴.
      stack.push([i, nums[i]]);

      // 2-4. 현재의 최소값 저장
      result.push(stack[0][1]);
    }
    return result;
  }
  console.log(solution([11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3)); // [11, 12, 15, 10, 10, 10, 13, 13]
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
