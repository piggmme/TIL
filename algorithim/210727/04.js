// 4. 바이토닉 수열
// 바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
//길이가 N인 수열이 주어지면 이 수열이 바이토닉 수열인지 판별하는 프로그램을 작성하세요.
// 만약 [1, 2, 3, 4, 2, 1]이면 바이토닉 수열입니다.
// 하지만 [1, 2, 2, 3, 2, 1]과 같이 같은 값 이 연속으로 있으면 바아토닉이 수열이라 하지 않습니다.

// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=30)길이의 수열이 주어집니다. 수열의 원소는 자연수입니다.
// ▣ 출력설명
// 바이토닉 수열이면 “YES", 아니면 ”NO"를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 2, 3, 4, 5, 3, 1]
// ▣ 반환값 형식 1
// YES
// ▣ 매개변수 형식 2
// [1, 3, 4, 5, 5, 6, 4, 3]
// ▣ 반환값 형식 2
// NO
// ▣ 매개변수 형식 2
// [1, 2, 3, 4, 5]
// ▣ 반환값 형식 2
// NO

// Sol) O(n)
{
  function solution(nums) {
    let i = 0;
    let n = nums.length;

    // 인덱스가 존재한지 먼저 확인해야함! 그 다음 증가함수인지 확인.
    // 경계선 조건은 앞쪽에 둬야해~~!! => index out of range
    while (i + 1 < n && nums[i] < nums[i + 1]) {
      // 증가함수면 밀고가.
      i++;
    }
    if (i === n - 1 || i === 0) {
      // 처음부터 감소하거나, 끝까지 중가함수였음
      return "NO";
    }
    while (i + 1 < n && nums[i] > nums[i + 1]) {
      i++;
    }
    if (i !== n - 1) {
      return "NO";
    }
    return "YES";
  }
  // console.log(solution([1, 2, 3, 4, 5, 3, 1]));
  // console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
  // console.log(solution([1, 2, 3, 4, 5]));
}

// mySol)
{
  function solution(arr) {
    let N = arr.length;
    let up = 0,
      down = 0;

    if (arr[1] - arr[0] < 0) return "NO"; // 감소부터 시작하면 안돼

    for (let i = 2; i < N; i++) {
      if (arr[i] - arr[i - 1] > 0) {
        // 증가
        if (up === 1) return "NO"; // 한번 감소하고, 다시 증가하려고 함. 안돼
      } else if (arr[i] - arr[i - 1] < 0) {
        // 감소
        up = 1;
        down = 1; // 감소 해봤음.
      } else {
        // 증감 둘다 아님.
        return "NO";
      }
    }
    return up && down ? "YES" : "NO"; // up, down 둘다 한번씩 해야함.
  }
  // console.log(solution([1, 2, 3, 4, 5, 3, 1]));
  // console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
  // console.log(solution([1, 2, 3, 4, 5]));
}
