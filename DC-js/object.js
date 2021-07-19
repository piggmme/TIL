'use strict';
// - Objects
// One of the javaScript’s data types.
// A collection of related data and/or functionality.
// Nearly all objects in javaScript are instances of Object
// object = {key: value}; 

// 1. Literals and properties 객체 생성 방법 
const obj1 = {} // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age : 4 }; // object, 자료를 묶어서 관리할 수 있다
print(ellie);   // ellie, 4

// with javaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // 나중에 객체에 프로퍼티를 추가할 수 있음
console.log(ellie.hasJob);  // true

// can delete properties later
delete ellie.hasJob; // 객체 삭제 또한 가능함
console.log(ellie.hasJob);  // undefined


// 2. Computed properties
// key should be always string
console.log(ellie.name);    // conding 할 때
console.log(ellie['name']); // 실시간으로 원하는 값을 받아올 때
ellie['hasJob'] = true; // 객체에 프로퍼티 새로 추가 
console.log(ellie.hasJob); // true

function printValue(obj, key){
   // console.log(obj.key); // error
   console.log(obj[key]); // 받아온 키값을 사용
}
printValue(ellie, 'name');


// 3. Property value shorthand
const person1 = { name : 'bob', age: 2 };
const person2 = { name : 'steve', age: 3 };
const person3 = { name : 'dave', age: 4 };
const person4 = new makePerson('ellie', 30);
console.log(person4) // {name: "ellie", age: 30}

function makePerson(name, age) {
    return{
        name,
        age,
    };
}


// 4. Constructor Function 
const person5 = new Person('ellie', 30);
console.log(person5) // Person {name: "ellie", age: 30}
function Person(name, age){
    // this={};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. In operator: property existence check (key in obj)
console.log('name' in ellie); // t
console.log('age' in ellie); // t
console.log('random' in ellie); // f
console.log(ellie.random); // undefined

// console.clear();

// 6. For .. in vs for .. of
// for (key in obj)
for (let key in ellie){ 
    console.log(key)
}

// for (value of iterable) => 배열 
const array = [1, 2, 4, 5];
for(let value of array){ // array에 있는 값들이 value에 할당됨 
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // {name : 'coder', age='20'}

// 7-1. old way 객체를 복제하는 방법
const user3 = {}; // 생성 후
for(let key in user){
    user3[key] = user[key]; // 차근 차근 복제
}
console.log(user3); // {name : 'coder', age='20'}

// 7-2. new way 객체를 복제하는 새로운 방법
const user4 = {}; // 생성 후
Object.assign(user4, user); // 복제
console.log(user4); // {name : 'coder', age='20'}

// 7-3. 객체를 생성과 동시에 복제
const user5 = Object.assign({}, user);

// another example
const fruit1 = { color: 'red', size: 'big'};
const fruit2 = { color: 'blue'};
const mixed = Object.assign({}, fruit1, fruit2);
// fruit1 복제 된 다음에 fruit2 가 복제된다. 뒤에 것을 겹치면 덮어쓴다.
console.log(mixed.color); // blue
console.log(mixed.size); // big
