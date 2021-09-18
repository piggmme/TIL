{
  const circle = {
    radius: 5, // 반지름
    getDiameter() {
      // 원의 지름
      return 2 * this.radius;
    }
  };
  console.log(circle); // { radius: 5, getDiameter: [Function: getDiameter] }

  console.log(circle.getDiameter()); // 10
}
{
  // 생성자 함수
  function Circle(radius) {
    this.radius = radius;
  }
  Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
  };

  // 인스턴스 생성
  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  // Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
  // 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
  // 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
  console.log(circle1.getArea === circle2.getArea); // true
}
{
  const obj = {};
  const parent = { x: 1 };

  Object.getPrototypeOf(obj); // obj.__proto__; 와 동일
  Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent; 와 동일
}
{
  (function () {}.hasOwnProperty('prototype'));
}

{
  function Person(name) {
    this.name = name;
  }

  // 프로토타입에 메서드 추가
  Person.prototype.sayHello = function () {
    console.log(`Hi!`, this.name);
  };

  const me = new Person('Lee');
  const you = new Person('Kim');

  me.sayHello();
  you.sayHello();
}
{
  const obj = {};
  console.log(obj.constructor === Object); // true
}
{
  console.log(Person.prototype);

  function Person(name) {
    this.name = name;
  }
}
{
  const Person = (function () {
    // 생성자 함수
    function Person(name) {
      this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
      console.log(`Hi!`, this.name);
    };

    // 생성자 함수 반환
    return Person;
  })();

  const me = new Person('Lee');

  // 인스턴스 메서드
  me.sayHello = function () {
    console.log(`hey!`);
  };
  me.sayHello(); // hey!
}
{
  // 1. 프로토타입이 null인 객체.
  // 프로토타입 체인의 종점에 존재
  // obj => null
  let obj = Object.create(null);
  console.log(obj); // [Object: null prototype] {}
  console.log(Object.getPrototypeOf(obj) === null); // true
  // Object.prototype을 상속받지 못함.
  // console.log(obj.toString()); // TypeError: obj.toString is not a function

  // 2. 프로토타입이 Object.prototype
  // obj = {}; 와 동일
  // obj => Object.prototype => null
  obj = Object.create(Object.prototype);
  console.log(obj); // {}
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

  // 3. 프로토타입이 Object.prototype
  // obj = { x: 1 }; 와 동일
  // obj => Object.prototype => null
  obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true }
  });
  console.log(obj.x); // 1
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

  // 4. 임의의 객체를 직접 상속받음
  // obj => myProto => Object.prototype => null
  const myProto = { x: 10 };
  obj = Object.create(myProto);
  console.log(obj.x); // 10
  console.log(Object.getPrototypeOf(obj) === myProto); // true

  // 5. 생성자 함수
  // obj => Person.prototype => Object.prototype => null
  function Person(name) {
    this.name = name;
  }
  // obj = new Person('Lee') 와 동일하다.
  obj = Object.create(Person.prototype);
  obj.name = 'Lee';
  console.log(obj.name);
  console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

  console.log(obj.hasOwnProperty('a'));
  console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));
}
{
  const myProto = { x: 10 };

  const obj = {
    y: 20,
    __proto__: myProto
  };
  /* 아래와 동일하다.
    obj = Object.create(myProto, {
    y: { value: 20, writable: true, enumerable: true, configurable: true }
  });
  */

  console.log(obj.x, obj.y); // 10, 20
  console.log(Object.getPrototypeOf(obj) === myProto); // true
}
{
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }
    // ① 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };
    return Person;
  })();
  const me = new Person('Lee');
}
{
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }
    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
      // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
      constructor: Person,
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };
    return Person;
  })();
  const me = new Person('Lee');
  // constructor 프로퍼티가 생성자 함수를 가리킨다.
  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false
}
{
  function Person(name) {
    this.name = name;
  }
  const me = new Person('Lee');
  // 프로토타입으로 교체할 객체
  const parent = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };
  // ① me 객체의 프로토타입을 parent 객체로 교체한다.
  Object.setPrototypeOf(me, parent);
  // 위 코드는 아래의 코드와 동일하게 동작한다.
  // me.__proto__ = parent;
  me.sayHello(); // Hi! My name is Lee
}
{
  const person = {
    name: 'Lee',
    address: { city: 'Seoul' }
  };
  const copyPerson = { ...person };
}
{
  function Person(name) {
    this.name = name;
    // this.sayHi = function () { };
  }
  Person.prototype.sayHi = function () {
    console.log('Hi ', this.name);
  };
  const me = new Person('Lee');
  me.sayHi(); // Hi Lee
  Person.prototype.sayHi(); // Hi undefined
  // => this를 메소드로 호출. this = Person.prototype
}
{
  // 여러번 호출될 가능성이 높은 생성자 함수
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHi = function () {
    console.log(`Hi ${this.name}`);
  }; // this는 호출될 때 결정된다. 지금은 모른다.

  const me = new Person('Lee');
  me.sayHi(); // this는 메서드로 호출된다. this는 me다
}
