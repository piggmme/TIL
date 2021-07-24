// 1. 반복문 for
for (let i = 0; i < 10; i++) {
  console.log(i); //0, 1, ... 9
}
for (let i = 10; i > 0; i--) {
  console.log(i); // 10, 9, ... 1
}

const names = ["멍멍이", "야옹이", "얼룩이"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 2. 반복문 while
let i = 0;
while (i < 10) {
  // 조건이 언젠간 false가 되어야함. 안그러면 무한루프
  console.log(i); // 0, 1, ... 9
  i++;
}

// 2-1. 불리언
i = 0;
let isFun = false;
while (!isFun) {
  console.log(i); // 0~ 29 까지
  i++;
  if (i === 30) {
    isFun = true;
  }
}

// 3. for...of / for ...in
// 3-1. for ... of => 배열에 있는 것 가져옴
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number); // 10, 20, 30, 40, 50
}

// 3-1-1. 다른 함수 예시
numbers.forEach((number) => console.log(number)); // 10, 20, 30, 40, 50

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};
console.log(Object.entries(doggy)); // [Array(2), Array(2), Array(2)] => 객체를 배열형태로 반환
console.log(Object.keys(doggy)); // ["name", "sound", "age"] => key 값을 배열 형태로 반환
console.log(Object.values(doggy)); // ["멍멍이", "멍멍", 2] => value값을 배열 형태로 반환

// 3-2. for ... in => 객체에 있는 키를 가져옴
for (let key in doggy) {
  console.log(`${key} : ${doggy[key]}`);
}

// 4. continue 와 break => 반복문에서 사용가능
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 2일 때는 바로 다음 반복문으로 들어감
  console.log(i);
  if (i === 5) break; // 반복문 종료됨
}

// 연습
function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result); // 15

// Quiz => 배열을 받고, 그 중에서 3 보다 큰 수로 이뤄진 배열 반환
// A1.
function biggerThanThree(numbers) {
  /* 구현해보세요 */
  let result = [];
  for (let number of numbers) {
    if (number <= 3) continue;
    else result.push(number);
  }
  return result;
}

// A2.
function biggerThanThree(numbers) {
  /* 구현해보세요 */
  let result = numbers.filter((number) => number > 3);
  return result;
}
