// 7. 마구간 정하기(결정알고리즘) => 거리두기로 낼수도..!!
// N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마
// 구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
// 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을
// 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대
// 값을 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=200,000)개의 마굿간 좌표 xi(0<=xi<=1,000,000,000)가
// 주어집니다. 매개변수 c에 C(2<=C<=N)가 주어집니다.
// ▣ 출력설명
// 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.
// ▣ 매개변수 형식 1
// [1, 2, 8, 4, 9], 3
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// [1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8
// ▣ 반환값 형식 2
// 10

{
  function count(stables, dist) {
    let cnt = 1,
      ep = stables[0]; // 시작 마구간 위치
    for (let i = 1; i < stables.length; i++) {
      if (stables[i] - ep >= dist) {
        // 마구간 간의 거리가 조건에 만족될 때
        cnt++; // 말 배치
        ep = stables[i];
      }
    }
    return cnt;
  }
  function solution(stables, c) {
    // 마구간 간의 거리를 구하는 것임.
    let answer;
    stables.sort((a, b) => a - b);
    let lt = 1,
      rt = stables[stables.length - 1];
    // mid 는 마구간 간의 거리...

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2); // 마구간 간의 거리...
      if (count(stables, mid) >= c) {
        answer = mid;
        lt = mid + 1;
      } else rt = mid - 1;
    }
    return answer;
  }
  // console.log(solution([1, 2, 8, 4, 9], 3)); // 3
}
