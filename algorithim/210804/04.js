// 4. 2차원 배열 이분검색
// 각 행과 각 열이 오름차순으로 되어 있는 2차원 배열이 주어지면 가장 효율적인 방법으로 특
// 정 숫자는 찾는 프로그램을 작성해보세요.

// ▣ 입력설명
// 매개변수 matrix에 N*M(3<=N, M<=100)크기의 2차원 배열이 주어집니다.
// 매개변수 target에 2차원 배열에서 찾아야 할 숫자가 주어집니다. 2차원 배열에 target 숫자는
// 반드시 존재합니다.
// ▣ 출력설명
// target 숫자의 행과 열 좌표를 반환합니다.
// ▣ 매개변수 형식 1
// [[1, 6, 9, 12], [3, 7, 10, 14], [5, 8, 13, 17], [15, 18, 20, 23]], 8
// ▣ 반환값 형식 1
// [2, 1]
{
  function solution(matrix, target) {
    let col = matrix[0].length - 1;
    let row = 0;

    // 다 정렬 되어 있으니까 가능한 것...
    while (col >= 0 && row < matrix.length) {
      if (target < matrix[row][col]) {
        col -= 1;
      } else {
        if (target === matrix[row][col]) return [row, col];
        row++;
      }
    }
  }
  //   console.log(
  //     solution(
  //       [
  //         [1, 6, 9, 12],
  //         [3, 7, 10, 14],
  //         [5, 8, 13, 17],
  //         [15, 18, 20, 23],
  //       ],
  //       8
  //     )
  //   );
}
