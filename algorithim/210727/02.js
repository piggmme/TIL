// 2. 가장 높은 증가수열
// 길이가 N인 수열이 주어지면 이 수열에서 연속된 부분 증가수열을 찾습니다.
// 각 부분증가수열 은 높이가 있습니다.
// 증가수열의 높이란 증가수열의 첫항과 마지막항의 차를 의미합니다.
// 수열이 주어지면 여러 증가수열 중 가장 높은 부분증가수열을 찾는 프로그램을 작성하세요.
// 만약 수열이 [5, 2, 4, 7, 7, 3, 9, 10, 11]이 주어지면 가장 높은 부분증가수열은 [3, 9, 10, 11]이고, 높이는 8입니다.

// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=30)길이의 수열이 주어집니다. 수열의 원소는 자연수입니다.
// ▣ 출력설명
// 가장 높은 연속부분증가수열의 높이를 반환합니다.
// ▣ 매개변수 형식 1
// [5, 2, 4, 7, 7, 3, 9, 10, 11]
// ▣ 반환값 형식 1
// 8
// ▣ 매개변수 형식 2
// [8, 12, 2, 3, 7, 6, 20, 3]
// ▣ 반환값 형식 2
// 14

// Sol) 두 수 차이의 누적 == 첫항과 마지막항의 차
// 두 수의 크기를 비교하여 뒤의 숫자가 더 커야함
// 만약 그렇지 않다면, 그 값을 max값과 비교하고 결과에 저장
{
  function solution(arr) {
    let answer = 0,
      sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        sum += arr[i + 1] - arr[i];
      } else {
        answer = Math.max(answer, sum);
        sum = 0;
      }
    }
    answer = Math.max(answer, sum); // 끝 자료 갱신을 해줘야함.
    return answer;
  }
  // console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11])); // 8
  // console.log(solution([8, 12, 2, 3, 7, 6, 20, 3])); // 14
}

// 스택
{
  function solution(arr) {
    let result = 0;
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      if (stack[stack.length - 1] > arr[i]) stack = []; // 감소한 경우 스택 비움
      stack.push(arr[i]);

      if (stack.length !== 1) {
        // 원소가 한개가 아닌 여러개인 경우
        let temp = stack[stack.length - 1] - stack[0]; // 첫항과 마지막항의 차이 구해서
        if (result < temp) result = temp; // 비교후 최대값 갱신
      }
    }
    return result;
  }
  // console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11])); // 8
  // console.log(solution([8, 12, 2, 3, 7, 6, 20, 3])); // 14
}
