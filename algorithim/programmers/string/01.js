// string
// 문자열 압축

// 데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
// 간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

// 예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

// 다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

// 압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// s의 길이는 1 이상 1,000 이하입니다.
// s는 알파벳 소문자로만 이루어져 있습니다.
// 입출력 예
// s	result
// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17
// 입출력 예에 대한 설명
// 입출력 예 #1

// 문자열을 1개 단위로 잘라 압축했을 때 가장 짧습니다.

// 입출력 예 #2

// 문자열을 8개 단위로 잘라 압축했을 때 가장 짧습니다.

// 입출력 예 #3

// 문자열을 3개 단위로 잘라 압축했을 때 가장 짧습니다.

// 입출력 예 #4

// 문자열을 2개 단위로 자르면 "abcabcabcabc6de" 가 됩니다.
// 문자열을 3개 단위로 자르면 "4abcdededededede" 가 됩니다.
// 문자열을 4개 단위로 자르면 "abcabcabcabc3dede" 가 됩니다.
// 문자열을 6개 단위로 자를 경우 "2abcabc2dedede"가 되며, 이때의 길이가 14로 가장 짧습니다.

// 입출력 예 #5

// 문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
// 따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
// 이 경우 어떻게 문자열을 잘라도 압축되지 않으므로 가장 짧은 길이는 17이 됩니다.

// 앞에서부터 자르기! 배열에...
// 제출한 답!
{
  function slice_n(str, n) {
    let result = [];
    let i = 0;
    for (; i <= str.length - n; i += n) {
      result.push(str.slice(i, i + n));
    }
    if (i < str.length) result.push(str.slice(i));
    return result;
  }
  function solution(s) {
    let answer = 0;
    let n = s.length;
    let part = [];
    let set = [];

    // 문자열 1개인 경우, 따로 처리...
    if (s.length === 1) return 1;

    // 자를 수 있는가?
    for (let i = 1; i <= parseInt(n / 2); i++) {
      let tp = slice_n(s, i);
      let lt = 0,
        rt = 1,
        cnt = 1;
      for (; rt < tp.length; rt++) {
        if (tp[lt] === tp[rt]) {
          cnt += 1;
        } else {
          if (cnt > 1) {
            part.push(cnt, tp[lt]);
            lt = rt;
          } else {
            part.push(tp[lt]);
            lt = rt;
          }
          cnt = 1;
        }
      }
      if (cnt > 1) {
        part.push(cnt, tp[lt]);
        lt = rt;
      } else {
        part.push(tp[lt]);
        lt = rt;
      }
      //  console.log(part, String(part.join("")).length);
      set.push(String(part.join("")).length);
      part = [];
    }

    return Math.min(...set);
  }
  //   console.log(solution("aabbaccc")); // 7
  //   console.log(solution("ababcdcdababcdcd")); // 9
  //   console.log(solution("abcabcdede")); // 8
  //  console.log(solution("abcabcabcabcdededededede")); // 14
  // console.log(solution("xababcdcdababcdcd")); // 17
  console.log(solution("a")); //1
  console.log(solution("aaaaa")); //2
  console.log(solution("aaaaaaaaaa")); //3
}

// 이건 답 아님
// 문자열 앞에서부터 잘라야하는지 몰랐지 ..ㅋㅋㅋ 휴 이거는 중간부터 잘라도 되는 풀이..
{
  function solution(s) {
    let answer = 0;
    let n = s.length;
    let part = "";
    let set = [];

    // 자를 문자 갯수 1~n/2개
    let i = 1;
    for (let i = 1; i <= parseInt(n / 2); i++) {
      // 기준 문자열을 찾는다.
      //  console.log("i=", i);
      let total_cnt = 0;
      for (let j = 0; j <= n - 2 * i; j++) {
        let str = s.slice(j, j + i);
        let cnt = 1;
        // console.log(j, j + i, str);
        // 기준 문자열과 동일한 문자열이 존재하는가?
        for (let k = j + i; k <= n - i; k += i) {
          let tp = s.slice(k, k + i);
          //    console.log(">", tp);
          if (tp === str) {
            cnt += 1;
          } else {
            break;
          }
        }
        if (cnt > 1) {
          part += String(cnt);
          part += str;
          j += cnt * i - 1;
          total_cnt += cnt * i;
        }
      }
      // 전체 문자열 수에서 반복한 횟수만 빼면, 남은 붙여할 문자열 수!
      console.log("part=", part, total_cnt);
      set.push(part.length + (n - total_cnt));
      part = [];
    }
    // console.log(set);
    return Math.min(...set);
  }
  //   console.log(solution("aabbaccc")); // 7
  //   console.log(solution("ababcdcdababcdcd")); // 9
  //   console.log(solution("abcabcdede")); // 8
  //   console.log(solution("abcabcabcabcdededededede")); // 14
  // console.log(solution("xababcdcdababcdcd")); // 17
}
