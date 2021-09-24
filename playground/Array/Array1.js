// Array
// 배열: 여러 개의 값을 순차적으로 나열한 자료구조
// 요소: 배열이 가지고 있는 값
// 인덱스: 자신의 위치를 나타내는 0 이상의 정수
// length 프로퍼티: 배열의 길이

// 자바스크립트 배열 특징 ------------------------------------------------------------------
// - 밀집 배열 dense array
// 배열의 요소는 하나의 데이터 타입으로 통일되어 있고, 서로 연속적으로 인접해 있다.
// - 희소 배열
// 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되고, 연속적으로 이어져있지 않아도 된다.
// 희소배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다

// 배열 생성 ------------------------------------------------------------------
// 1. 배열 리터럴
{
  const arr1 = [1, 2, 3];
  console.log(arr1.length); // 3

  const arr2 = [];
  console.log(arr2.length); // 0

  const arr3 = [1, , 3]; // 희소배열
  console.log(arr3.length); // 3
  console.log(arr3); // [ 1, <1 empty item>, 3 ]
  console.log(arr3[1]); // undefined
}
// 2. Array 생성자 함수
{
  // 2-1. 전잘된 인수가 1개이고 숫자인 경우 => length 프로퍼티 값이 인수인 배열 생성
  const arr1 = new Array(10);
  console.log(arr1); // [ <10 empty items> ] => 희소 배열
  console.log(arr1.length); // 10

  // 2-2. 빈 배열
  const arr2 = new Array(); // []

  // 2-3. 인수가 2개 이상이거나, 숫자가 아닌 경우 => 인수를 요소로 갖는 배열 생성
  const arr3 = new Array(1, 2, 3); // [1,2,3]
  const arr4 = new Array({}); // [{}]
}
// 3. Array.of
{
  // 전달된 인수를 요소로 갖는 배열 생성
  // 전달된 인수가 1개고 숫자여도 인수를 요소로 가진다.
  const arr1 = Array.of(1); // [1]
  const arr2 = Array.of(1, 2, 3); // [1,2,3]
  const arr3 = Array.of('string'); // ['string']
}
// 4. Array.from 메서드
{
  // 인수로 유사 배열 객체 또는 이터러블 객체를 받아 배열로 변환하여 반환함
  // 4-1. 유사 배열 객체
  const arr1 = Array.from({ length: 2, 0: 'a', 1: 'b' }); // ['a', 'b']

  // 4-2. 이터러블
  const arr2 = Array.from('Hello'); // [ 'H', 'e', 'l', 'l', 'o' ]

  // 4-3. 두 번째 인수로 전달한 콜백함수의 반환값으로 구성된 배열을 반환함
  const arr3 = Array.from({ length: 3 }); // [ undefined, undefined, undefined ]
  const arr4 = Array.from({ length: 3 }, (_, i) => i); // [ 0, 1, 2 ]
}

// 배열 참조 ------------------------------------------------------------------
{
  // 존재하지 않는 요소에 접근하면 undefined
  // 존재하지 않는 프로퍼티 키로 객체의 프로퍼티에 접근했을 때 undefined를 반환하는 것처럼
  const arr = [1, 2];
  console.log(arr[2]); // undefined
}

// 배열 요소 추가 갱신 ------------------------------------------------------------------
{
  // 1. 요소 추가시 length 자동 갱신
  const arr = [0];
  arr[1] = 1;
  console.log(arr.length); // 2

  // 2. length보다 큰 인덱스로 새로운 요소를 추가하면 희소배열이 된다
  arr[100] = 100;
  console.log(arr); // [ 0, 1, <98 empty items>, 100 ]
  console.log(arr.length); // 101
  console.log(Object.getOwnPropertyDescriptors(arr));
  /*
  {
    '0': { value: 0, writable: true, enumerable: true, configurable: true },
    '1': { value: 1, writable: true, enumerable: true, configurable: true },
    '100': { value: 100, writable: true, enumerable: true, configurable: true },
    length: {
      value: 101,
      writable: true,
      enumerable: false,
      configurable: false
    }
  }
  */

  // 3. 요소값 갱신
  arr[1] = 10;
  console.log(arr); // [ 0, 10, <98 empty items>, 100 ]
}

// 배열 요소 삭제 ------------------------------------------------------------------
{
  // 1. delete 연산자
  // 프로퍼티 키가 '1'인 프로퍼티를 삭제하고 희소 배열이 된다. 쓰지말자!
  const arr1 = [1, 2, 3];
  delete arr1[1];
  console.log(arr1); // [ 1, <1 empty item>, 3 ]
  console.log(arr1.length); // 3 => 희소 배열

  // 2. Array.prototype.splice(삭제 시작 인덱스, 삭제할 요소 수) 메서드
  const arr2 = [1, 2, 3];
  arr2.splice(1, 1);
  console.log(arr2); // [1, 3]
  console.log(arr2.length); // 2
}
