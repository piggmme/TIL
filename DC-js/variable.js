// 1. Use strict
// added (in ES5)
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/ write)
// 2-1. let (add in ES6) => mutable (수정가능한)
let globalName = 'global';
{
    let name = 'kang hee';
    console.log(name); // kang hee
    name = 'hello';
    console.log(name); // hello
    console.log(globalName); //global
}
console.log(name); // => 아무것도 출력되지 않음
console.log(globalName);

// 2-2. var (don't ever use this)
// val hoisting (move declaration from bottom to top)
// hoisting : 어디에 선언했나에 상관 없이 젤 위로 선언을 끌어올려주는 것
console.log(age) // undefined
age = 4;
console.log(age) // 4
var age;

// has no block scope
{
    age = 5;
    var age;
}
console.log(age) // 5 => 함수 내에서 사용했는데, 바깥에서도 영향을 미치게 됨...

// 3. constant, r(read only)
// use const whenever possible
// only use let if variable needs to change
const dayInWeek = 7;
const maxNumber = 5;

// note!
// Immutable data types(수정 불가능): premitive types, frozne objects (i.e. object,freeze())
// Mutable data types(수정 가능): all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. variable type
// primitive, single item: Number, string, boolean, null, undefined, symbol,
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// 4-1. number - speicla numberic values : infinity, -infinity, NAN
const infinity = 1/0 
const negativeInfinity = -1/0 
const nAn = 'not a number' / 2; 
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// 4-2. bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over (-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type:${typeof bigInt}`);// type: bigint
Number.MAX_SAFE_INTEGER;

// 4-3. string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type:${typeof greeting}`); // value: hellobrendan, type:string
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // 간편하다!

// 4-4. boolean
// false: 0, null, undefined, NaN. ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // value: false, type: boolean

// 4-5. null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // null, object

// 4-6. undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); // undefined, undefined

// 4-7. symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때 사용함
// string에 상관없이 다르게 할당됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2) // 둘이 동일한 것인가? false

// string이 같으면 같은 symbol
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2) // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// value: id, type: symbol

// 4-8. object, real-life object, data structure
const ellie = { name:'ellie', age: 20}

// 5. Dynamic typing : dynamically typed language (동적 타입 언어)
// 정적 타입 언어 : 선언될 때 이미 타입이 결정되어 있다.
// 동적 타입 언어 : 런타임때 할당된 값에 따라서 타입이 달라질 수 있다.
let text = 'hello';
console.log(text.charAt(0));
// h
console.log(`value: ${text}, type:${typeof text}`);
// hello, string
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
// 1, number
text = '7'+5;
console.log(`value: ${text}, type:${typeof text}`);
// 75, string
text = '8'/2;
console.log(`value: ${text}, type:${typeof text}`);
// 4, number
console.log(text.charAt(0));
// error

// => 따라서 Type Script를 나중에 배우게 됨
// 자바스크립트에서 타입이 정해져있는 정적 타입 언어