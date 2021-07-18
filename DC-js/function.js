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
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i=0; i < args.length; i++){
        console.log(args[i])
    }
    for (const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // locak variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a+b;
}
const result = sum(1,2);
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

// 1. Function expression
// A function declaration can be called earlier than it is defined. (Hoisted)
// A function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
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

//named function
//better debuggin in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// - Arrow function
// Always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiple = (a, b) =>{
    // do something more
    return a * b;
};

// - IIFE : immediately invoked function expression
(function hello(){
    console.log('IIFE');
})();

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
