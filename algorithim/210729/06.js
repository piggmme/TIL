// 6. 연속된 자연수의 합
// N입력으로 양의 정수 N이 입력되면 2개 이상의 연속된 자연수의 합으로 정수 N을 표현하는 방법의 가짓수를 출력하는 프로그램을 작성하세요.
// 만약 N=15이면
// 7+8=15
// 4+5+6=15
// 1+2+3+4+5= 15
// 와 같이 총 3가지의 경우가 존재한다.

// ▣ 입력설명
// 매개변수 n에 양의 정수 N(7<=N<100,000)이 주어집니다.
// ▣ 출력설명
// 총 경우수를 반환합니다.
// ▣ 매개변수 형식 1
// 15
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// 45678
// ▣ 반환값 형식 2
// 7
// ▣ 매개변수 형식 3
// 98765
// ▣ 반환값 형식 3
// 3

// Sol2) 수학적인 기술
// 7+8=15 = 6(1+2)
// 4+5+6=15 = 3(1+2+3)
// 1+2+3+4+5= 15
{
  function solution(n) {
    let answer = 0;
    cnt = 1;
    n--;
    while (n > 0) {
      cnt++;
      n -= cnt;
      if (n % cnt == 0) answer++;
    }
    return answer;
  }
  // console.log(solution(15));
}

// Sol1) two pointer
{
  function solution(N) {
    // N의 절반을 뚝 짤라서, 1~N/2 까지의 숫자를 배열안에 넣고,
    // 그 배열안에서 연속된 자연수를 더했을 때, N이 되는지 찾으면 된다.
    let nums = Array.from(
      { length: parseInt(N / 2) + (N % 2) },
      (v, i) => i + 1
    );
    let n = nums.length;
    let result = 0;
    let lt = 0;
    let sum = 0;
    for (let rt = 0; rt < n; rt++) {
      sum += nums[rt];
      while (sum > N) {
        sum -= nums[lt++];
      }
      if (sum === N) result++;
    }
    return result;
  }
  //   console.log(solution(15)); //3
  //   console.log(solution(45678)); //7
  //   console.log(solution(98765)); //3
}

// mySol)
{
  function solution(N) {
    // N의 절반을 뚝 짤라서, 1~N/2 까지의 숫자를 배열안에 넣고,
    // 그 배열안에서 연속된 자연수를 더했을 때, N이 되는지 찾으면 된다.
    let nums = Array.from(
      { length: parseInt(N / 2) + (N % 2) },
      (v, i) => i + 1
    );

    let n = nums.length;
    let start = 0,
      end = 1;
    let sum = nums[start];
    let result = 0;

    while (start !== n - 1) {
      if (end !== n) {
        // 끝에 닿기 전
        if (sum < N) {
          // 아직 더 더해야할 때
          sum += nums[end];
          end += 1;
        } else if (sum > N) {
          // 그만 더하고 빼줘야할 때
          sum -= nums[start];
          start += 1;
        } else if (sum === N) {
          // 하나 더 더해야 할 때
          result += 1;
          sum += nums[end];
          end += 1;
        }
      } else {
        // 끝에 닿앗을 경우
        if (sum < N) break;
        else if (sum > N) {
          sum -= nums[start];
          start += 1;
        } else if (sum === N) {
          sum -= nums[start];
          start += 1;
          result += 1;
        }
      }
    }
    return result;
  }
  //   console.log(solution(15)); //3
  //   console.log(solution(45678)); //7
  //   console.log(solution(98765)); //3
}
