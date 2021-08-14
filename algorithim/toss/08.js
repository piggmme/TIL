// 문제 설명
// 날짜 범위 집합
// 김토스는 이전 문제에서 작업한 날짜 범위 DateRange를 사용하다가 '2021년 8월의 평일'과 같이 연속되지 않은 날짜 범위도 다루어야 한다는 것을 알게 되었습니다. 김토스는 이에 대응할 수 있는 날짜 범위 집합 DateRangeSet을 새로 만드려고 합니다.

// 위 그림과 같이 날짜 범위 집합 DateRangeSet은 연속되지 않은 여러 개의 DateRange를 연결할 수 있습니다.

// 문제
// 아래와 같이 다양한 연산을 지원하는 DateRangeSet 클래스를 구현해주세요.

// 연산
// class DateRangeSet {
//   static from(ranges: DateRange[]): DateRangeSet;

//   contains(dateRange: DateRange): boolean;
//   overlaps(dateRange: DateRange): boolean;

//   add(dateRange: DateRange): void;
//   remove(dateRange: DateRange): void;
// }
// DateRangeSet.from: 날짜 범위 배열을 입력받아 새로운 날짜 범위 집합을 만듭니다.
// DateRangeSet#contains: DateRangeSet이 인자로 주어진 DateRange를 포함하는지 확인합니다.
// 여기에서 포함이란 인자로 주어진 DateRange의 모든 날짜가 DateRangeSet에 속하는 것으로 정의합니다.
// DateRangeSet#overlaps: DateRangeSet이 인자로 주어진 DateRange와 겹치는지 확인합니다.
// 여기에서 겹친다는 것은 DateRangeSet와 인자로 주어진 DateRange에 모두 속하는 날짜가 하루 이상 있다는 것으로 정의합니다.
// DateRangeOps.png

// DateRangeSet#add: 인자로 주어진 DateRange의 날짜들을 DateRangeSet가 관리하는 날짜에 추가합니다.
// DateRangeSet#remove: 인자로 주어진 DateRange의 날짜들을 DateRangeSet가 관리하는 날짜에서 제거합니다.
// 조건
// 올바르지 않은 Date는 생각하지 않습니다.
// 날짜 범위는 (연도, 월, 일)로 구성되는 시작일-종료일의 쌍으로 구성되며, 시간 이하 단위는 고려하지 않습니다.
// 날짜 범위에서 시작일은 종료일보다 늦을 수 없습니다.
// 위 인터페이스를 만족하는 한, DateRangeSet의 내부 구현은 자유롭게 수정하셔도 됩니다.
/* 앞 문제에서 작성한 DateRange 클래스를 사용해주세요. */

// class DateRange {}

// /* DateRangeSet 클래스를 구현해주세요. */
// class DateRangeSet {
//   static from(...args) {
//     return new DateRangeSet(...args);
//   }

//   constructor(ranges) {
//     // 구현해주세요
//   }

//   contains(dateRange) {
//     // 구현해주세요
//   }

//   overlaps(dateRange) {
//     // 구현해주세요
//   }

//   add(dateRange) {
//     // 구현해주세요
//   }

//   remove(dateRange) {
//     // 구현해주세요
//   }
// }

// /**
//  * 힌트 함수
//  * addDays, subDays
//  */
// function addDays(date, numberofDays) {
//   return new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate() + numberofDays
//   );
// }

// function subDays(date, numberofDays) {
//   return addDays(date, -numberofDays);
// }

// /**
//  * NOTE:
//  * 채점을 위한 코드입니다.
//  * 수정하면 정상적인 채점이 되지 않습니다.
//  * 수정하지 말아주세요.
//  */
// function solution() {
//   return { DateRange, DateRangeSet };
// }
