// 배열 고차 함수 Array Higher-Order Function
// 함수를 인수로 전달 받거나 함수를 반환하는 함수를 말함.
// 고차 함수는 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고있다.

// 함수형 프로그래밍
// - 순수 함수와 보조 함수의 조합으로 로직 내 조건문과 반복문을 제거하여 복잡성을 해결
// - 변수의 사용을 억제하여 상태 변경을 피함
// 순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그맹의 안정성을 높이려는 노력의 일환임.

//  Array.prototype.sort ------------------------------------------------------------------
{
  // 배열의 요소를 정렬함
  // 원본 배열을 직접 변경
  // 정렬된 배열을 반환함

  // 1. 기본 오름차순
  const fruits = ['Banana', 'Orange', 'Apple'];
  fruits.sort();
  console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

  // 2. 한글 문자열도 오름차순
  const fruits2 = ['바나나', '오렌지', '사과'];
  fruits2.sort();
  console.log(fruits2); // [ '바나나', '사과', '오렌지' ]

  // 3. 내림차순 정렬
  // sort로 오름차순 한 다음 reverse로 순서 뒤집기
  console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
  fruits.reverse();
  console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

  // 4. 숫자 요소로 이루어진 배열 정렬
  const points = [40, 100, 1, 5, 2, 25, 10];
  points.sort();
  // 4-1. 숫자 요소들로 이뤄진 배열은 의도한 대로 정렬되지 않는다.
  console.log(points); // [1, 10, 100, 2, 25, 40, 5]
  // 배열의 요소가 숫자 타입이면 일시적으로 문자열로 변환한 후 "유니코드" 코드 포인트의 순서를 기준으로 정렬하기 때문!

  // 4-2. 숫자 요소를 정렬할 때는 sort 매서드에 <정렬 순서를 정의하는 비교 함수>를 인수로 전달해야함.
  // 숫자 배열의 오름차순 정렬.
  // 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
  points.sort((a, b) => a - b);
  console.log(points); // [1, 2, 5, 10, 25, 40, 100]

  // 숫자 배열의 내림차순 정렬.
  // 비교 함수의 반환 값이 0보다 작으면 b를 우선하여 정렬한다.
  points.sort((a, b) => b - a);
  console.log(points); // [100, 40, 25, 10, 5, 2, 1]

  // 5. 객체를 요소로 갖는 배열을 정렬
  const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' },
  ];

  // 5-1. 비교함수, 매개변수 key는 프로퍼티 키
  function compare(key) {
    // 프로퍼티 값이 문자열인 경우 - 산술 연산을 하면 NaN이 나올 수 있음. 그래서 비교 연산을 수행
    // 비교 함수는 양수/음수/0을 반환하면 됨
    // 오름차순 정렬
    // 양수,0: 그대로 / 음수: a를 기준으로 정렬
    return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
  }

  // 5-2. id를 기준으로 오름차순 정렬
  todos.sort(compare('id'));
  console.log(todos);
  /*
  [
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' },
    { id: 4, content: 'JavaScript' }
  ]*/

  // 5-3. content를 기준으로 오름차순 정렬
  todos.sort(compare('content'));
  console.log(todos);
  /*
  [
    { id: 2, content: 'CSS' },
    { id: 1, content: 'HTML' },
    { id: 4, content: 'JavaScript' }
  ]
  */
}

//  Array.prototype.forEach ------------------------------------------------------------------
{
  // 내부 반복문을 통해 자신을 호출한 배열을 순회하며 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출함
  // 1. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  // 2. forEach는 원본 배열을 변경하지 않는다.
  // 3. 반환값은 언제나 undefined
  // 4. forEach 메서드의 두 번째 인수로 forEach 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다
  // 5. break, continue 문을 사용할 수 없다
  // 6. 존재하지 않는 요소는 순회 대상에서 제외된다.
  const numbers = [1, 2, 3];
  const pows = [];
  numbers.forEach(item => pows.push(item ** 2));
  console.log(pows); // [ 1, 4, 9 ]

  // 1. 콜백 함수의 인수
  // (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  [1, 2, 3].forEach((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
  });
  /*요소값: 1, 인덱스: 0, this: [1,2,3]
    요소값: 2, 인덱스: 1, this: [1,2,3]
    요소값: 3, 인덱스: 2, this: [1,2,3] */

  // 2. forEach는 원본 배열을 변경하지 않는다.

  // 3. 반환값은 언제나 undefined

  // 4. forEach 메서드의 두 번째 인수로 forEach 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다
  {
    class Numbers {
      numberArray = [];
      multiply(arr) {
        arr.forEach(function (item) {
          this.numberArray.push(item * item);
        }, this); // forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
      }
    }
    const numbers = new Numbers();
    numbers.multiply([1, 2, 3]);
    console.log(numbers.numberArray); // [1, 4, 9]
  }

  // 4-1. 화살표 함수
  // 화살표 함수 내부에서 this를 참조하면 상위 스코프, 즉 multiply메서드 내부의 this를 그대로 참조함
  {
    class Numbers {
      numberArray = [];
      multiply(arr) {
        arr.forEach(item => this.numberArray.push(item * item));
      }
    }
    const numbers = new Numbers();
    numbers.multiply([1, 2, 3]);
    console.log(numbers.numberArray); // [1, 4, 9]
  }

  // 5. break, continue 문을 사용할 수 없다

  // 6. 존재하지 않는 요소는 순회 대상에서 제외된다.
  {
    const arr = [1, , 3];
    // for문
    for (let i = 0; i < arr.length; i++) console.log(arr[i]); // 1, undefined, 3
    // forEach
    arr.forEach(v => console.log(v)); // 1, 3
  }
}

//  Array.prototype.map ------------------------------------------------------------------
{
  // 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
  // "콜백 함수의 반환값"들로 구성된 새로운 배열을 반환한다.
  // 원본 배열은 변경되지 않는다.
  // 1. 원본 배열과 반환된 배열은 1:1 매핑된다
  // 2. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  // 3. map 메서드의 두 번째 인수로 map 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다
  const numbers = [1, 4, 9];
  const roots = numbers.map(item => Math.sqrt(item));
  console.log(roots); // [ 1, 2, 3 ]
  console.log(numbers); // [ 1, 4, 9 ]

  // 1. 원본 배열과 반환된 배열은 1:1 매핑된다
  // map 메서드가 생성하여 반환하는 새로운 배열의 length 프로퍼티 값은
  // map 메서드를 호출한 배열의 length 프로퍼티 값과 반드시 일치함
  // 즉, map 메서드를 호출한 배열과 map 메서드가 생성하여 반환한 배열은 1:1 매핑됨

  // 2. 콜백 함수의 인수
  // (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  [1, 2, 3].map((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
  });
  /*요소값: 1, 인덱스: 0, this: [1,2,3]
    요소값: 2, 인덱스: 1, this: [1,2,3]
    요소값: 3, 인덱스: 2, this: [1,2,3] */

  // 3. map 메서드의 두 번째 인수로 map 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다
  {
    class Prefixer {
      constructor(prefix) {
        this.prefix = prefix;
      }
      add(arr) {
        return arr.map(function (item) {
          // 외부에서 this를 전달하지 않으면 this는 undefined를 가리킨다.
          return this.prefix + item;
        }, this); // map 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
      }
    }
    const prefixer = new Prefixer('-webkit-');
    console.log(prefixer.add(['transition', 'user-select']));
    // ['-webkit-transition', '-webkit-user-select']
  }

  // 3-1. 화살표 함수가 더 좋다
  {
    class Prefixer {
      constructor(prefix) {
        this.prefix = prefix;
      }
      add(arr) {
        // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
        return arr.map(item => this.prefix + item);
      }
    }
    const prefixer = new Prefixer('-webkit-');
    console.log(prefixer.add(['transition', 'user-select']));
    // ['-webkit-transition', '-webkit-user-select']
  }
}

//  Array.prototype.filter ------------------------------------------------------------------
{
  // 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출, 원본 배열을 바꾸지 않는다.
  // 1. 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환
  // 2. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  // 3. filter 메서드의 두 번째 인수로 filter 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다

  // 1. 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환
  // filter 메서드가 생성하여 반환한 새로운 배열의 length 프로퍼티 값은
  // filter 메서드를 호출한 배열의 length 프로퍼티 값과 같거나 작다.
  {
    const numbers = [1, 2, 3, 4, 5];
    const odds = numbers.filter(item => item % 2);
    console.log(odds); // [ 1, 3, 5 ]
  }
  // forEach: 반환값은 undfined
  // map: 콜백함수의 반환값들로 구성된 배열을 새로 반환
  // filter: 콜백함수의 반환값이 true인 요소만 추출하여 새로운 배열을 반환

  // 2. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  [1, 2, 3].filter((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item % 2;
  });
  /*
   요소값: 1, 인덱스: 0, this: [1,2,3]
   요소값: 2, 인덱스: 1, this: [1,2,3]
   요소값: 3, 인덱스: 2, this: [1,2,3]
   */

  // 3. filter 메서드의 두 번째 인수로 filter 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다
  // filter 메서드는 자신이 호출한 배열에서 특정 요소를 제거하기 위해 사용할 수 있음
  {
    class Users {
      constructor() {
        this.users = [
          { id: 1, name: 'Lee' },
          { id: 2, name: 'Kim' },
        ];
      }
      // 요소 추출
      findById(id) {
        // id가 일치하는 사용자만 반환한다.
        return this.users.filter(user => user.id === id);
      }
      // 요소 제거
      remove(id) {
        // id가 일치하는 사용자를 제거한다.
        this.users = this.users.filter(user => user.id !== id);
      }
    }
    const users = new Users();
    let user = users.findById(1);
    console.log(user); // [{ id: 1, name: 'Lee' }]
    // id가 1인 사용자를 제거한다.
    users.remove(1);
    user = users.findById(1);
    console.log(user); // []
  }
}

//  Array.prototype.reduce ------------------------------------------------------------------
{
  // 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출, 원본 배열을 바꾸지 않는다.
  // 1. 콜백 함수의 반환값을 다음 순회 시 콜백 함수의 첫 번째 인수로 전달하면서
  // 콜백 함수를 호출하여 <하나의 결과값>을 만들어 반환한다.
  // 2. reduce의 인수 (1) 콜백 함수 (2) 초기값 : 생략은 가능하지만 안전하지 않다.
  // 3. 콜백 함수의 인수 (1) 초기값 또는 함수의 이전 반환값 (2) 배열의 요소값 (3) 인덱스 (4) 호출한 배열 자체(this)

  // 누적 합 구하기
  {
    const sum = [1, 2, 3, 4].reduce(
      (accumulator, currentValue, index, array) => accumulator + currentValue,
      0
    );
    console.log(sum); // 10
  }

  // 평균 구하기
  {
    const values = [1, 2, 3, 4, 5, 6];
    const average = values.reduce((acc, cur, i, { length }) => {
      return i === length - 1 ? (acc + cur) / length : acc + cur;
    }, 0);
    console.log(average); // 3.5
  }

  // 최대값 구하기
  {
    const values = [1, 2, 3, 4, 5];
    const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
    console.log(max); // 5
  }

  // 요소의 중복 횟수 구하기
  {
    const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
    const count = fruits.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    // 콜백 함수는 총 5번 호출되고 다음과 같이 결과값을 반환한다.
    /*
    {banana: 1} => {banana: 1, apple: 1} => {banana: 1, apple: 1, orange: 1}
    => {banana: 1, apple: 1, orange: 2} => {banana: 1, apple: 2, orange: 2}
    */
    console.log(count); // { banana: 1, apple: 2, orange: 2 }
  }

  // 중첩 배열 평탄화
  {
    const values = [1, [2, 3], 4, [5, 6]];
    const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
    console.log(flatten); // [ 1, 2, 3, 4, 5, 6 ]
  }

  // 중복 요소 제거
  {
    const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
    const result = values.reduce((acc, cur, i, arr) => {
      if (arr.indexOf(cur) === i) acc.push(cur);
      return acc;
    }, []);
    console.log(result); // [ 1, 2, 3, 5, 4 ]
  }
}

//  Array.prototype.some ------------------------------------------------------------------
{
  // 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출, 원본 배열을 바꾸지 않는다.
  // 배열의 요소 중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개 이상 존재하는지 그 결과를 불리언 타입으로 반환한다.
  // 1. 콜백 함수의 반환값이 단 한 번이라도 참이면 treu, 모두 거짓이면 false, 빈 배열인 경우 언제나 false
  // 2. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  // 3. some 메서드의 두 번째 인수로 some 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다

  [5, 10, 15].some(item => item > 10); // true
  [5, 10, 15].some(item => item < 0); // false
  ['apple', 'banana', 'mango'].some(item => item === 'banana'); // true
  [].some(item => item > 3); // false
}

//  Array.prototype.every ------------------------------------------------------------------
{
  // 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출, 원본 배열을 바꾸지 않는다.
  // 배열의 요소 중에 콜백 함수를 통해 정의한 조건을 모두 만족하는지 확인하여 그 결과를 불리언 타입으로 반환한다.
  // 1. 콜백 함수의 반환값이 모두 참이면 true, 단 한 번이라도 거짓이면 false, 빈 배열인 경우 언제나 true
  // 2. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  // 3. every 메서드의 두 번째 인수로 every 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다

  [5, 10, 15].some(item => item > 3); // true
  [5, 10, 15].some(item => item > 10); // false
  [].some(item => item > 3); // true
}

//  Array.prototype.find ------------------------------------------------------------------
{
  // 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출, 원본 배열을 바꾸지 않는다.
  // 1. 콜백 함수의 반환값이 true인 첫 번째 요소를 반환한다. 콜백 함수의 반환값이 true인 요소가 없다면 undefined를 반환한다.
  // 2. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  // 3. find 메서드의 두 번째 인수로 find 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다
  const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' },
  ];
  // id가 2인 첫 번째 요소를 반환한다. find 메서드는 배열이 아니라 요소를 반환한다.
  users.find(user => user.id === 2); //  {id: 2, name: 'Kim'}

  // filter 메서드는 배열을 반환한다.
  [1, 2, 2, 3].filter(item => item === 2); //  [2, 2]
  // find 메서드는 요소를 반환한다.
  [1, 2, 2, 3].find(item => item === 2); //  2
}

//  Array.prototype.findIndex ------------------------------------------------------------------
{
  // 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출, 원본 배열을 바꾸지 않는다.
  // 1. 콜백 함수의 반환값이 true인 첫 번째 요소의 인덱스를 반환한다. 콜백 함수의 반환값이 true인 요소가 없다면 -1를 반환한다.
  // 2. 콜백 함수의 인수 (1) 배열의 요소값 (2) 인덱스 (3) 호출한 배열 자체(this)
  // 3. findIndex 메서드의 두 번째 인수로 findIndex 메서드 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다

  const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' },
  ];
  // id가 2인 요소의 인덱스를 구한다.
  users.findIndex(user => user.id === 2); // 1
  // name이 'Park'인 요소의 인덱스를 구한다.
  users.findIndex(user => user.name === 'Park'); // 3
  // 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 다음과 같이 콜백 함수를 추상화할 수 있다.
  function predicate(key, value) {
    // key와 value를 기억하는 클로저를 반환
    return item => item[key] === value;
  }
  // id가 2인 요소의 인덱스를 구한다.
  users.findIndex(predicate('id', 2)); // 1

  // name이 'Park'인 요소의 인덱스를 구한다.
  users.findIndex(predicate('name', 'Park')); // 3
}

//  Array.prototype.flatMap ------------------------------------------------------------------
{
  // flatMap 메서드는 map 메서드를 통해 생성된 새로운 배열을 평탄화한다.
  // 즉 map 메서드와 flat 메서드를 순차적으로 실행하는 효과가 있다.
  const arr = ['hello', 'world'];

  // map과 flat을 순차적으로 실행
  arr.map(x => x.split('')).flat(); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

  // flatMap은 map을 통해 생성된 새로운 배열을 평탄화한다.
  arr.flatMap(x => x.split('')); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

  // 단, flatMap 메서드는 flat 메서드처럼 인수를 전달하여 평탄화 깊이를 지정할 수는 없고 1단계만 평탄화한다.
  // map 메서드를 통해 생성된 중첩 배열의 평탄화 깊이를 지정해야 하면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출한다.
  const arr = ['hello', 'world'];

  // flatMap은 1단계만 평탄화한다.
  arr.flatMap((str, index) => [index, [str, str.length]]); // [[0, ['hello', 5]], [1, ['world', 5]]] => [0, ['hello', 5], 1, ['world', 5]]

  // 평탄화 깊이를 지정해야 하면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출한다.
  arr.map((str, index) => [index, [str, str.length]]).flat(2); // [[0, ['hello', 5]], [1, ['world', 5]]] => [0, 'hello', 5, 1, 'world', 5]
}
