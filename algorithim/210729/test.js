// 사과
// 현수는 사과나무 밑에 있습니다. 현수는 한 번의 점프로 사과나무에서 여러개의 사과를 딸 수 있습니다.
// 현수는 매초 점프를 합니다. 그리고 우리는 현수가 매초 점프 할 때 얻을 수 있는 사과의 개수를 미리 알고 있습니다.
// 그런데 현수는 어떤 초에는 에너지가 없어 점프를 할 수 없습니다. 하지만 우리에게는 현수가 에너지가 없어도 M초 동안은
// 무조건 점프를 해서 사과를 딸 수 있게 하는 부스트 기술이 있습니다.
// 현수가 1초부터 N초까지 매초 차례대로 딸 수 있는 사과의 개수 정보가 주어지고, 1초부터 N초까지
// 매초 에너지의 상태가 주어지면 부스트 기술까지 사용해서 딸 수 있는 사과의
// 최대 총 개수를 출력하는 프로그램을 작성하시오.
{
  function solution(apples, power, m) {
    let sum = 0;

    // 무조건 먹고 들어가는거 더하기
    for (let i = 0; i < power.length; i++) {
      if (power[i]) {
        sum += apples[i];
        apples[i] = 0;
      }
    }

    // 투포인터로 m구간동안 훑고 지나가면서 최대값 구하기.
    // 초기 m구간 결정
    for (let i = 0; i < m; i++) {
      sum += apples[i];
    }
    let max = sum;

    let lt = 0;
    for (let rt = m; rt < apples.length; rt++) {
      sum = sum + apples[rt] - apples[lt];
      if (sum > max) max = sum;
      lt++;
    }

    return max;
  }
  console.log(solution([3, 2, 1, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)); // 9
  console.log(solution([3, 2, 3, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)); // 10
  console.log(solution([3, 2, 3, 2, 1, 3], [1, 1, 0, 0, 0, 0], 3)); // 11
  console.log(solution([3, 2, 3, 2, 1, 3], [1, 1, 0, 0, 0, 0], 4)); // 14
  console.log(solution([3, 2, 3, 2, 1, 3], [0, 0, 0, 0, 0, 0], 4)); // 10
  console.log(solution([3, 2, 3, 2, 1, 10], [1, 0, 0, 1, 0, 0], 1)); // 15
  console.log(solution([1, 1, 1, 1, 1, 9, 9], [1, 0, 0, 0, 0, 0], 1)); // 10
  console.log(solution([1, 1, 1, 1, 1, 1], [1, 0, 0, 1, 0, 0], 1)); // 3
  console.log(solution([10, 1, 1, 1, 1, 10], [0, 0, 0, 1, 0, 0], 1)); // 11
}
