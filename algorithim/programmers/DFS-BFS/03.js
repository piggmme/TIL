// 소수 찾기
// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
// 입출력 예
// numbers	return
// "17"	3
// "011"	2
// 입출력 예 설명
// 예제 #1
// [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

// 예제 #2
// [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

// 11과 011은 같은 숫자로 취급합니다.

// 풀이1
// DFS로 순열을 1~n개 뽑는다. (순서 o, 중복 x)
// 뽑은 수가 소수인지 확인한다.
{
  function isPrime(x) {
    if (x === 1 || x === 0) return false;
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  function solution(numbers) {
    let prime = new Map();
    let part = [];
    let n = numbers.length;
    let ch = Array(n).fill(0);

    function DFS(L, k) {
      if (L === k) {
        let tp = parseInt(part.join(""));
        if (isPrime(tp)) {
          prime.set(tp, prime.get() + 1 || 1);
        }
      } else {
        for (let i = 0; i < n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            part.push(numbers[i]);
            DFS(L + 1, k);
            part.pop();
            ch[i] = 0;
          }
        }
      }
    }
    for (let i = 1; i <= n; i++) {
      DFS(0, i);
    }

    return prime.size;
  }
  // console.log(solution("17")); // 3
  // console.log(solution("011")); // 2
}
