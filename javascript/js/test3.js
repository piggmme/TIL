// Q1
{
  const animals = ["dog", "cat", "elephant", "penguin"];
  animals.forEach((animal) => console.log(animal));
}
// Q2
{
  const numbers = [1, 2, 3, 4, 5];
  const answer = [];
  numbers.forEach((number) => {
    answer.push(number * 10);
  });
  console.log(answer);
}
{
  const numbers = [1, 2, 3, 4, 5];
  const answer = numbers.map((number) => number * 10);
  console.log(answer);
}

// Q3
{
  const people = [
    {
      name: "박지성",
      age: 30,
      hobby: "등산",
    },
    {
      name: "김연아",
      age: 28,
      hobby: "독서",
    },
    {
      name: "홍길동",
      age: 35,
      hobby: "영화감상",
    },
  ];

  const answer = people.filter((person) => person.age >= 30);
  console.log(answer);
}

// Q4
{
  const animals = ["dog", "cat", "elephant", "penguin", "monkey"];
  animals.splice(0, 3);
  animals.unshift("mouse");
  animals.pop();
  animals.push("fox");
  console.log(animals[1]);
}
// Q5
{
  const numbers = [1, 2, 3, 4, 5];
  const answer = numbers.reduce((acc, cur) => acc * cur, 1);
  console.log(answer);
}
