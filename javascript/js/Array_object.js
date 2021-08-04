/******** Array 객체 ********/
// - 자바스크립트에서 배열은 정렬된 값들의 집합으로 정의됨
// - Array 객체로 다뤄짐

/******** Array 메소드 ********/
// 1. Array.isArray()
// 전달받은 값이 Array객체인지 아닌지 검사함

{
  let array = Array.isArray([]); // true
  let arrayObject = Array.isArray(new Array()); // true
  let number = Array.isArray(123); // false
  let string = Array.isArray("Array"); // false
  let bool = Array.isArray(true); // false

  console.log(array, arrayObject, number, string, bool);
}

// 2. Array.from()
// 다음 객체들을 배열처럼 변환시켜 줍니다.
// 2-1. 배열과 비슷한 객체 (array-like objects): length 프로퍼티와 인덱스 된 요소를 가지고 있는 객체
// 2-2. 반복할 수 있는 객체 (iterable objects) : Map과 Set객체 및 문자열과 같이 해당 요소를 개별적으로 선택할 수 있는 객체
// 하지만 from으로 생성된 객체는 Array객체는 아니고, Array 객체의 자식 클래스(child class)임

{
  function arrayFrom() {
    return Array.from(arguments);
  }
  let num = Array.from(arrayFrom(1, 2, 3)); // [1,2,3]
  let myMap = new Map([
    [1, 2],
    [3, 4],
  ]);
  let map = Array.from(myMap); // [[1,2],[3,4]]
  let string = Array.from("JavaScript hello");
  // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "h", "e", "l", "l", "o"]
  console.log(num, map, string);
}

// 3. Array.of()
// ECMAScript 6 부터 추가된 메소드
// 인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성함
// 이때 Array.of()와 Array객체 생성자의 차이는 정수로 전달된 인수의 처리방식이다
{
  let a = new Array(10);
  let b = Array.of(10);
  let c = Array.of(1, 2, 3, 4, 5);
  console.log(a); // [empty × 10] 또는  [,,,,,,,,,]
  console.log(b); // [10]
  console.log(c); // [1, 2, 3, 4, 5]
}

/******** Array.from() ********/

// 1. 화살표 함수
{
  let a = Array.from([1, 2, 3], (x) => x + x);
  console.log(a); //  [2, 4, 6]

  let b = Array.from({ length: 5 }, (v, i) => i);
  console.log(b); // [0, 1, 2, 3, 4]

  let c = Array.from(Array(10), () => Array());
  console.log(c);
  // 길이 10의 빈 배열을 생성 [empty × 10] 한 다음에, 그 빈 칸에 빈 배열 []을 삽입
  // [[],[],[],[],[],[],[],[],[],[]]

  let d = Array.from({ length: 10 }, () => 0);
  console.log(d); //  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

// 2. 시퀀스 생성
{
  // Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  let a = Array.from({ length: 5 / 2 + 1 }, (v, i) => 2 + i * 2);
  console.log(a); //  [2, 4, 6]
}
