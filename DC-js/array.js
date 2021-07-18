'use strict';
// Array

// 1. Declaration'
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length-1]); // banana

// console.clear();

// 3. Loopin over an array
// print all fruits
// 3-1. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// 3-2.for of
for(let fruit of fruits){
    console.log(fruit);
}
// 3-3. forEach : 배열.forEach(function(배열요소,인덱스,배열)) => 각각의 요소마다 함수를 반복한다
fruits.forEach(function (fruit, index, array){
    console.log(fruit, index);
});
fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// 4-1. Push: add an item to the end
fruits.push('strawberry', 'peach')
console.log(fruits); // "apple", "banana", "strawberry", "peach"

//4-2. pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); // "apple", "banana"

// 4-3. unshift: add an item to the benigging 앞에서 삽입
fruits.unshift('strawberry','lemon');
console.log(fruits); // "strawberry", "lemon", "apple", "banana"

// 4-4. shift: remove an item from the benigging 앞에서 삭제 
fruits.shift();
fruits.shift();
console.log(fruits); // "apple", "banana"

// note! shift, unshift are slower than pop, push
// shift, unshift 는 엄청 느림!! pop, push를 사용하자
// splice: remove an item by index position
// 지정된 위치에서 삭제가능
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits); // ["apple", "banana", "strawberry", "peach", "lemon"]
fruits.splice(1, 1); // start, count => 바나나 삭제
console.log(fruits); // ["apple", "strawberry", "peach", "lemon"]
fruits.splice(1, 1,'apple','watermelon'); // 인덱스=1 에 사과 수박 삽입
console.log(fruits); // ["apple", "apple", "watermelon", "peach", "lemon"]

// 4-5. combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2); // 붙여넣기. 
console.log(newFruits); // ["apple", "apple", "watermelon", "peach", "lemon", "pear", "coconut"]

// console.clear();
// 5. Searching
// 5-1. find the index
console.log(fruits); // ["apple", "apple", "watermelon", "peach", "lemon"]
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('watermelon')); // 2
console.log(fruits.includes('watermelon')); // t
console.log(fruits.includes('coconut')); // f
console.log(fruits.indexOf('coconut')); // -1

// 5-2. lastIndexOf
// console.clear();
fruits.push('apple');
console.log(fruits); // ["apple", "apple", "watermelon", "peach", "lemon", "apple"]
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.lastIndexOf('apple')); // 5
