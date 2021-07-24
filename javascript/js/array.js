// 1. 배열
const array = [1, 2, 3, 4, 5];
console.log(array);

// 1-1. 배열 안에 객체를 저장
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

console.log(objects); //  [{…}, {…}]
console.log(objects[0]); // {name: "멍멍이"}
console.log(objects[1]); // {name: "야옹이"}

// 1-2. 새로운 항목 추가
objects.push({
  name: "멍뭉이",
});

console.log(objects[2]); // {name: "멍뭉이"}

// 1-3. 배열의 크기 => 갯수
console.log(objects.length); // 3

// 1-4. 배열 안에 다른 자료형 저장
const something = [1, true, { a: 1 }, [1, 2, 3, 4]];
something.push(6);
console.log(something.length); // 5
