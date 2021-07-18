'use strict';
// - Objects
// One of the javaScript’s data types.
// A collection of related data and/or functionality.
// Nearly all objects in javaScript are instances of Object
// object = {key: value}

// 1. Literals and properties
const obj1 = {} // 'object literal' syntax
const obj2 = new Object(); // 'object constructo' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age : 4}; // object
print(ellie);   // ellie, 4

// with javaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);  // true

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);  // undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name);    // conding 할 때
console.log(ellie['name']); // 실시간으로 원하는 값을 받아올 때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
   // console.log(obj.key); // error
   console.log(obj[key]);
}
printValue(ellie, 'name');


// 3. Property value shorthand
const person1 = { name : 'bob', age: 2 };
const person2 = { name : 'steve', age: 3 };
const person3 = { name : 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4)

// 4. Constructor function 
function Person(name, age){
    // this={};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. In operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

console.clear();

// 6. For .. in vs for .. of
// for (key in obj)
for (let key in ellie){
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let value of array){
    console.log(value);
}

//7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);
const user5 = Object.assign({}, user);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
