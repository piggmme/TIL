// 문제 설명
// 약관에 모두 동의합니다
// 김토스는 토스에서 약관 동의를 받는 컴포넌트를 개발하고 있습니다. 약관에는 약관을 묶는 그룹이 존재합니다. 예를 들어, 토스뱅크에서 대출을 받을 때에는 아래와 같이 3개의 깊이로 구분된 약관 목록을 다뤄야 합니다.

// 전체 약관 동의
// 필수 약관 동의
// 토스뱅크 대출 상품설명서 동의
// 선택 약관 동의
// 마케팅 푸시 알림 수신 동의 (선택)
// 마케팅 SMS 수신 동의 (선택)
// 김토스는 다른 프론트엔드 개발자들이 이런 약관을 더 쉽게 다룰 수 있도록 라이브러리 클래스를 만들고자 합니다.

// 조건
// 약관은 다음 조건을 만족해야 합니다.

// 요구사항 1. 약관 사이의 관계
// 약관은 하위 약관을 가지거나, 가지지 않을 수 있습니다.

// 예를 들어, 가장 위의 약관에서 [필수 약관 동의] 약관은 [토스뱅크 대출 상품설명서 동의] 를 하위 약관으로 가집니다.

// 요구사항 2. 약관의 세 가지 상태
// 각 약관은 동의하거나(checked), 동의하지 않거나(unchecked), 일부만 동의한(indeterminate) 것 중 하나의 상태를 가집니다.

// 요구사항 3. 하위 약관이 없는 약관
// 하위 약관이 없는 경우, 동의(checked) 또는 동의하지 않음(unchecked)의 상태만 가집니다. 체크되면 동의 상태가 되고, 체크 해제되면 동의하지 않은 상태가 됩니다.

// 요구사항 4. 하위 약관이 있는 약관
// 하위 약관이 있는 경우, 상위 약관은 다음과 같은 상태를 가집니다.

// 모든 하위 약관에 동의함: 동의(checked)
// 모든 하위 약관에 동의하지 않음: 동의하지 않음(unchecked)
// 일부 하위 약관에만 동의함: 일부만 동의함 (indeterminate)
// 상위 약관을 체크하는 경우, 모든 하위 약관은 동의 상태가 됩니다. 체크 해제 하는 경우, 모든 하위 약관은 동의하지 않은 상태가 됩니다.

// 문제
// 약관을 쉽게 다룰 수 있도록 도와주는 CheckItem 클래스를 구현해주세요.

// CheckItem 클래스
// CheckItem 클래스는 약관 아이템을 나타내는 클래스입니다.

// type CheckState = 'checked' | 'unchecked' | 'indeterminate';

// interface CheckItemData {
//     id: string;
//     children: CheckItemData[];
// }

// class CheckItem {
//     static from(item: CheckItemData): CheckItem;

//     readonly id: string;
//     readonly state: CheckState;
//     readonly children: CheckItem[];

//     check(): void;
//     uncheck(): void;
//     toggle(): void;
// }
// CheckItem.from: CheckItem 객체를 생성합니다.
// CheckItem#id: 약관 ID(레이블)을 나타냅니다.
// CheckItem#state: 현재 약관 아이템의 동의 상태를 나타냅니다.
// CheckItem#children: 약관 아이템의 하위 아이템 목록을 나타냅니다.
// 빈 배열인 경우, 하위 약관 아이템이 없음을 의미합니다.
// CheckItem#check: 약관 아이템을 체크합니다.
// CheckItem#uncheck: 약관 아이템에 체크 해제합니다.
// CheckItem#toggle: 약관 아이템의 동의 상태를 바꿉니다.
// 약관 아이템이 동의(checked) 상태인 경우, 동의하지 않음(uncheck)으로 바꿉니다.
// 그 외의 상태(unchecked, intermediate)인 경우, 동의(checked) 상태로 바꿉니다.
// CheckItem 클래스 만들기
// CheckItem.from의 첫 번째 인자로 CheckItem을 만들 수 있는 CheckItemData 객체가 주어집니다. CheckItemData 는 아래와 같은 형태를 가지고 있습니다.

// const checkItemData: CheckItemData = {
//   id: '전체 약관',
//   children: [
//     {
//       id: '필수 약관',
//       children: [
//         {id: '토스뱅크 대출 상품설명서', children: []},
//       ]
//     },
//     {
//       id: '선택 약관',
//       children: [
//         { id: '마케팅 푸시 알림 수신', children: [] },
//         { id: '마케팅 SMS 수신', children: [] },
//     ]
//   },
// ]};
// CheckItemData.id: CheckItem#id에 대응됩니다.
// CheckItemData.children: CheckItem#children에 대응됩니다.
// 주어진 CheckItemData 객체로 CheckItem 클래스 인스턴스를 만들어주세요.

// 체크, 체크 해제, 토글하기
// 만들어진 CheckItem 클래스는 체크, 체크 해제, 토글 동작을 수행할 수 있어야 합니다. 이때 상위 또는 하위 약관의 상태도 함께 바뀌어야 한다는 점에 유의하세요.

// const checkItem = CheckItem.from({
//   id: '전체 약관',
//   children: [
//     {
//       id: '필수 약관',
//       children: [
//         {id: '토스뱅크 대출 상품설명서', children: []},
//       ]
//     },
//     {
//       id: '선택 약관',
//       children: [
//         { id: '마케팅 푸시 알림 수신', children: [] },
//         { id: '마케팅 SMS 수신', children: [] },
//     ]
//   },
// ]});

// checkItem.toggle();
// checkItem.check();

// /*
//  * find 함수는 checkItem의 하위 약관 중에서
//  * 같은 ID를 가지는 약관을 찾는 함수로, 내부적으로 구현되어 있습니다.
//  */
// find(checkItem, '필수 약관').uncheck();
class CheckItem {
  static from(...args) {
    return new CheckItem(...args);
  }

  constructor(/* ... */) {
    /*
     * 아래 3개 멤버는 필수로 존재해야 합니다.
     *
     *  id: string;
     *  state: CheckState;
     *  children: CheckItem[];
     * ...
     */
  }

  toggle() {
    /* ... */
  }

  check() {
    /* ... */
  }

  uncheck() {
    /* ... */
  }
}

/**
 * ---------------------------------------------------------
 * 채점을 위한 코드입니다.
 * 수정하면 정상적인 채점이 되지 않습니다.
 * 수정하지 말아주세요.
 * ---------------------------------------------------------
 */
function solution() {
  return { CheckItem };
}
