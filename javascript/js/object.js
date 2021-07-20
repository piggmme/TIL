// 객체

// const dogName = '멍멍이';
// const dogAge = 2;

// 1. 객체: 관련있는 자료끼리 묶어서 관리
const dog = {
  name: "멍멍이",
  age: 2,
  cute: true,
  // key: value
};
console.log(dog);
console.log(dog.name);
console.log(dog.age);

// 1-2.
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};
const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 이다`;
  console.log(text);
}
print(ironMan);
print(captainAmerica);

// 2. 비구조화 할당/ 객체 구조 분해
function print2(hero) {
  const { alias, name, actor } = hero; // 객체 내부에서 값들을 빼옴
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 이다`;
  console.log(text);
}
// 2-1. 비구조화 단축
function print3({ alias, name, actor }) {
  // 객체 내부에서 값들을 빼옴
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 이다`;
  console.log(text);
}

// 3. 객체 안에 함수 넣기
const cat = {
  name: "야옹이",
  sound: "야옹",
  say: function () {
    console.log(this.sound);
  },
  // say: () => {
  //     console.log(this.sound); // 화살표 함수에서 this 사용하면 undefined
  // }
};
const cow = {
  name: "얼룩소",
  sound: "음매",
};

// 3-1.
cow.say = cat.say;
cat.say(); // 야옹
cow.say(); // 음매 => 자기가 속해있는 객체에서(this) sound를 찾음

// 3-2.
const catSay = cat.say;
catSay(); // undefined

// 4. Getter & Setter
// 4-1. getter: 특정 값을 조회하려고 할 때 특정 코드를 실행시고, 값을 반환해줌
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    // 특정 값을 조회하려고 할 때 특정 코드를 실행시고, 값을 반환해줌
    console.log("sum 함수가 실행됨");
    return this.a + this.b; // 반환값 꼭 필요
  },
};

console.log(numbers.sum); // sum 함수가 실행됨, 3 반환. => 변수값을 읽는 것 처럼 함수를 실행시킬 수 있음
numbers.b = 5;
console.log(numbers.sum); // sum 함수가 실행됨, 5

// 4-2. setter : 특정 값을 바꿀 때, 함수를 실행시키고, 바뀌는 값을 제어할 수 있음
const chicken = {
  _name: "꼬꼬",
  set name(value) {
    console.log("이름이 바뀝니다 .." + value);
    this._name = value;
  },
};

// 4-3.
console.log(chicken._name); // 꼬꼬
chicken.name = "꼬끼오"; // 이름이 바뀜니다 .. 꼬끼오
console.log(chicken._name); // 꼬끼오

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  },
};

console.log(numbers2.sum);
numbers2.a = 5; // a 값을 바꾸려 함. => setter 실행
console.log(numbers2.sum); // 7
numbers2.b = 7;
console.log(numbers2.sum); // 12
numbers2.a = 9;
console.log(numbers2.sum); // 16
console.log(numbers2.sum); // 16

// 5-1. 객체 생성자
function Animal(type, name, sound) {
  this.type = type; // this는 만들어진 객체를 지칭. 아래에서는 dog2, cat2
  this.name = name;
  this.sound = sound;
  this.say = function () {
    // 하지만 say함수는 너무 비효율적임. 같은 함수를 여러개 생산하니까..
    console.log(this.sound); // 이럴 경우엔 Prototype을 사용한다.
  };
}
const a_dog = new Animal("개", "멍멍이", "멍멍");
const a_cat = new Animal("고양이", "야옹이", "야옹");

a_dog.say(); // 멍멍
a_cat.say(); // 야옹

// 5-2. 객체 생성자의 prototype
// 객체 생성자로 만든 객체들 끼리 공유할 수 있는 값이나 함수를 설정한다.

function Animal2(type, name, sound) {
  this.type = type; // this는 만들어진 객체를 지칭. 아래에서는 dog2, cat2
  this.name = name;
  this.sound = sound;
}
// prototype으로 함수는 딱 한번 생성하지만, 각각의 객체들이 접근해서 사용할 수 있음 => 효율적
Animal2.prototype.say = function () {
  console.log(this.sound);
};
/* 
// prototype은 이것과 동일하다.
function say(){
    console.log(this.sound);
}
a_dog2.say = say;
a_cat2.say = say; 
*/

// prototype은 즉, 공유데이터를 만들고, 각각의 객체가 접근해서 사용하는 것임
Animal2.prototype.sharedValue = 1;

const a_dog2 = new Animal2("개", "멍멍이", "멍멍");
const a_cat2 = new Animal2("고양이", "야옹이", "야옹");

a_dog2.say(); // 멍멍
a_cat2.say(); // 야옹

console.log(a_dog2.sharedValue); // 1
console.log(a_cat2.sharedValue); // 1

// 5-3. 객체 생성자 상속하기
function Dog(name, sound) {
  Animal.call(this, "개", name, sound); // Dog 함수를 사용하면, type=='개'인 객체가 생성되게 함.
}

function Cat(name, sound) {
  Animal.call(this, "고양이", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const a_dog3 = new Dog("멍멍이", "멍멍");
const a_cat3 = new Cat("야옹이", "야옹");
