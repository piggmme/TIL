// 어디에서 왔니
// 김토스는 토스에서 새로운 서비스의 로그인 화면을 개발하고 있습니다. 로그인 화면에서는 사용자가 어디에서 왔는지에 따라 다른 문구를 보여주어야 합니다.

// 사용자가 어디에서 왔는지는 쿼리 문자열(Query String)으로 주어집니다.

// ?from=main: 메인 화면에서 진입
// ?from=facebook&from=ad: 페이스북 광고에서 진입
// ?from=facebook&from=article: 페이스북 게시글을 클릭해서 진입
// 이에 효과적으로 대응하기 위해서 김토스는 쿼리 문자열을 정확하게 처리하려고 합니다.

// 문제
// 쿼리 문자열을 객체로 파싱하는 함수 parseSearch를 작성해주세요.

// 예시
// 예시 1:

// 입력: ""
// 출력: {}
// 예시 2:

// 입력: "?from=twitter"
// 출력: { "from": "twitter" }
// 예시 3:

// 입력: ?range=1&range=8
// 출력: { "range": ["1", "8"] }
// 입력
// parseSearch 함수의 인자로 쿼리 문자열 search가 주어집니다.

// 쿼리 문자열
// 쿼리 문자열은 비어 있거나 ? 으로 시작합니다.
// 쿼리 문자열이 ? 으로 시작하는 경우, =와 &으로 연결된 키-값의 쌍이 이어집니다.
// 예시: ?key1=value1&key2=value2
// 키와 값은 =로 연결되며, 각 쌍은 & 문자열로 연결됩니다.
// 키와 값 문자열은 비어 있지 않고, =나 & 문자를 포함하지 않습니다.
// 같은 키를 가지는 여러 개의 키-값 쌍이 존재할 수 있습니다.
// 출력
// 쿼리 문자열을 파싱한 객체를 반환해주세요.

// 쿼리 문자열이 비어 있다면, 빈 객체 {} 를 반환합니다.
// 쿼리 문자열의 키는 객체의 키가 됩니다.
// 쿼리 문자열의 키가 유일한 경우, 객체는 키의 문자열 값을 가집니다.
// 예시: ?key=value -> { "key": "value" }
// 쿼리 문자열의 키가 유일하지 않은 경우, 객체는 키의 모든 문자열 값을 배열로 가집니다.
// 예시: ?key=1&key=2&key=3 -> { "key": ["1", "2", "3"] }
// 조건
// URL 인코딩은 고려하지 않습니다.

// 3번 문제 풀이 시 string 문자를 삭제하고 문제 풀이 가능합니다.
{
  function parseSearch(search) {
    /* 쿼리 문자열 `search`를 파싱하는 함수를 작성해주세요. */
    let answer = {};

    // ?로 시작하지 않은경우
    if (search[0] !== "?") return answer;

    // search 안을 탐색
    let key_start = 0,
      val_start = 0;
    let tp_key = null;
    let i = 0;
    for (; i < search.length; i++) {
      if (search[i] === "?" || search[i] === "&") {
        if (tp_key) {
          if (answer[tp_key] === null) {
            // 완전 처음 넣는 것
            answer[tp_key] = search.slice(val_start, i);
          } else if (
            // null이 아니고, 배열이라면, 처음 넣는 것이 아님
            answer[tp_key] !== null &&
            Array.isArray(answer[tp_key])
          ) {
            answer[tp_key].push(search.slice(val_start, i));
          } else {
            // 이제 두번째 넣을 차례
            let tp = [answer[tp_key]];
            answer[tp_key] = tp.push(search.slice(val_start));
          }
        }
        key_start = i + 1;
      } else if (search[i] === "=") {
        tp_key = search.slice(key_start, i);
        if (!(tp_key in answer)) answer[tp_key] = null;

        val_start = i + 1;
      }
    }
    if (answer[tp_key] === null) {
      // 완전 처음 넣는 것
      answer[tp_key] = search.slice(val_start);
    } else if (answer[tp_key] !== null && Array.isArray(answer[tp_key])) {
      // null이 아니고, 배열이라면, 처음 넣는 것이 아님
      answer[tp_key].push(search.slice(val_start));
    } else {
      // 이제 두번째 넣을 차례
      let tp = [answer[tp_key]];

      tp.push(search.slice(val_start));
      answer[tp_key] = tp;
    }
    // console.log(search.slice(val_start));

    return answer;
  }
  console.log(parseSearch(""));
  console.log(parseSearch("?from=twitter"));
  console.log(parseSearch("?range=1&range=8"));
}
