// 6. 2차원 배열 1의 개수
// 0과 1로 구성된 2차원 배열이 주어지면 각 행의 1이 개수를 세어 개수가 가장 작은 행번호부 터 출력하는 프로그램을 작성하세요.
// 1의 개수가 같은 행은 여러개이면 행번호가 작은 것부터 출력합니다. 이차원배열의 행크기가 N이면 행번호는 0번부터 N-1번까지입니다.

// 탐색
// Sol)
// 고차함수 : 매개변수로 call back 함수를 받는 함수.
// reduce & map을 활용해보기
{
  function solution(nums) {
    let answer = nums
      .map((row, i) => ({
        i,
        cnt: row.reduce((a, b) => a + b, 0),
      }))
      .sort((a, b) => a.cnt - b.cnt)
      .map((ob) => ob.i);
    console.log(answer);
  }
  // console.log(
  //   solution([
  //     [1, 0, 0, 1],
  //     [0, 0, 0, 1],
  //     [1, 1, 0, 1],
  //     [0, 1, 0, 1],
  //   ])
  // ); //[1, 0, 3, 2]
}

// MySol)
function solution(arr) {
  let cnt = [];
  for (let i = 0; i < arr.length; i++) {
    // 행 당 1의 갯수를 cnt 배열에 담음
    let cnt_1 = arr[i].filter((a) => a === 1).length;
    let temp = []; // temp[0] = 1의 갯수, temp[1] = 인덱스 번호
    temp.push(cnt_1);
    temp.push(i);
    cnt.push(temp);
  }

  // 먼저 1의 갯수 순서대로 sort
  cnt.sort((a, b) => a[0] - b[0]);
  console.log(cnt);
  // 같은 갯수가 있다면, 인덱스 순서대로 sort
  // 근데 이거 안해도 가능하네..?

  // 인덱스 값을 반환
  return cnt.map((a) => a[1]);
}
// console.log(
//   solution([
//     [1, 0, 0, 1],
//     [0, 0, 0, 1],
//     [1, 1, 0, 1],
//     [0, 1, 0, 1],
//   ])
// ); //[1, 0, 3, 2]
