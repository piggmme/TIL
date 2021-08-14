// 문제 설명
// 내게 맞는 보험 전문가는?
// 김토스는 토스 사용자들과 보험 전문가들을 채팅으로 잇는 "토스보험파트너" 애플리케이션을 개발하고 있습니다.

// 김토스는 앱을 이용하는 사용자들에게 지금 온라인 상태인 보험 전문가의 목록을 보여주는 새로운 기능을 구현해야 합니다. 이것을 구현하기 위해서 (1) 현재 보험 전문가의 목록을 반환하는 비동기 함수와, (2) 한 보험 전문가가 지금 온라인 상태인지 여부를 반환하는 비동기 함수가 준비되어 있습니다.

// 문제
// 주어진 함수를 조합하여 현재 온라인 상태인 보험 전문가의 목록을 반환하는 solution 함수를 작성하세요.

// 주어진 비동기 함수 목록
// 필요한 비동기 함수들은 solution 함수의 인자로 주어집니다.

// 보험 전문가 목록 가져오기: fetchExperts
// fetchExperts(): Promise<string[]>
// ['배수진', '유재섭', '고찬균'] 과 같이 보험 전문가 이름 목록을 비동기로 반환합니다.
// 이 함수는 작업을 완료하는 데에 100ms의 시간이 걸립니다.
// 어떤 보험 전문가가 온라인 상태인지를 확인하기: fetchIsExpertOnline
// fetchIsExpertOnline(name: string): Promise<boolean>
// fetchExperts 가 반환한 보험 전문가 가운데 한 명의 이름을 받아서, 그 보험 전문가가 온라인 상태인지 여부를 비동기로 반환합니다.
// 이 함수는 작업을 완료하는 데에 50ms ~ 70ms의 시간이 걸립니다.
// 조건
// 최상의 사용자 경험을 제공하기 위해 작성하는 함수는 200ms 안에 작업을 완료해야 합니다.
// 온라인 상태인 보험 전문가 목록은 fetchExperts 함수가 반환하는 보험 전문가의 순서대로 반환해야 합니다.
// 예를 들어, fetchExperts 함수가 보험 전문가 ['A', 'B', 'C'] 3명을 반환하고, A와 C가 온라인이라면, 정답 함수는 ['A', 'C'] 를 반환해야 합니다.
// ['C', 'A'] 와 같이 보험 전문가의 순서가 바뀌어서는 안 됩니다.
// "작업을 완료한다" 는 함수가 반환하는 Promise가 resolve되었음을 의미합니다.
// fetchExperts, fetchIsExpertOnline 함수는 reject하는 Promise를 반환하지 않습니다.

{
  /*
   * 현재 온라인인 보험 전문가의 목록을 반환하도록 함수를 작성해주세요.
   * (반환 타입: Promise<string[]>)
   */
  function solution(fetchExperts, fetchIsExpertOnline) {
    // 보험 전문가의 목록을 반환하는 비동기 함수 (반환 타입: Promise<string[]>)
    // fetchExperts();

    // // 보험 전문가가 온라인인지 여부를 반환하는 함수 (반환 타입: Promise<boolean>)
    // fetchIsExpertOnline("배수진");
    let name;

    setTimeout(() => {
      name = fetchExperts();
    }, 100);

    return [];
  }
}
