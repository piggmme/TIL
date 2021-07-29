// 나름 괜찮은 풀이? -> 반례 ㅠㅠ흑흑 말미잘 ㅠ
{
  function solution(num, k) {
    let stack = [];
    let arr = String(num).split("");
    if (k >= arr.length) {
      return 0;
    }
    while (k > 0) {
      if (arr.length === k) break;
      let min = 9;
      for (let i = 0; i < k + 1; i++) {
        if (min > arr[i]) min = arr[i]; // 해당 자리수가 될 수 있는 숫자중 가장 작은 수 고름
      }
      let idx = arr.indexOf(min); // 그 수의 인덱스

      for (let i = 0; i < idx; i++) {
        arr.shift(); // 그 수의 앞에 있는 문자는 버림. k값은 줄어든다.
        k -= 1;
      }
      stack.push(arr.shift()); // 최소값 삽입

      if (k <= 0) {
        stack = [...stack, ...arr];
      }
    }
    let result = stack.join("");
    return parseInt(result);
  }
  // console.log(solution(2322113, 3)); // 2113
  // console.log(solution(200200, 1)); // 200
  // console.log(solution(123, 3)); // 0
  // console.log(solution(12, 4)); // 0
  // console.log(solution(99999, 2)); // 999
  // console.log(solution(123456, 2)); // 1234
  // console.log(solution(123123, 3)); // 112
  // console.log(solution(987651, 3)); // 651
  // console.log(solution(141414, 3)); // 111
  // console.log(solution(31313, 3));
  // console.log(solution(101109, 3)); // 나: 9 / 답 : 1 ㅜㅜ??
  // console.log(solution(101019, 3)); // 1
  // console.log(solution(1000190, 3)); // 0

  console.log(solution(1230, 3)); //0
  console.log(solution(7612345, 5)); //12
  console.log(solution(999102345, 5)); //234
  console.log(solution(10000023, 2)); //2
  console.log(solution(30000043, 3)); //0
  console.log(solution(12345670, 7)); //0
  console.log(solution(123456, 3)); //123
  console.log(solution(12003, 3)); //0
  console.log(solution(9, 1)); //0
  console.log(solution(98765432, 7)); //2
}
// 잘못된 풀이
{
  function solution(num, k) {
    let stack = [];
    let arr = String(num).split("");
    //    console.log(arr);
    let frame = k + 1; // 프레임 안에서 최대값을 지워야함.
    //   console.log(frame);
    if (k >= arr.length) {
      return 0;
    }
    while (frame > 1) {
      let max = 0;
      for (let i = 0; i < frame; i++) {
        if (max < arr[i]) max = arr[i];
      }
      delIdx = arr.indexOf(max);
      //   console.log("max : ", arr[delIdx], delIdx);
      for (let i = 0; i < arr.length; i++) {
        if (i === delIdx) continue;
        else stack.push(arr[i]);
      }
      arr = stack;
      stack = [];
      frame -= 1;
    }

    let result = parseInt(arr.join(""));
    return result;
  }
  //   console.log(solution(2322113, 3)); // 2113
  //   console.log(solution(200200, 1)); // 200
  //   console.log(solution(123, 3)); // 0
  //   console.log(solution(12, 4)); // 0
  //   console.log(solution(99999, 2)); // 999
  //   console.log(solution(123456, 2)); // 1234
}
