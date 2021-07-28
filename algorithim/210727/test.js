// 가장 긴 바이토닉 수열
// 바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미한다
// 길이가 N인 수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉 수열의 길이를 찾는 프로그램을 작성해라
// 만약 수열이 [3,2,5,6,4,3,7] 이면 가장 긴 바이토닉 수열은 [2,5,6,4,3]이다
// 우리가 찾는 바이토닉 수열은 길이가 3 이상이여야 하고, 반드시 증가했다 감소하는 수열이여야 한다.

// Sol) 강사님 솔루션
{
  function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dist = Array.from({ length: n }, () => 0);
    let ch = Array.from({ length: n }, () => 0);
    ch[0] = 1;
    let d = 1;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] < arr[i]) {
        d++;
        dist[i] = d;
      } else {
        d = 1;
        ch[i] = 1;
      }
    }
    d = 1;
    ch[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[i + 1]) {
        d++;
        dist[i] += d;
      } else {
        d = 1;
        ch[i] = 1;
      }
    }
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0 && dist[i] - 1 > answer) {
        answer = dist[i] - 1;
      }
    }
    return answer;
  }
  //console.log(solution([7, 4, 8])); //0
  //console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
  //console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
  //console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
  //console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
  //console.log(solution([1, 1, 1, 1, 1])); //0
  //console.log(solution([5, 4, 3, 2, 1])); //0
  //console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
  //console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
  //console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3
}

// Sol2) 앞에서 밀면서 증가 순열 찾고, 뒤에서 밀면서 감소 순열 찾아서, 두 순열이 이어져있다면 바이토닉!
{
  function solution(arr) {
    let n = arr.length;
    let up = {};
    let down = {};
    let temp = [];
    let cnt = [];

    // 증가하는 순열 찾아서 저장!
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        temp.push(arr[i]);
      } else {
        if (temp.length > 0) {
          // 이전에 증가했다면,
          temp.push(arr[i]);
          up[i] = temp; // 인덱스 값을 키로 하고, 수열을 저장.
          temp = [];
        }
      }
    }

    // 감소하는 순열 찾아서 저장!
    temp = [];
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[i + 1]) {
        // 감소중
        temp.push(arr[i + 1]);
      } else {
        if (temp.length > 0) {
          // 이전에 감소했다면,
          down[i + 1] = temp; // 인덱스 값을 키로 하고, 수열을 저장.
          temp = [];
        }
      }
    }

    // 바이토닉 찾기
    for (let key in up) {
      if (key in down) {
        cnt.push(up[key].length + down[key].length);
      }
    }
    return cnt.length === 0 ? 0 : Math.max(...cnt);
  }

  console.log(solution([1, 2, 3, 4, 3, 2, 1])); // 7
  console.log(solution([7, 4, 8])); //0
  console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
  console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
  console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
  console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
  console.log(solution([1, 1, 1, 1, 1])); //0
  console.log(solution([5, 4, 3, 2, 1])); //0
  console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
  console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
  console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3
}

// Sol1)
{
  function solution(arr) {
    let up = 0;
    let cnt = 1;
    let bitonic = [];
    let flag = 0;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        // 증가
        // 바이토닉 시작
        if (flag === 1) {
          // 바이토닉이 끊긴것.
          bitonic.push(cnt); // 카운트 되었다면 추가.
          // 값들 초기화
          flag = 0;
          up = 0;
          cnt = 1;
        }
        up = 1;
        cnt += 1; // 바이토닉 길이 카운트
      } else if (arr[i] > arr[i + 1]) {
        // 감소
        if (up === 1) {
          // 증가했다가 감소 시작.
          up = 0;
          flag = 1; // 바이토닉임을 나타냄
        }
        if (flag === 1) cnt += 1; // 바이토닉이고, 감소중. 길이 카운트
      } else {
        // 증가도, 감소도 하지 않음
        if (flag === 1) bitonic.push(cnt); // 카운트 되었다면 추가.
        // 초기화.
        flag = 0;
        up = 0;
        cnt = 1;
      }
    }
    if (flag === 1) bitonic.push(cnt); // 마지막 바이토닉 길이 카운트

    if (bitonic.length === 0) return 0;
    else return Math.max(...bitonic);
  }

  // console.log(solution([7, 4, 8])); //0
  // console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
  // console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
  // console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
  // console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
  // console.log(solution([1, 1, 1, 1, 1])); //0
  // console.log(solution([5, 4, 3, 2, 1])); //0
  // console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
  // console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
  // console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3
}
