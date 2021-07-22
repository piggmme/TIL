/***** 1. 산술 연산자 *****/
// 1-1. add/ sub/ mul/ div
let x = 1 + (2 * 3) / 4;
console.log(x);

// 1-2. 증가 연산자/ 증감 연산자
let a = 1;
console.log(a++); // 1
console.log(a); // 2
console.log(++a); // 3
console.log(a); // 3

let b = 1;
console.log(b--); // 1
console.log(b); // 0
console.log(--b); // -1
console.log(b); // -1

/***** 2. 대입 연산자 *****/
let y = 1;
y += 3;
y -= 3;
y *= 3;
y /= 3;
console.log(y);

/***** 3. 논리 연산자 *****/
// 3-1. NOT !
const happy = !true; // false
console.log(happy);

// 3-2. AND &&
const hungry = true && true;
console.log(hungry); // tre

const sad = true && false;
console.log(sad); // false

// 3-3. OR ||
const awesome = true || false;
console.log(awesome); // treu

const sober = false || false;
console.log(sober); // false

// 3-4. 처리되는 순서 : not -> and -> or
const blue = !((true && false) || (true && false) || !false);
// !(true && false || true && false || true)
// !(flase || flase || true)
// !true
// flase
console.log(blue);

/***** 4. 비교 연산자 *****/
// 4-1. ===
const c = 1;
const d = 1;
console.log(c === d); // true

// 4-2. == : 사용하지 마~~ 타입 검사 안해서 위험해
const e = 1;
const f = "1";
console.log(e == f); // true
console.log(e === f); // false
// ==는 타입을 확인하지 않고 값만 비교한다. ===는 타입을 고려한다.

const g = false;
const h = 0;
console.log(g == h); // true

const i = null;
const j = undefined;
console.log(i == j); // true

console.log(0 == "0"); // true
console.log(0 == []); // true
console.log("0" == []); // false => ?!

// 4-3. !==, !=
const k = "k";
const l = "l";
console.log(k !== l); // true

// e = 1, f = '1'
console.log(e !== f); // true
console.log(e != f); // false

// 4-4. >, <, >=, <=
const pepsi = 10;
const cola = 15;
const vodka = 15;

console.log(pepsi < cola); // true
console.log(cola > vodka); // flase
console.log(cola >= pepsi); // true
console.log(pepsi <= vodka); // true
console.log(cola < vodka); // false

/***** 5. 문자열을 붙이고 싶다면? *****/
const x1 = "안녕";
const x2 = "하세요";
console.log(x1 + x2); // 안녕하세요

/*****  6. 삼항 연산자 ******/
const array = [];

// 6-1. 삼항연산자
let text =
  array.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";

// 아래와 동일하다.
// let text = '';
// if (array.length === 0){
//     text = '배열이 비어있습니다.';
// } else {
//     text = '배열이 비어있지 않습니다.';
// }

console.log(text); // 배열이 비어있습니다

// 6-2. 삼항연산자 중첩 => 사용 지양하자.
const condition1 = false;
const condition2 = false;

const value = condition1 ? "와우!" : condition2 ? "blabla" : "foo";
console.log(value); // foo

/***** 7.단축 평가 논리 계산법  ******/
// 7-1. thruthy 값을 이용하여 작성
{
  const dog = {
    name: "멍멍이",
  };
  function getName(animal) {
    if (animal) {
      // animal 값이 유효하다면
      return animal.name;
    }
    return undefined; // 그렇지 않다면
  }
  const name = getName();
  console.log(name);
}

// 7-2. A && B
// - A === truthy : B로 결정됨
// - A === falsy : A로 결정됨
// 앞의 것이 truthy일 때, 뒤에 것으로 결정하고 싶을 때 사용
{
  const dog = {
    name: "멍멍이",
  };
  function getName(animal) {
    return animal && animal.name; // undefined or 멍멍이
  }
  const name = getName(dog);
  console.log(name);
}
// 7-2-1. 예시
{
  console.log(true && "hello"); // 앞에 것이 truthy이면, 뒤에 것을 출력함
  console.log(false && "hello"); // false
  console.log("hello" && "bye"); // bye
  console.log(null && "hello"); // 앞이 falsy니까 앞의 것을 출력 null
  console.log(undefined && "hello"); // undefined
  console.log("" && "hello"); // ""
  console.log(NaN && "hello"); // Nan
  console.log(0 && "hello"); // 0
  console.log(1 && "hello"); // hello
}
// 7-2-2. typeError 막기 가능
{
  const object = null;
  const name = object && object.name; // null
  // const name = object.name // TypeError 발생!
  console.log(name);
}

// 7-3. A || B
// - A === truthy : A로 결정
// - A === falsy : B로 결정
// 앞에 것이 falsy일 때, 뒤에걸로 결정하고 싶을 때 사용

// 7-3-1. || 사용하기 전
{
  const namelessDog = {
    name: "",
  };
  function getName(animal) {
    const name = animal && animal.name;
    if (!name) {
      return "이름 없는 동물";
    }
    return name;
  }
  console.log(getName(namelessDog)); // 이름 없는 동물
}

// 7-3-2. || 사용
{
  const namelessDog = {
    name: "",
  };
  function getName(animal) {
    const name = animal && animal.name;
    return name || "이름 없는 동물";
  }
  console.log(getName(namelessDog)); // 이름 없는 동물
}

// 7-3-3. 예시
{
  console.log(false || "hello"); // hello
  console.log("" || "hello"); // hello
  console.log(null || "hello"); // hello
  console.log(undefined || "hello"); // hello

  console.log(true || "hello"); // true
  console.log(1 || "hello"); // 1
  console.log("와아" || "hello"); // 와아
  console.log([] || "hello"); // []
}
