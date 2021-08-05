// 5. 거리 두기
// 현수는 영화관에 도착했습니다. 영화상영 시간보다 약간 늦은 현수는 남은 좌석을 빨리 선택 하고 영화를 보려고 합니다.
// 현수에게 일렬로된 좌석정보가 주어지면, 이미 앉아 있는 사람들 중 가장 가까운 사람과 최대 한 멀리 떨어져 앉을 자석을 선택해야 합니다.
// 여러분이 도와주세요.

// ▣ 입력설명
// 매개변수 nums에 길이가 N(3<=N<=100)인 수열을 통해 좌석의 정보가 주어집니다.
// 좌성정보는 1은 이미 사람이 앉은 좌석이고 0의 빈 좌석입니다.
// ▣ 출력설명
// 현수가 이미앉은 사람과 최대한 멀리 앉을 수 있는 거리를 반환합니다.
// ▣ 입력예제
// [1, 0, 0, 0, 1, 0, 0, 1, 0, 1]
// ▣ 출력예제
// 2

// 출력설명
// 총 10개의 좌석이 왼쪽부터 0번 좌석으로 해서 9번 좌석까지 존재한다면 현수가 2번 좌석에 앉으면 가장 가까운 사람과의 거리가 2가 됩니다. 만약 6번 좌석에 앉으면 가장 가까운 사람 과의 거리는 1입니다.

// Sol) O(n)으로 짜야함!
{
  function solution(nums) {
    let d = 1000; // 최대한 큰 값
    let dist = []; // 각 자리마다 사람과 떨어져있는 거리를 저장함
    // 사람이 앉아있으면 d값을 0으로 만들고, 사람없으면 1씩 증가시킴
    // 그 값을 dist 배열에 삽입

    // 앞에서 거리 측정
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        d += 1;
        dist.push(d);
      } else {
        // 사람이 앉아있는 경우
        d = 0;
        dist.push(d);
      }
    }

    // 뒤에서 부터 거리 측정
    d = 1000;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === 0) {
        d += 1;
        dist[i] = Math.min(dist[i], d);
      } else {
        // 사람이 앉아있는 경우
        d = 0;
      }
    }

    return Math.max(...dist);
  }
  // console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
  // console.log(solution([0, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
}

// mySol)
{
  function solution(arr) {
    let len = 0,
      idx = 0;
    let people = [];
    let N = arr.length;
    for (let i = 0; i < N; i++) {
      if (arr[i] === 1) people.push(i); // 사람이 앉아있는 자리 번호 저장
    }
    for (let i = 0; i < N; i++) {
      if (arr[i] === 1) continue;
      else {
        let tmp = people.map((n) => Math.abs(i - n)); // 사람들과 나의 거리를 구함
        let min = Math.min(...tmp);
        if (len < min) {
          // 거리의 최소값이 이전 보다 크다면, 가장 멀리 떨어져 앉는 방법임.
          len = min;
          idx = i;
        }
      }
    }
    // return idx;
    return len;
  }
  // console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
}
