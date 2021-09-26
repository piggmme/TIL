// 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

// 제한사항을 잘 보자
// numbers의 길이는 1 이상 100,000 이하입니다. numbers의 원소는 0 이상 1,000 이하입니다.
// https://dailyheumsi.tistory.com/102
{
  function solution(numbers) {
    let answer = [];
    for (let n of numbers) {
      const strN = n + '';
      n = [...strN];
      while (n.length <= 4) {
        n.push(...strN);
      }
      n.splice(4);
      answer.push([n.slice().join('') * 1, strN]);
    }

    console.log(answer);
    answer.sort((a, b) => b[0] - a[0]);
    return answer.map(a => a[1]).join('') * 1 + '';
  }
  console.log(solution([6, 10, 2]));
  console.log(solution([3, 30, 34, 5, 9]));
  console.log(solution([0, 0, 0, 0]));
  console.log(solution([21, 212]));
  console.log(solution([40, 405])); // 40540
  console.log(solution([40, 403])); // 40403
  console.log(solution([70, 0, 0, 0])); // 70000
  console.log(solution([12, 1213]));
}

// 문자열로..풀어보기 => 땡
{
  function solution(numbers) {
    function sortNum(a, b) {
      [a, b] = a > b ? [a, b] : [b, a];
      const strA = Array.from(a + '');
      const temp = Array.from(b + '');
      let strB = Array(strA.length).fill('0');
      if (strA.length > temp.length) {
        strB.splice(0, temp.length, ...temp);
      }

      for (let i = 0; i < strA.length; i++) {
        if (strA[i] > strB[i]) return [a, b];
        else if (strA[i] < strB[i]) return [b, a];
      }
      return [b, a];
    }

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length - i - 1; j++) {
        numbers.splice(j, 2, ...sortNum(numbers[j], numbers[j + 1]));
      }
    }

    return numbers.join('');
  }
  //   console.log(solution([6, 10, 2]));
  //   console.log(solution([3, 30, 34, 5, 9]));
  //   console.log(solution([21, 212]));
  //   console.log(solution([0, 0, 0, 0]));
}

// DFS => 시간초과!!
{
  function solution(numbers) {
    const n = numbers.length;
    let answer = [0];
    let tmp = [];
    let ch = Array.from({ length: n }, () => 0);

    function DFS(L) {
      if (L === n) {
        if (answer.join('') + 0 < tmp.join('') + 0) answer = tmp.slice();
      } else {
        for (let i = 0; i < n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            tmp.push(numbers[i]);
            DFS(L + 1);
            tmp.pop();
            ch[i] = 0;
          }
        }
      }
    }
    DFS(0, 1);
    return answer.join('');
  }
  //   console.log(solution([6, 10, 2]));
  //   console.log(solution([3, 30, 34, 5, 9]));
  //   console.log(solution([0, 0, 0, 0]));
  //   [0, 0, 0, 0] 출력 "0"
  // [21, 212] 출력 "21221"
}
