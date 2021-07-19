/* 1. 산술 연산자 */
// 1-1. add/ sub/ mul/ div
let x = 1 + 2 * 3 / 4;
console.log(x);

// 1-2. 증가 연산자/ 증감 연산자
let a = 1;
console.log(a++); // 1
console.log(a) // 2
console.log(++a) // 3
console.log(a) // 3

let b = 1;
console.log(b--); // 1
console.log(b); // 0
console.log(--b); // -1
console.log(b); // -1


/* 2. 대입 연산자 */
let y = 1;
y += 3;
y -= 3;
y *= 3;
y /= 3;
console.log(y)


/* 3. 논리 연산자 */
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
const blue = !(true && false || true && false || !false);
// !(true && false || true && false || true)
// !(flase || flase || true)
// !true
// flase
console.log(blue);


/* 4. 비교 연산자 */
// 4-1. ===
const c = 1;
const d = 1;
console.log(c === d); // true

// 4-2. == : 사용하지 마~~ 타입 검사 안해서 위험해
const e = 1;
const f = '1';
console.log(e == f); // true
console.log(e === f); // false
// ==는 타입을 확인하지 않고 값만 비교한다. ===는 타입을 고려한다.

const g = false;
const h = 0;
console.log(g == h); // true

const i = null;
const j = undefined;
console.log(i == j); // true

console.log(0 == '0'); // true
console.log(0 == []); // true
console.log('0' == []); // false => ?!


// 4-3. !==, !=
const k = 'k';
const l = 'l';
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


/* 5. 문자열을 붙이고 싶다면? */
const x1 = '안녕';
const x2 = '하세요';
console.log(x1 + x2); // 안녕하세요