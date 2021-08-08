// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) : obj => string
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json); // ["apple","banana"]

// 1-1. stringify 예제
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol('id'), // JS에만 있는 데이터타입은 JSON에 포함되지 않음.
  jump: () => {
    // 함수는 JSON에 포함되지 않음, 함수는 object의 데이터가 아니기 때문에...
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2021-07-19T12:24:09.122Z"}

json = JSON.stringify(rabbit, ["name", "color", "size"]); // 원하는 목록만 전송할 수 있음
console.log(json); // {"name":"tori"}

// 1-2. call back function 으로 value 값 수정하기
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  /* 출력된 값
    key: , value: [object Object]
    key: name, value: tori
    key: color, value: white
    key: size, value: null
    key: birthDate, value: 2021-07-19T12:28:07.223Z
    key: jump, value: () => { // 함수는 JSON에 포함되지 않음, 함수는 object의 데이터가 아니기 때문에...
        console.log(`${name} can jump!`);
    } */
  return value;
});
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2021-07-19T12:31:58.563Z"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
// 이름이 ellie로 바뀜
console.log(json); // {"name":"ellie","color":"white","size":null,"birthDate":"2021-07-19T12:31:58.563Z"}

console.clear();

// 2. JSON to Object

// 2-1. parse(json) : string => obj
json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2021-07-19T12:37:27.557Z"}
let obj = JSON.parse(json);
console.log(obj); // {name: "tori", color: "white", size: null, birthDate: "2021-07-19T12:37:27.557Z"}

rabbit.jump(); // can jump!
// obj.jump(); // error => 애초에 stringify 할 때 function은 빠졋기 때문임

console.log(rabbit.birthDate.getDate()); // 19
// console.log(obj.birthDate.getDate()); // error => string으로 바꼈기 때문에...

// 2-2. call back function
obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // key: name, value: tori
  // key: color, value: white
  // key: size, value: null
  // key: birthDate, value: 2021-07-19T12:28:07.223Z
  // key: , value: [object Object]
  return value;
});

obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value; // string 값을 object Date에 맞춰 변경
});
console.log(obj);

console.log(rabbit.birthDate.getDate()); // 19
console.log(obj.birthDate.getDate()); // 19 => object Date로 바껴서 잘 동작함
