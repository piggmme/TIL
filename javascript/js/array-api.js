/******* 1. 배열 내장함수 - forEach *******/
// 배열안에 들어있는 요소 하나하나를 함수에 적용
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// 1-1. 함수에 적용
function print(hero){
    console.log(hero);
}
superheroes.forEach(print)

// 1-2. 화살표 함수에 적용
superheroes.forEach(hero => console.log(hero));




/*******  2. 배열 내장함수 - map ******/
// 배열 안에 있는 요소 하나하나를 함수에 적용하여, 배열로 반환
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 2-1. forEach로 구현
const squared = [];
array.forEach(n => squared.push(n * n));

console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64]


// 2-2. map 사용
const square = n => n * n; // 제곱 반환하는 화살표 함수
const squared2 = array.map(square);

console.log(squared2); // [1, 4, 9, 16, 25, 36, 49, 64]


// 2-3. 단축
const squared3 = array.map(n => n * n);

console.log(squared3); // [1, 4, 9, 16, 25, 36, 49, 64]


// 2-4. 객체가 들어있는 배열
const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];
const texts = items.map(item => item.text);
console.log(texts); // ["hello", "bye"]





/******* 3. indexOf, findIndex, find ********/

// 3-1. indexOf
// 특정 항목이 배열에서 몇 번째에 있는지 확인 
const index = superheroes.indexOf('토르');
console.log(index); // 2
console.log(superheroes.indexOf('강희')); // -1 : 없다


// 3-2. findIndex 
// 배열안에 있는 것이 객체인 경우, 특정 항목을 만족시키는 것의 인덱스를 찾을때 사용
// 입력: 부울값 / 출력: 인덱스 값
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
]

const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2); // 2


// 3-3. find
// 배열안에 있는 것이 객체인 경우, 특정 항목을 만족시키는 객체를 찾을때 사용
// 만족시키는 가장 첫번째 객체를 반환함.
// 입력: 부울값 / 출력: 객체
const todo = todos.find(todo => todo.id === 3)
console.log(todo); // {id: 3, text: "객체와 배열 배우기", done: true}






/******* 4. 배열 내장함수 - filter *******/
// 배열안에 특정 조건을 만족시키는 원소들을 찾아, 배열로 반환 

const tasksNotDone = todos.filter(todo => todo.done == false);
console.log(tasksNotDone); // [Object]




/******* 5. 배열 내장함수 -splice와 slice *******/
// - splice : 배열안에서 요소를 삭제하고, 기존의 배열값을 바꿈. 반환값은 삭제한 요소값 
// array.splice(start, count)
// start = 시작 인덱스 값 , count = 삭제할 요소 갯수 

// - slice : 배열안에서 요소를 잘라낸다. 기존의 배열은 그대로. 반환값이 잘라낸 요소값
// array.slice(index, count)
// index = 시작 인덱스 값, count = 잘라낼 요소 갯수

let numbers = [10, 20, 30, 40];
const index3 = numbers.indexOf(30);
const spliced = numbers.splice(index3, 2);
console.log(spliced); // 잘려나간 값 [30, 40]
console.log(numbers); // 남은 값 [10, 20]

numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2);
console.log(sliced); // 잘라낸 값 [10, 20]
console.log(numbers); // 기존 함수 [10, 20, 30, 40]




/******* 6. 배열 내장함수 - shift, pop, unshift, push *******/
// - shift : 배열에서 맨 앞의 요소를 빼옴. 기존의 배열이 변화함. 반환값은 빼온 값
const numbers2 = [10, 20, 30, 40];

const value = numbers2.shift();
numbers2.shift();
console.log(value); // 10
console.log(numbers2); // [30, 40]

// - unshift : 기존 배열의 맨 앞에 요소를 삽입함.
numbers2.unshift(50);
console.log(numbers2); // [50, 30, 40]


// - pop: 배열에서 맨 뒤의 요소를 빼옴. 기존의 배열이 변화함. 반환값은 빼온 값
const numbers3 = [10, 20, 30, 40];
const value3 = numbers3.pop();
console.log(value3); // 40
console.log(numbers3); // [10, 20, 30]

// - push : 기존 배열의 맨 뒤에 요소를 삽입함. 
numbers3.push(50);
console.log(numbers3); // [10, 20, 30, 50]





/******* 7. concat, join *******/

// 7-1. concat
// 여러개의 배열을 하나로 합침, 기존의 배열은 바꾸지 않음.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]

const concated2 = [...arr1, ...arr2];
console.log(concated2); // [1, 2, 3, 4, 5, 6]


// 7-2. join
// 배열을 구분자를 이용해 문자열로 반환함
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.join()); // 1,2,3,4,5
console.log(arr3.join(' ')); // 1 2 3 4 5
console.log(arr3.join(', ')); // 1, 2, 3, 4, 5





/******* 8. 배열 내장함수 - reduce *******/

// 8-1. forEach로 구현
const numbers4 = [1, 2, 3, 4, 5];
let sum = 0;
numbers4.forEach(n => {
    sum += n;
});
console.log(sum); // 15


// 8-2. reduce
// array.reduce((acc, cur, idx, arr) => return next_acc, 0);
// acc : 누적되는 값. 초기값은 0으로 지정. 반환값이 다음 단계의 acc로 설정됨
// cur : 현재 값. 배열안의 요소들이 들어가게 됨.
// idx : 현재 인덱스 값.
// arr : 해당 배열. 자기자신

// 8-2-1. 총 합
const sum2 = numbers4.reduce((acc, cur) => acc + cur, 0);
console.log(sum2); // 15

// 8-2-2. 평균
const avg = numbers4.reduce((acc, curr, idx, arr) =>{
    if(idx === arr.length - 1){
        return (acc + curr) / arr.length;
    }
    return acc + curr; // 반환 값은 다음 단계의 acc로 들어감 
}, 0);
console.log(avg); // 3


// 8-3. reduce로 문자열 다루기
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, cur) => {
    if (acc[cur]){
        acc[cur] += 1;
    } else{
        acc[cur] = 1;
    }
    return acc;
}, {}); // acc 초기값이 객체임

console.log(counts); // {a: 3, b: 1, c: 2, d: 1, e: 1}





/******* 9. 배열 내장함수 - 복습과 퀴즈 *******/
// 배열을 받고, 10보다 큰 수의 갯수를 반환하는 함수
// A1
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.reduce((acc, cur) => {
      if(cur > 10) acc += 1;
      return acc;
    }, 0)
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5



// A2
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.filter(n => n > 10).length;
  }
  
const count2 = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count2); // 5
