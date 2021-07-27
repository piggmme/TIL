// 5. 거리 두기
// 현수는 영화관에 도착했습니다. 영화상영 시간보다 약간 늦은 현수는 남은 좌석을 빨리 선택 하고 영화를 보려고 합니다.
// 현수에게 일렬로된 좌석정보가 주어지면, 이미 앉아 있는 사람들 중 가장 가까운 사람과 최대 한 멀리 떨어져 앉을 자석을 선택해야 합니다.
// 여러분이 도와주세요.

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
    // return dist.indexOf(Math.max(...dist));
    return Math.max(...dist);
  }
  console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
  console.log(solution([0, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
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
    return idx;
  }
  // console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
}
