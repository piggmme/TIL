// Q1
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Q2
// const animals = ["m", "d", "c", "h"];
// for (let animal of animals) {
//   console.log(animal);
// }
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// Q3
// let i = 0;
// while (i < 10) {
//   i++;
//   if (i === 3) continue;
//   console.log(i);
//   if (i === 8) break;
// }

// Q4
// const person1 = {
//   name: "박지성",
//   age: 30,
//   introduce() {
//     console.log(`나는 ${this.name}, ${this.age}살 입니다`);
//   },
// };
// const person2 = {
//   name: "김연아",
//   age: 24,
// };

// person2.introduce = person1.introduce;

// person1.introduce();
// person2.introduce();

// Q5
// const person = {
//   name: "홍길동",
//   age: 35,
//   hobby: "등산",
//   job: "선생님",
// };
// function introduce({ name, hobby }) {
//   console.log("이름: " + name);
//   console.log("취미: " + hobby);
// }
// introduce(person);
