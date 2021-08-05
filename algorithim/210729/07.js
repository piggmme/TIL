// 7. 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// ▣ 입력설명
// 매개변수 s에 S문자열이 입력되고, 매개변수 t에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 반환합니다.
// ▣ 매개변수 형식 1
// bacacbcba, abc
// ▣ 반환값 형식 1
// 3
// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
// ▣ 매개변수 형식 2
// bacaAacba, abc
// ▣ 반환값 형식 2
// 3

// Sol)
// sH : {a : -1, b: -1, c: -1}
// sH.size === 0 : 일때 아나그램
{
  function solution(s, t) {
    let answer = 0;
    let sH = new Map();
    let lt = 0;

    for (let x of t) {
      sH.set(x, sH.get(x) - 1 || -1);
    }
    let len = t.length - 1;
    for (let i = 0; i < len; i++) {
      if (sH.get(s[i]) === -1) sH.delete(s[i]);
      else sH.set(s[i], sH.get(s[i]) + 1 || 1);
    }

    for (let rt = len; rt < s.length; rt++) {
      if (sH.get(s[rt]) === -1) sH.delete(s[rt]);
      else sH.set(s[rt], sH.get(s[rt]) + 1 || 1);

      if (sH.size === 0) answer++;
      if (sH.get(s[lt]) === 1) sH.delete(s[lt]);
      else sH.set(s[lt], sH.get(s[lt]) - 1 || -1);
      lt++;
    }
    return answer;
  }
  //  console.log(solution("bAcacbcba", "abc")); // 2 => 대소문자 구별!!
  // console.log(solution("bacacbcba", "abc")); // 3
  // console.log(solution("bacaAacba", "abc")); // 3
  // console.log(solution("bacddacba", "abc")); // 3
  //console.log(solution("bacacbcba", "aabc")); // 1
}

// MySol) => 틀린코드. 수정필요! : 중복된 문자는 해결 못함 ㅠ,ㅠ
// 그냥 이렇게 하면 안될거같음.
{
  function solution(S, T) {
    let n = S.length;
    let k = T.length;
    let sH = new Map();
    let tH = new Map();
    let start = 0,
      end = k - 1;
    let result = 0;

    // T 값 설정
    for (let i = 0; i < k; i++) {
      tH.set(T[i], 1);
    }

    // S의 초기 k개의 문자를 해쉬에 삽입.
    // 근데 그게 T 조건에 만족되었있을 때...
    for (let i = 0; i < k; i++) {
      if (tH.has(S[i])) {
        if (!sH.get(S[i])) sH.set(S[i], 1);
        else sH.set(S[i], sH.get(S[i]) + 1);
      }
    }
    // 만약 조건에 해당하지 않는다면 result 그대로..
    if (sH.size === k) result += 1;

    // end, start 밀고 가면서 확인
    for (let i = k; i < n; i++) {
      // T 조건에 만족되었있을 때...
      if (tH.has(S[start])) {
        if (sH.get(S[start]) > 1) sH.set(S[start], sH.get(S[start]) - 1);
        else sH.delete(S[start]);
      }
      start++;
      end++;

      if (tH.has(S[i])) {
        if (!sH.get(S[i])) sH.set(S[i], 1);
        else sH.set(S[i], sH.get(S[i]) + 1);
      }
      if (sH.size === k) result += 1;
    }

    return result;
  }
  // console.log(solution("bacacbcba", "abc")); // 3
  // console.log(solution("bacaAacba", "abc")); // 3
  // console.log(solution("bacddacba", "abc")); // 3
  // console.log(solution("bacacbcba", "aabc")); // 1이여야 하는데 0이다..!! ㅜㅜ
}
