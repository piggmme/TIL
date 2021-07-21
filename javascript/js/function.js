/***** 1. 함수 선언 *****/
// 1-1.
function add(a, b) {
  return a + b;
}
const sum = add(1, 2);
console.log(sum);

// 1-2.
function hello(name) {
  console.log("Hello," + name + "!");
}
hello("hee");

/***** 2. Template Literal *****/
/*  ES6 : 자바스크립트 버전
 - ECMAScript 6
 - 그 기능 중 하나인 template literal 
 - 템플릿 리터럴은 이중 따옴표 나 작은 따옴표 대신 백틱(` `) (grave accent) 을 이용합니다.  
 - 템플릿 리터럴은 또한 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데, 이는 $와 중괄호( $ {expression} ) 로 표기할 수 있습니다.
 */

// 2-1.
function hello2(name) {
  return `Hello, ${name}.
Have a nice day!`; // 줄 바꿈을 하면, 문자열에도 적용됨

  console.log("hey?"); // 실행되지 않음
}
const result = hello2("hee");
console.log(result);

/***** 3. 화살표 함수 *****/

/* 기본 구문
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// 다음과 동일함:  => { return expression; }

// 매개변수가 하나뿐인 경우 괄호는 선택사항:
(singleParam) => { statements }
singleParam => { statements }

// 매개변수가 없는 함수는 괄호가 필요:
() => { statements }
*/

// 3-1.
const add2 = (a, b) => {
  return a + b;
};
const sum2 = add2(1, 2);
console.log(sum2);

// 3-2.
const hello3 = (name) => {
  return `Hello, ${name}.
Have a nice day!`;
};
console.log(hello3("hee"));

// 3-3. return만 할 때는 다음과 같이 간단하게 가능!
const add3 = (a, b) => a + b;
const sum3 = add(1, 2);
console.log(sum3);

/***** 4. Truthy & Falsy *****/
// 4-1. undefined 와 null을 처리 함
{
  function print(person) {
    if (person === undefined || person === null) {
      return; // 아무것도 하지 않고 반환. 에러 처리
    }
    console.log(person.name);
  }
  const person = null;
  print(person);
}

// 4-2. Falsy : undeifined, null, 0, "", NaN(not a number), false
{
  function print(person) {
    if (!person) {
      // 이렇게 작성해도 동작한다.
      return; // 아무것도 하지 않고 반환. 에러 처리
    }
    console.log(person.name);
  }
  const person = null;
  print(person);
}

// 4-3. Truthy : Falsy를 제외한 나머지
console.log(!3); // F
console.log(!"hello"); // F
console.log(!["array"]); // F
console.log(![]); // F
console.log(!{}); // F

// 4-4.
{
  const value = {};
  const truthy = value ? true : false;
  console.log(truthy); // true
}

/***** 5. 함수의 기본 파라미터 *****/
// 5-1-1. 함수의 매개변수를 넣지 않은 경우
{
  function calculateCircleArea(r) {
    return Math.PI * r * r;
  }
  const area = calculateCircleArea(); // 값을 넣지 않음
  console.log(area); // NaN
}
// 5-1-2. 단축 평가 논리 기법
{
  function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
  }
  const area = calculateCircleArea(); // 값을 넣지 않음
  console.log(area); // 3.141592653589793
}
// 5-1-3. 함수의 기본 파라미터
{
  function calculateCircleArea(r = 1) {
    // 함수의 매개변수 기본값 설정함
    return Math.PI * r * r;
  }
  const area = calculateCircleArea(); // 값을 넣지 않음
  console.log(area); // 3.141592653589793
}

// 5-2. 화살표 함수에서도 사용 가능
{
  const calculateCircleArea = (r = 1) => Math.PI * r * r;

  const area = calculateCircleArea(); // 값을 넣지 않음
  console.log(area); // 3.141592653589793
}
