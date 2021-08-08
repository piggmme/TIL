// Q1. Make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(" | "); // 구분자 기본 = ,
  console.log(result); // apple,banana,orange
  // const result = fruits[0]+fruits[1]+fruits[2];
  // console.log(result);
}

// Q2. Make an array out of a string
{
  const fruits = "🍎, 🍌, 🍒, 🥝";
  const result = fruits.split(","); // (',', limitSize)
  console.log(result); // ["🍎", " 🍌", " 🍒", " 🥝"]
}

// Q3. Make this array look like this : [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1] => 배열 자체를 바꿈
}

// Q4. Make new array without the first two elements
{
  let array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result); // [1, 2] => 삭제한 값
  console.log(array); // [3, 4, 5] => 남은 값

  array = [1, 2, 3, 4, 5];
  const result2 = array.slice(2, 5);
  console.log(result2); // [3, 4, 5] => 잘라온 값
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
console.log(students); // [Student, Student, Student, Student, Student]

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  // true인 student를 return);
  console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result); // [Student, Student, Student]
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // 배열안에 들어있는 모든 요소들을 콜백 함수를 호출하면서, 콜백 함수에서 리턴 되어진 값으로 배열을 만들어 대체함
  const result = students.map((student) => student.score);
  console.log(result);
}

//   console.clear()

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // true, 50보다 낮은 애 한명 이라도 있다면 true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // 한명이라도 50점보다 작다면 false => 반전시켜 true
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // 현재 값을 return 해줘야함
  // prev 를 0부터 시작
  // return prev + curr.score; => 값이 누적됨
  // reduceRight 는 배열을 거꾸로 진행됨
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // map 으로 점수 배열을 생성하고, 그것 중에 50이상인 것만 고르고, join으로 string으로 전환
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();

  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // map으로 점수 배열 생성 후, sort로  오름차순 정렬한 다음, string으로 전환
  // 내림차순 하고싶다면 b - a
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
