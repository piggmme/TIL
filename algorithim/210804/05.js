// 5. 랜선자르기(결정알고리즘)
// 엘리트 학원은 자체적으로 K개의 랜선을 가지고 있다. 그러나 K개의 랜선은 길이가 제각각이
// 다. 선생님은 랜선을 모두 N개의 같은 길이의 랜선으로 만들고 싶었기 때문에 K개의 랜선을
// 잘라서 만들어야 한다. 예를 들어 300cm 짜리 랜선에서 140cm 짜리 랜선을 두 개 잘라내면
// 20cm 은 버려야 한다. (이미 자른 랜선은 붙일 수 없다.)
// 편의를 위해 랜선을 자를때 손실되는 길이는 없다고 가정하며, 기존의 K개의 랜선으로 N개의
// 랜선을 만들 수 없는 경우는 없다고 가정하자. 그리고 자를 때는 항상 센티미터 단위로 정수
// 길이만큼 자른다고 가정하자. N개보다 많이 만드는 것도 N개를 만드는 것에 포함된다. 이때
// 만들 수 있는 최대 랜선의 길이를 구하는 프로그램을 작성하시오.
// ▣ 입력설명
// 매개변수 nums에 K개의 각 랜선의 길이가 주어집니다. 매개변수 n에 N이 주어집니다.
// K는 1이상 10,000이하의 정수이고, N은 1이상 1,000,000이하의 정수이다. 그리고 항상 K ≦
// N 이다. K개의 각 랜선의 길이는 센티미터 단위의 
//   이하의 자연수로 주어집니다.
// ▣ 출력설명
// N개를 만들 수 있는 랜선의 최대 길이를 센티미터 단위의 정수로 반환합니다.
// ▣ 매개변수 형식 1
// [802, 743, 457, 539], 11
// ▣ 반환값 형식 1
// 200
// 예제설명) 802cm 랜선에서 4개, 743cm 랜선에서 3개, 457cm 랜선에서 2개, 539cm 랜선에서 2개를
// 잘라내 모두 11개를 만들 수 있다.

// mytry)
{
  function solution(nums, n) {
    let lt = 1,
      rt = 10000;
    let answer = 0;

    function Count(len) {
      let cnt = 0;
      for (let x of nums) {
        cnt += parseInt(x / len);
      }
      return cnt;
    }

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (Count(mid) >= n) {
        // 만들 수 있는 랜선의 갯수가 n보다 많다는 것은, 자르는 기준 길이를 너무 짧게 했다는 뜻
        answer = mid; // 하지만 정답이 될 수 있는 경우임.
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    return answer;
  }
  console.log(solution([802, 743, 457, 539], 11)); // 200
}

{
  function solution(nums, n) {
    // 1~10000 사이에는 무조건 있을 것.
    let answer = 0;
    let lt = 1;
    let rt = Math.max(...nums);

    function count(len) {
      let cnt = 0;
      for (let x of nums) {
        cnt += Math.floor(x / len);
      }
      return cnt;
    }

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (count(mid) >= n) {
        answer = mid;
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    return answer;
  }
  //   console.log(solution([802, 743, 457, 539], 11)); // 200
}
