// 최소값 만들기
// 자연수 N이 주어지면 N의 각 자릿수 중 K개를 지워 최솟값을 만드는 프로그램을 작성해라
// N = 2322113, K = 3이면 => 2113
// 제일 앞자리의 0은 자릿수로 인정하지 않는다.

// Sol)
{
  function solution(nums, k) {
    let answer;
    let stack = [];
    let str = nums.toString();

    for (let x of str) {
      while (k > 0 && stack.length && stack[stack.length - 1] > x) {
        stack.pop();
        k--;
      }
      stack.push(x);
    }
    answer = stack.join("");
    answer = answer.substring(0, answer.length - k);
    if (answer.length === 0) return 0;
    return Number(answer);
  }
}

// Sol) Stack !!
{
  function solution(num, k) {
    let answer;
    let stack = [];
    num = String(num);

    if (num.length === k) return 0;

    for (let i = 0; i < num.length; i++) {
      /*
      스택이 비어있지 않고 k가 0보다 크고 
      스택의 상단이 num[i]보다 크면 계속 pop해준다
      */
      while (stack.length !== 0 && k > 0 && stack[stack.length - 1] > num[i]) {
        stack.pop();
        k--;
      }
      //그리고 push
      stack.push(num[i]);
    }

    //k가 0보다 크면 계속 k가 0이될때까지 계속 pop한다.
    while (k > 0) {
      stack.pop();
      k--;
    }

    answer = stack.join("");
    answer = Number(answer);

    return answer;
  }

  console.log(solution(2322113, 3)); //2113
  console.log(solution(200200, 1)); //200
  console.log(solution(123, 3)); //0
  console.log(solution(23000, 2)); //0
  console.log(solution(23000, 1)); //2000
  console.log(solution(625437, 2)); //2437
  console.log(solution(625437, 3)); //237
  console.log(solution(625437, 4)); //23
  console.log(solution(625437, 5)); //2
  console.log(solution(625437, 6)); //0
  console.log(solution(654321, 3)); //321
  console.log(solution(2322113, 4)); //113
  console.log(solution(2322113, 5)); //11
  console.log(solution(2322113, 1)); //222113
}

// mySol)
{
  function solution(num, k) {
    let stack = [];
    let arr = String(num).split("");
    if (k >= arr.length) {
      return 0;
    }
    while (k > 0) {
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
