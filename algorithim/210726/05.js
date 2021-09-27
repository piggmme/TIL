// 5. 회문문자열2 => two point algorithm
// 문자열 s가 주어지면 s가 최대 문자 1개까지 지워서 회문문자열이 되면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.
// abcabbakcba
// 변수명 : lt, rt
// 통과가 안되는 순간 => substring

// ▣ 입력설명
// 매개변수 s에 길이 100을 넘지 않는 문자열이 주어집니다.
// ▣ 출력설명
// “YES" or "NO"를 반환합니다.
// ▣ 매개변수 형식 1
//abcbdcba
// ▣ 반환값 형식 1
//YES
// ▣ 매개변수 형식 2
//abcabbakcba;
// ▣ 반환값 형식 2
//YES
// ▣ 매개변수 형식 3
//abcacbakcba
// ▣ 반환값 형식 3
//NO

{
  // Sol)
  function solution(s) {
    let lt = 0,
      rt = s.length - 1; // 끝문자 인덱스번호는 -1
    while (lt < rt) {
      if (s[lt] !== s[rt]) {
        let s1 = s.substring(lt, rt);
        let s2 = s.substring(lt + 1, rt + 1);
        if (
          s1.split("").reverse().join("") !== s1 &&
          s2.split("").reverse().join("") !== s2
        )
          return "NO";
        else return 'YES';
      } else {
        lt++;
        rt--;
      }
    }
    return "YES";
  }
}
{
  // MySol )
  function solution(s) {
    let lt = 0,
      rt = s.length - 1; // 끝문자 인덱스번호는 -1
    while (lt < rt) {
      if (s[lt] === s[rt]) {
        lt += 1;
        rt -= 1;
        continue;
      } else {
        // 다를 때, 기회 1번
        let temp = s.substring(lt, rt); // rt 자르기
        if (s[lt] === s[rt - 1]) {
          lt += 1;
          rt -= 1;
          continue;
        }

        temp = s.substring(lt + 1, rt + 1); // lt 자르기
        if (s[lt + 1] === s[rt]) {
          lt += 1;
          rt -= 1;
          continue;
        }

        return "NO"; // 문자 잘라도 회문이 안됨.
      }
    }
    return "YES";
  }

  // console.log(solution("abcbdcba"));
  // console.log(solution("abcabbakcba"));
  // console.log(solution("abcacbakcba"));
}
