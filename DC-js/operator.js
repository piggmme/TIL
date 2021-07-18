// added (in ES5)
// use this for Vanila Javascript.
'use strict';

// 1. string concatenation
console.log('my'+'cat'); // my cat
console.log('1'+2); // 12
console.log(`string literals: 1 + 2 = ${1+2}`); // string literals: 1 + 2 = 3
console.log(`string literals:
'''
1 + 2 = ${1+2}`);

// 2. numeric operators
console.log(1+1);   // add
console.log(1-1);   // substract
console.log(1/1);   // divide
console.log(1*1);   // multiply
console.log(5%2);   // remainder
console.log(2**3);  // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3, 3
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //3, 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); //3, 3
const postDecrement = counter--;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //3, 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; // false

// 6-1. || (or), finds the first truthy value, 무거운 함수는 뒤쪽으로!
console.log(`or: ${value1 || value2 || check()}`); // t, f, t => t

// 6-2. && (and), findes the first falsy value, 무거운 함수는 뒤쪽으로!
console.log(`and: ${value1 && value2 && check()}`); // t, f, t => F 

// // often used to copress long if-statement
// // nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for(let i = 0; i < 10; i++){
        // wasting time
        console.log('ha');
    }
    return true;
}

// 6-3. !(not)
console.log(!value1); // f


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // flase
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false);    // T
console.log(0 === false);   // F
console.log('' == false);   // T
console.log('' === false);  // F
console.log(null == undefined); // T
console.log(null == undefined); // F


// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name==='coder'){
    console.log('you are amazing coder')
}else{
    console.log('unkwnon')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!'); // chrome, firefox
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while; ${i}`); // 3, 2, 1
    i--;
}

// do while loop, body code is excuted first,
// then check the condition
do {
    console.log(`do while: ${i}`); // 0
    i--;
}while(i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`); // 3, 2, 1
}

for (let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`); // 3, 1
}

// nested loops, Big O(n^2) -> 쓰지말자 
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);  // 00 ~ 99
    }
}

// break, continue
// Q1
for (let i = 0; i <= 10 ; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(i);
}
// Q2
for (let i = 0; i <= 10; i++){
    console.log(i)
    if (i==8){
        break;
    }
}