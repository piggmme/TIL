// Q1
function printHello(text) {
  console.log(`Hello, ${text}!`);
}
printHello("kang");

// Q2
// let a = 5;
// a++;
// console.log(a);
// --a;
// console.log(++a);
// a /= 1;
// console.log(--a);
// console.log(++a);
// console.log(a);

// Q3
// const result = false || !((true && !false) || false);
// if(result){
//     console.log('야호');
// } else{
//     console.log('화이팅');
// }

// Q4
// '==' 는 데이터의 타입과 상관없이, 그 값을 비교한다.
// '===' 는 데이터의 타입이 같은지, 또 그 값이 같은지 비교한다.
// 예를 들어 다음과 같은 코드가 있다.
// {
// // ex1
// a = '1';
// b = 1;
// console.log(a == b); // true
// console.log(a === b); // false

// // ex2
// zero = 0;
// f = false;
// console.log(zero == f); // true
// console.log(zero === f); // false
// }
// 이처럼, 변수 a와 b는 서로 다른 타입이지만 그 안에 들어있는 값은 같다고 볼 수 있다.
// 따라서 == 연산자는 true를, ===연산자는 false를 반환한다.
// 또한 숫자와 불리언의 비교에서도, zero와 f는 서로 타입이 다르지만, 값은 0으로 같다고 볼 수 있다.
// 따라서 두번째 예시에서도 == 연산자는 true를, ===연산자는 false를 반환한다.
// console.log('0' == []); // false

// Q5
// const checkName = (name) => console.log(`Your name is ... ${name}, right?`);
// checkName('Velopert');

// Q6
// const a = 10;
// if (a >= 10){
//   const a = 5;
//   console.log(a);
// } else if(a>=3){
//   console.log(a);
// } else{
//   console.log(a+5);
// }
// console.log(a);
