{
  function solution(codeOwnersMap, directory) {
    let dir = directory.split("/");
    let n = dir.length;
    let tp = codeOwnersMap;
    let answer;

    let i = 0;
    for (; i < n; i++) {
      tp = tp[dir[i]];
      if (i === n - 1) {
        answer = tp;
      }
    }
    return answer;
  }

  const codeOwnersMap = {
    scripts: ["배수진"],
    services: {
      "business-ledger": ["고찬균", "배수진"],
      "toss-card": ["채주민", "유재섭"],
      payments: ["유재섭"],
    },
  };

  /* 예시 실행 결과 */
  // ['배수진']
  // solution(codeOwnersMap, "scripts");

  // ['고찬균', '배수진']
  solution(codeOwnersMap, "services/business-ledger");

  // ['유재섭']
  // solution(codeOwnersMap, "services/payments");
}
