// 2. 침몰하는 타이타닉 => 그리디
// 정렬하고 일을 처리하면 그리디라고 보면 됨
// 유럽에서 가장 유명했던 유람선 타이타닉이 침몰하고 있습니다. 유람선에는 N명의 승객이 타고있습니다.
// 구명보트를 타고 탈출해야 하는데 타이타닉에 있는 구명보트는 2명 이하로만 탈 수 있으며,
// 보트 한 개에 탈 수 있는 총 무게도 M kg 이하로 제한되어 있습니다.
// N명의 승객 몸무게가 주어졌을 때 승객 모두가 탈출하기 위한 구명보트의 최소개수를 출력하는 프로그램을 작성하세요.

// sol)
{
  function solution(nums, m) {
    let answer = 0;
    let lt = 0,
      rt = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (lt <= rt) {
      if (nums[lt] + nums[rt] <= m) {
        answer++;
        lt++;
        rt--;
      } else {
        answer++;
        rt--;
      }
    }
    return answer;
  }
  // console.log(solution([90, 50, 70, 100, 60], 140)); // 3
}

// mysol)
{
  function solution(nums, m) {
    let n = nums.length;
    let lt = 0,
      rt = n - 1;
    let result = 0; // 구명보트 갯수
    let people = 0; // 구명보트에 탄 사람.

    let idx = [];

    // 오름차순 정렬
    nums.sort((a, b) => a - b);

    // 구명보트에 2명씩 탄 사람들
    while (people < n) {
      let tmp = nums[lt] + nums[rt];
      if (tmp <= m) {
        result += 1;
        people += 2;
        idx.push(lt, rt);
        lt += 1;
      }
      rt -= 1;

      if (lt >= rt) break;
    }

    // 구명보트에 타지 못한 사람들 처리
    return result + (n - people);
  }
  //  console.log(solution([90, 50, 70, 100, 60], 140)); // 3
  // console.log(solution([90, 50, 70, 100, 60], 150)); // 3
}
