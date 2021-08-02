// 1
// 한 개의 문자열 s가 주어지면 문자열의 각 문자의 빈도수를 계산하여 빈도수가 가장 큰 문자부터 내림차순으로 재정렬한 문자열을 출력하는 프로그램을 작성하세요. 단 대소문자를 구분합니다.

// ▣ 입력설명
// 매개변수 s에 길기가 10,000을 넘지 않는 문자열이 주어집니다.

// ▣ 출력설명
// 빈도수를 기준으로 내림차순한 문자열을 반환합니다. 만약 빈도수가 같은 문자가 존재하면 대문자가 소문자보다 우선하게 하고, 대문자끼리는 알파벳순으로 합니다.(소문자도 마찬가지입니다.) 다른 말로 표현하면 빈도수가 같을 경우 아스키번호 순으로 오름차순하라는 말입니다. 아스키번호 : 대문자 65~90, 소문자 97~122

// ▣ 매개변수 형식 1
// aaAAcccbbbBB

// ▣ 반환값 1
// bbbcccAABBaa

// ▣ 매개변수 형식 2
// kdkDKKGkdkgks

// ▣ 반환값 2
// kkkkkKKddDGgs
{
  function solution(str) {
    let n = str.length;
    let nH = new Map();
    let arr = [];
    let result = [];

    for (let i = 0; i < n; i++) {
      nH.set(str[i], nH.get(str[i]) + 1 || 1);
    }
    for (let [key, val] of nH) {
      arr.push([key, val]);
    }
    arr.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt()).join("");
    arr.sort((a, b) => b[1] - a[1]);

    for (let x of arr) {
      for (let i = 0; i < x[1]; i++) result.push(x[0]);
    }
    return result.join("");
  }
  //  console.log(solution("aaAAcccbbbBB")); // bbbcccAABBaa
  //  console.log(solution("kdkDKKGkdkgks")); //kkkkkKKddDGgs
}
// 2
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 곱이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=5, M=20이고 수열이 다음과 같다면
// 2 3 3 2 5
// 곱이 20이하가 되는 연속부분수열은 {2}, {3}, {3}, {2}, {5}, {2, 3}, {3, 3}, {3, 2}, {2, 5}, {2, 3, 3}, {3, 3, 2} 로 총 11개입니다.

// ▣ 입력설명
// 매개변수 nums에 N(1≤N≤100,000)길이의 수열이 주어집니다.
// 매개변수 m에 M(1≤M≤100,000,000)이 주어집니다.
// 수열의 원소값은 1,000을 넘지 않는 자연수입니다.

// ▣ 출력설명
// 경우의 수를 반환합니다.

// ▣ 매개변수 형식 1
// [1, 2, 3], 1

// ▣ 반환값 형식 1
// 1

// ▣ 매개변수 형식 2
// [2, 3, 3, 2, 5], 20

// ▣ 반환값 형식 2
// 11

// ▣ 매개변수 형식 3
// [1, 1, 1, 1], 3

// ▣ 반환값 형식 3
// 10
{
  function solution(nums, m) {
    let n = nums.length;
    let answer = 0;
    let acc = 1;
    let lt = 0;
    for (let rt = 0; rt < n; rt++) {
      acc *= nums[rt];
      while (acc > m) {
        acc /= nums[lt++];
      }
      answer += rt - lt + 1;
    }
    return answer;
  }
  // console.log(solution([2, 3, 3, 2, 5], 20)); // 11
  // console.log(solution([1, 2, 3], 1)); // 1
  // console.log(solution([1, 1, 1, 1], 3)); // 10
  //console.log(solution());
}
// 3
// 압축된 결과의 문자열이 주어지면 다시 원 상태로 압축을 해제하여 출력하는 프로그램을 작성하세요.
// 압축된 결과가 3(ab) 라고 주어지면 괄호안에 문자열이 3번 반복된 것을 압축했다는 의미입니다. 이걸 원상태로 해제한 것은 “ababab”입니다.
// 만약 2(ab)k3(bc) 를 압축해제 하면 "ababkbcbcbc"입니다. 2(ab)k3(bc)에서 k문자열과 같이 반복횟수가 1인 경우는 숫자를 생략하고 압축되어 있습니다. 또한 겹쳐서 압축된 2(a2(b))을 압축해제하는 과정은 2(a2(b))-->2(abb)-->abbabb로
// 2(a2(b))를 압축해제한 결과는 abbabb입니다.

// ▣ 입력설명
// 매개변수 s에 압축된 결과가 주어집니다. 괄호안의 문자열의 반복횟수는 30을 넘지 않습니다.
// 압축을 해제했을 경우 총 길이는 1000을 넘지 않도록 입력이 주어집니다.
// 문자는 소문자로만 주어집니다.

// ▣ 출력설명
// 압축을 해제한 결과를 반환합니다.

// ▣ 매개변수 형식 1
// 2(ab)k3(bc)

// ▣ 반환값 1
// ababkbcbcbc

// ▣ 매개변수 형식 2
// 3(a2(b))ef

// ▣ 반환값 2
// abbabbabbef

// try again Using stack!!
{
  function solution(str) {
    let n = str.length;
    let stack = [];

    for (let i = 0; i < n; i++) {
      // )를 만나면 그만 넣고, 반복시작해
      if (str[i] === ")") {
        let tmp = [];
        while (stack[stack.length - 1] !== "(") tmp.unshift(stack.pop());
        stack.pop(); // "(" 지움

        // 반복할 숫자 결정.
        let n1 = stack.pop();
        let n2 = stack.pop();
        // 2자리 수 처리
        if (isNaN(n2)) stack.push(n2);
        else {
          n2 += n1;
          n1 = n2;
        }

        // 숫자 만큼 반복함.
        for (let j = 0; j < parseInt(n1); j++) {
          stack.push(...tmp);
        }
      } else {
        // 문자나 여는 괄호일 경우
        stack.push(str[i]);
      }
    }
    return stack.join("");
  }
  console.log(solution("3(ab)")); // ababab
  console.log(solution("12(ab)")); // ababab
  console.log(solution("k2(asd3(f))")); // kasdfffasdfff
  console.log(solution("2(ab)k3(bc)")); // ababkbcbcbc
  console.log(solution("3(a2(b))ef")); // abbabbabbef
  console.log(solution("2(a2(b))")); //  abbabb
}

// mysol
{
  function solution(str) {
    let stack = [];
    let num = 0;
    let idx = 0;
    let flag = false;
    let result = "";
    for (let x of str) {
      if (!isNaN(x)) {
        stack.push([idx, x]);
      } else if (x === "(") {
      } else if (x === ")") {
        flag = true;
      } else {
        result += x;
        idx += 1;
      }

      if (stack && flag) {
        let con = stack.pop();
        let temp = result.slice(con[0]);
        for (let i = 0; i < con[1] - 1; i++) {
          result += temp;
          idx += temp.length;
        }
        flag = false;
      }
    }
    return result;
  }
  // console.log(solution("3(ab)")); // ababab
  // console.log(solution("k2(asd3(f))")); // kasdfffasdfff
  // console.log(solution("2(ab)k3(bc)")); // ababkbcbcbc
  // console.log(solution("3(a2(b))ef")); // abbabbabbef
  // console.log(solution("2(a2(b))")); //  abbabb
  // console.log(solution("2(a2(b2(c(2d))))"));
}
