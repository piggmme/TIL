// {
//   const o = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
//   // 이 객체에 숫자 값이 아닌 프로퍼티 키가 있는지 확인하고 싶다
//   // 위 객체는 for문으로 순회가 불가능하다.
//   // length 프로퍼티가 있어도 안된다.

//   console.log(Object.keys(o)); // 열거만 되지 순서는 없다. [ 'a', 'b', 'c' ]
//   console.log(Object.getOwnPropertyDescriptor(o, 'a'));
//   // 객체의 하나의 프로퍼티의 4가지 프로퍼티 어트리뷰트를 확인함
//   // { value: 1, writable: true, enumerable: true, configurable: true }
//   // 출력된 객체를, 프로퍼티 디스크립터 객체 라고 부름
//   // 기본 값으로 value, wrtiable, enumerable, configurable의 값이 들어가 있다.

//   // in
//   // 객체 안에 프로퍼티 키가 존재하는지 확인한다.
//   console.log('a' in o); // true
//   console.log('toString' in o); // true => 상속받은 프로퍼티
//   // in은 상속 받은 프로퍼티 까지 확인할 수 있다.
//   console.log(Object.keys(o)); /// [ 'a', 'b', 'c' ]
//   // keys는 상속 받은 프로퍼티는 반환하지 않고, 자신의 프로퍼티만 반환한다.

//   // for in
//   for (const key in o) {
//     // in 연산자를 사용해서, 상속받은 프로퍼티도 key에 불러온다
//     console.log(key); // a, b, c만 나온다. => 상속받은 것은 enumerable이 false기 때문에...

//     if (Object.hasOwnProperty.call(o, key)) {
//       const element = o[key];
//       console.log(element); // 1 2 3
//     }
//   }
// }

// {
//   const o = {
//     a: 1,
//     b: 2,
//     c: 3,
//     __proto__: { x: 10 } // 상속받은 프로퍼티
//   };
//   // for in
//   for (const key in o) {
//     // in 연산자를 사용해서, 상속받은 프로퍼티도 key에 불러온다
//     console.log(key); // a, b, c, x 상속받은 x가 enumerable이 true기 때문에...
//   }
//   for (const key in o) {
//     // if (Object.hasOwnProperty.call(o, key)) 를 원래 써야하지만.. 일단 밑으로 대체
//     if (o.hasOwnProperty(key)) {
//       // o 객체가 자신의 프로퍼티로 key를 가지고 있는가?
//       const element = o[key];
//       console.log(element); // 1 2 3
//     }
//   }
// }

// this의 문제점
{
  const foo = function () {
    console.log(this);
  };

  // 1. 일반 함수로서 호출
  foo(); // this는 전역, Object [global] {...}

  // 2. 생성자 함수로서 호출
  const bar = new foo(); // this는 인스턴스(bar)를 가리킴, foo {} => foo는 생성자함수임을 알려줌

  // 3. 메서드로서 호출
  const o = {
    foo
  };
  o.foo(); // this는 o를 가리킴, { foo: [Function: foo] }
}
{
  function Person(name) {
    this.name = name;
  }
  const me = new Person('Lee');
}
