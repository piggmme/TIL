// 7. 아나그램
// Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아 나그램이라고 합니다.
// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만
// 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
// 즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세 요. 아나그램 판별시 대소문자가 구분됩니다.

// ▣ 입력설명
// 매개변수 s1에 첫 번째 단어가 입력되고, 매개변수 s2에 두 번째 단어가 입력됩니다. 단어의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 두 단어가 아나그램이면 “YES"를 반환하고, 아니면 ”NO"를 반환합니다.
// ▣ 입력예제 1
// AbaAeCe, baeeACA
// ▣ 출력예제 1
// YES
// ▣ 입력예제 2
// abaCC, Caaab
// ▣ 출력예제 2
// NO

{
  // Sol)
  function solution(s1, s2) {
    let answer = "YES";
    let sH = new Map();

    if (s1.length !== s2.length) return "NO";

    for (let x of s1) {
      sH.set(x, sH.get(x) + 1 || 1);
    }
    for (let x of s2) {
      if (!sH.has(x) || sH.get(x) === 0) return "NO";
      sH.set(x, sH.get(x) - 1);
    }
    return answer;
  }
}

{
  // MySol)
  function solution(s1, s2) {
    let hash1 = new Map();
    let hash2 = new Map();
    if (s1.length !== s2.length) return "NO";

    for (let i = 0; i < s1.length; i++) {
      hash1.set(s1[i], hash1.get(s1[i]) + 1 || 1);
      hash2.set(s2[i], hash2.get(s2[i]) + 1 || 1);
    }
    for (let [key, value] of hash1) {
      if (hash2.get(key) !== value) {
        return "NO";
      }
    }
    return "YES";
  }
  console.log(solution("AbaAeCe", "baeeACA"));
  console.log(solution("abaCC", "Caaab"));
}
