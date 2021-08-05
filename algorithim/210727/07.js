// 7. 행과열의 최솟값
// 자연수로 채워져 있는 2차원 배열이 주어지면 행과열의 최솟값들을 구하는 프로그램을 작성하 세요.
// 행과열의 최솟값이란 2차원 배열의 숫자가 자신이 속한 행과 자신이 속한 열에서 모두 가장 작은 숫자를 의미합니다.
// 2차원 배열에 존재하는 모든 행과열의 최솟값들을 찾아주는 프로그램을 작성하세요.

// ▣ 입력설명
// 매개변수 nums에 N*N(3<=N<=100)크기의 이차원 배열이 주어집니다. 2차원 배열의 원소들은 모두 다릅니다.
// ▣ 출력설명
// 행과열의 최솟값들을 오름차순 정렬하여 반환합니다.
// ▣ 매개변수 형식 1
// [[4, 6, 22, 1], [9, 3, 10, 12], [30, 7, 20, 2], [15, 8, 5, 13]]
// ▣ 반환값 형식 1
// [1, 3, 5]

// Sol)
{
  function solution(nums) {
    let answer = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
      let min = nums[i][0];
      let pos = 0;
      for (let j = 0; j < n; i++) {
        if (nums[i][j] < min) {
          min = nums[i][j];
          pos = j;
        }
      }
      let row;
      for (row = 0; row < n; row++) {
        if (nums[row][pos] < min) break;
      }
      if (row == n) answer.push(min);
    }
    answer.sort((a, b) => a - b);
    return answer;
  }
  // console.log(
  //   solution([
  //     [4, 6, 22, 1],
  //     [9, 3, 10, 12],
  //     [30, 7, 20, 2],
  //     [15, 8, 5, 13],
  //   ])
  // ); // [1, 3, 5]
}

// mySol)
{
  function solution(arr) {
    let result = [];
    let N = arr.length;
    for (let i = 0; i < N; i++) {
      // 행 마다 ..
      let min = Math.min(...arr[i]); // 행의 최소값 하나 선택
      let idx = arr[i].indexOf(min); // 최소값 인덱스
      let col = []; // 최소값이 해당하는 열을 담을 배열
      for (let k = 0; k < N; k++) {
        col.push(arr[k][idx]);
      }

      min = Math.min(...col); // 열에서 최소값
      result.indexOf(min) === -1 ? result.push(min) : (min = 0); // 이미 결과에 담겨있다면 담지 않는다.
    }
    return result;
  }
  // console.log(
  //   solution([
  //     [4, 6, 22, 1],
  //     [9, 3, 10, 12],
  //     [30, 7, 20, 2],
  //     [15, 8, 5, 13],
  //   ])
  // ); // [1, 3, 5]
}
