'use strict';
// function
// - fundamental building block in the program
// - subprogramm can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// Function name(param1, param2) { body … return; }
// One function === one thing
// Naming : do Something, command, verb
// e.g. createCardAndPoint => createCard, createPoint
// Function is object in JS
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello!!');
log(1234);

// 2. Parameters
// Primitive parameters: passed by value
// Object parameters: passed by reference
function changeName(obj){
    obj.name = 'color';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){ // from의 default 값을 정해둘 수 있음
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // from 값을 대입하지 않으면, undefined가 전달됨

// 4. Rest parameters (added in ES6)
function printAll(...args){ // ...은 배열 형태임 
    for(let i=0; i < args.length; i++){ // 배열의 길이만큼 돌면서 출력함
        console.log(args[i])
    }
    for (const arg of args){ // args에 있는 값들을 arg에 담아옴
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie'); // 배열로 전달 됨

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();
// console.log(message); => error

// 6. Return a value
function sum(a, b){
    return a+b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// Bad
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}
// good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    //long upgrade logic ...
}

// First-class function
// Function are treated like any other variable
// Can be assigned as a value to variable
// Can be passed as an argument to other function.
// Can be returned by another function
// 함수는 변수들 처럼 변수에 할당 되고, 함수의 매개변수로 전달되며, 리턴값으로 반환된다

// 1. Function expression
// - A function declaration can be called earlier than it is defined. (Hoisted)
// - A function expression is created when the execution reaches it.
// print(); => error, function expression은 선언 전에 사용 불가 
const print = function () { // function expression, anonymous function, 변수에 할당된 이름없는 함수
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

print2(); // hoisted
function print2(){ // function declaration
    console.log('print2')
}


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    // 함수를 매개 변수로 전달하고, 필요할 때 그 함수를 부르는 것 => callback function
    if(answer == 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debuggin in debugger's stack traces
// recursions => 재귀함수
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// - Arrow function
// Always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// };
// const valuename = (parameters..) => return;
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiple = (a, b) =>{
    // do something more
    return a * b;
};

// - IIFE : immediately invoked function expression
// 함수를 선언과 동시에 호출
(function hello(){
    console.log('IIFE');
})();

// Quiz
function calculate(command, a, b){
    switch (command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
    }
}
let hee = calculate('add',1,2);
console.log(hee);
