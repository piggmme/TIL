// 문제 설명
// N길이의 음수와 양수로 이루어진 수열이 주어집니다. 음수의 값은 왼쪽으로 이동하고,
// 양수의 값은 오른쪽으로 이동합니다. 이동을 하다 양수와 음수가 부딪치면 다음과 같은 결과가 나옵니다.

// 부딪치는 양수와 음수가 서로 절대값의 크기가 다르면 절대값이 큰 값이 살아남고 작은 값은 수열에서 사라집니다.
// 만약 부딪치는 양수와 음수가 절대값이 같다면 두 수 모두 사라집니다.
// 같은 방향으로 움직이는 숫자들은 절대 부딪칠일 없습니다.

// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=100,000)길이의 수열이 주어집니다.

// ▣ 출력설명
// 최종적으로 남은 수열을 반환하세요.(결과가 빈 배열은 없습니다.)

// ▣ 매개변수 형식 1
// [3, 5, -2, -5]

// ▣ 반환값 형식 1
// [3]

// ▣ 매개변수 형식 2
// [-2, -1, -3, 1, 3]

// ▣ 반환값 형식 2
// [-2, -1, -3, 1, 3]

// ▣ 매개변수 형식 3
// [-2, -1, 2, 1, -3, 2]

// ▣ 반환값 형식 3
// [-2, -1, -3, 2]

// my sol)
{
  // 스택
  function solution(nums) {
    let stack = [];
    for (let x of nums) {
      if (stack.length === 0) stack.push(x);
      else {
        stack.push(x);
        while (stack[stack.length - 2] > 0 && stack[stack.length - 1] < 0) {
          // 삭제되어야 하는 경우
          if (stack[stack.length - 2] < Math.abs(stack[stack.length - 1])) {
            // 1.음수 값의 절대값이 더 큰 경우
            let tmp = stack.pop();
            stack.pop();
            stack.push(tmp);
          } else if (
            stack[stack.length - 2] > Math.abs(stack[stack.length - 1])
          ) {
            // 2.양수 값의 절대값이 더 큰 경우
            stack.pop();
          } else {
            // 3.절대값이 같은 경우
            stack.pop();
            stack.pop();
          }
        }
      }
    }
    return stack;
  }

  //   console.log(solution([3, 5, -2, -5])); // [3]
  //   console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
  //   console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]
}

// sol)
{
  function solution(nums) {
    let answer = [];
    let stack = [],
      flag;
    for (let x of nums) {
      if (x > 0) stack.push(x);
      else {
        if (stack.length === 0 || stack[stack.length - 1] < 0) {
          stack.push(x);
        } else {
          flag = 0;
          while (stack.length > 0 && stack[stack.length - 1] > 0) {
            let left = stack.pop();
            if (Math.abs(left) < Math.abs(x)) {
              flag = 1;
            } else if (Math.abs(left) === Math.abs(x)) {
              flag = 0;
              break;
            } else {
              stack.push(left);
              flag = 0;
              break;
            }
          }
          if (flag) stack.push(x);
        }
      }
    }
    answer = stack;
    return answer;
  }
}
