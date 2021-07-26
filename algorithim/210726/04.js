// 4.공통문자가 없는 단어
// N개의 문자열이 주어지면 서로 공통문자가 없는 두 문자열을 선택해 두 문자열의 길이를 곱했 을 때 최댓값을 출력하는 프로그램을 작성하세요.
// nC2 => 이중 for문

// My SOL)
{
  function isUnique(s1, s2) {
    let compare = {};
    let x, y;
    if (s1.length < s2.length) {
      x = s2;
      y = s1;
    } else {
      x = s1;
      y = s2;
    }

    for (let i = 0; i < x.length; i++) {
      if (x[i] in compare);
      else compare[x[i]] = 1;
    }
    for (let i = 0; i < y.length; i++) {
      if (y[i] in compare) return false;
    }
    return true;
  }
  function solution(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (isUnique(arr[i], arr[j])) {
          let tmp = arr[i].length * arr[j].length;
          answer = Math.max(answer, tmp);
        }
      }
    }
    return answer;
  }
  //console.log(solution(["skudy", "kstue", "time", "back", "good"]));
  //console.log(solution(["kk", "k", "kkk", "kkkkk", "kkkk"]));
}

// SOL)
{
  function isUnique(short, long) {
    for (let x of short) {
      if (long.indexOf(x) !== -1) return false;
    }
    return true;
  }
  function solution(words) {
    let answer = 0;
    let len = words.length;
    words.sort((a, b) => a.length - b.length); // 문자열 길이 작은것 순서대로
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (isUnique(words[i], words[j])) {
          let tmp = words[i].length * words[j].length;
          answer = Math.max(answer, tmp);
        }
      }
    }

    return answer;
  }
  //console.log(solution(["skudy", "kstue", "time", "back", "good"]));
}
