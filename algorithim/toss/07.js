// 문제 설명
// 날짜 범위 더하고 빼기
// 김토스는 날짜 범위를 선택할 수 있는 DateRangePicker 컴포넌트를 개발하고 있습니다.

// 날짜 범위란, (연도, 월, 일)으로 구성된 시작일-종료일의 쌍을 말합니다. 시작일과 종료일에서 시간 이하의 단위는 고려하지 않습니다.

// 김토스는 이런 날짜 범위를 다루는 여러 가지 연산을 구현해야 한다는 것을 알게 되었습니다.

// merge: 2개의 날짜 범위를 합칠 수 있어야 합니다.
// contains: 하나의 날짜 범위가 다른 날짜 범위를 포함하는지 판단할 수 있어야 합니다.
// equals: 2개의 날짜 범위가 같은지 판단할 수 있어야 합니다.
// 2개의 날짜 범위가 같다는 것은 시작일과 종료일이 같은 것으로 정의합니다.
// overlaps: 2개의 날짜 범위가 겹치는지 판단할 수 있어야 합니다.
// 2개의 날짜 범위가 겹친다는 것은 먼저 시작하는 날짜 범위의 종료일이 나중에 시작하는 날짜 범위의 시작일보다 늦은 것으로 정의합니다.
// 문제
// 날짜 범위 연산을 제공하는 DateRange 클래스를 구현해주세요.

// DateRange 클래스
// class DateRange {
//   static from(date1: Date, date2?: Date): DateRange;
//   static merge(dateRange1: DateRange, dateRange2: DateRange): DateRange;

//   start: Date,
//   end: Date,

//   equals(dateRange: DateRange): boolean;
//   contains(dateRange: DateRange): boolean;
//   overlaps(dateRange: DateRange): boolean;
// }
// DateRange 클래스는 위 인터페이스를 가집니다.

// DateRange.from: DateRange 객체를 생성합니다.
// 첫 번째 인자만 주어진 경우, 시작일과 종료일이 주어진 날짜로 같은 날짜 범위를 만듭니다.
// DateRange.merge: 2개의 날짜 범위 DateRange를 합친 새로운 DateRange 객체를 생성합니다.
// DateRange#equals: 2개의 날짜 범위 DateRange가 같은지 판단합니다.
// DateRange#contains: 이 날짜 범위가 인자로 주어진 날짜 범위를 포함하는지 판단합니다.
// DateRange#overlaps: 이 날짜 범위가 인자로 주어진 날짜 범위와 겹치는지 판단합니다.
// 김토스와 함께 위 인터페이스를 가지는 DateRange 클래스를 구현해주세요.

// 조건
// 올바르지 않은 Date에 대한 입력은 없습니다.
// DateRange Instance 생성 시 date의 순서는 항상 작은 날짜, 큰 날짜 순으로 입력합니다.
// 하루 단위의 날짜 범위는 시작 날짜와 끝 날짜가 같습니다.
// 시간 이하 단위는 계산에서 무시합니다.
// 예시
// const JAN_1 = new Date(2021, 0, 1);
// const JAN_2 = new Date(2021, 0, 2);
// const JAN_3 = new Date(2021, 0, 3);
// const JAN_4 = new Date(2021, 0, 4);

// // 2021년 1월 1일 ~ 2021년 1월 2일
// const dateRange = DateRange.from(JAN_1, JAN_2);

// // 날짜 범위에서 시간 아래의 단위는 고려하지 않습니다.
// // 2021년 1월 1일 12시와 2021년 1월 1일 23시 59분은 모두 같은 2021년 1월 1일 입니다.
// const dateRange1 = DateRange.from(new Date(2021, 0, 1));
// const dateRange2 = DateRange.from(new Date(2021, 0, 1, 12, 00), new Date(2021, 0, 1, 23, 59));

// dateRange1.equals(dateRange2); // true

// // 2021년 1월 1일 ~ 2021년 1월 3일
// const dateRange3 = DateRange.from(JAN_1, JAN_3);
// // 2021년 1월 1일 ~ 2021년 1월 3일은 2021년 1월 1일을 포함합니다.
// dateRange3.contains(JAN_1) // true

// const dateRange4 = DateRange.from(JAN_1, JAN_3);
// dateRange4.equals(dateRange3) // true

// const dateRange5 = DateRange.from(JAN_2, JAN_4);
// dateRange4.overlaps(dateRange5) // true
// dateRange4.overlaps(dateRange1) // false
/* DateRange 클래스를 구현해주세요. */
class DateRange {
  static from(first, ...args) {
    return new DateRange(first, ...args);
  }

  static merge(range1, range2) {
    if (!range1.overlaps(range2)) {
      throw new Error("날짜를 병합할 수 없습니다. 겹치는 날짜가 없습니다.");
    }
    // 구현해주세요
  }

  constructor(start, end = start) {
    this.start = new Date(start);
    this.end = new Date(end);
  }

  equals(dateRange) {
    // 구현해주세요
  }

  contains(dateRange) {
    // 구현해주세요
  }

  overlaps(dateRange) {
    // 구현해주세요
  }
}

/**
 * NOTE:
 * 채점을 위한 코드입니다.
 * 수정하면 정상적인 채점이 되지 않습니다.
 * 수정하지 말아주세요.
 */
function solution() {
  return { DateRange };
}
