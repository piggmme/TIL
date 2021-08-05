// 3. 이분검색
// 임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음 N개의 수
// 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는
// 프로그램을 작성하세요. 단 중복값은 존재하지 않습니다.

// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=1,000,000)개의 수열이 주어집니다.
// 매개변수 m에 M이 주어집니다.
// ▣ 출력설명
// 정렬 후 M의 값의 위치 번호를 반환한다.
// ▣ 매개변수 형식 1
// [23, 87, 65, 12, 57, 32, 99, 81], 32
// ▣ 반환값 형식 1
// 3

// mytry)
{
  function solution(nums, m) {
    let lt = 0,
      rt = nums.length - 1; // lt, rt를 인덱스로 잡음
    nums.sort((a, b) => a - b); // 오름차순 정렬

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (nums[mid] === m) {
        answer = mid + 1;
        break;
      } else if (nums[mid] < m) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    return answer;
  }
  // console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
}

// sol)
{
  // lt, rt 줄일려고 하다가 낭패보니, 그냥 그 범위 내로 정하면 된다.
  function solution(nums, m) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let lt = 0,
      rt = n - 1;

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (nums[mid] === m) {
        answer = mid + 1;
        break;
      } else if (nums[mid] > m) rt = mid - 1;
      else lt = mid + 1;
    }
    return answer;
  }
  //   console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
}
