/***** 1. if - else 조건문 *****/

// 1-1. if 조건문
const a = 1;
if (a + 1 === 2) {
  console.log("a + 1 이 2 입니다.");
}

// 참고1) 지역 변수 예제
const b = 1;
if (b + 1 === 2) {
  const b = 2;
  console.log("if문 안의 b 값은 " + b); // 2
}
console.log("if문 밖의 b 값은 " + b); // 1

// 참고2) var을 쓰지않는 이유!
var c = 1;
if (c + 1 === 2) {
  var c = 2; // 여기서 바깥의 c가 수정되어 버림
  console.log("if문 안의 c 값은 " + c); // 2
}
console.log("if문 밖의 c 값은 " + c); // 2

// 1-2. if /else if /else
const d = 10;
if (d == 5) {
  console.log("5 입니다");
} else if (d == 10) {
  console.log("10 입니다"); // 실행됨
} else {
  console.log("5도 아니고 10도 아니다");
}

/***** 2. switch case *****/
const device = "iphone";

switch (device) {
  case "iphone":
    console.log("iphone");
    break;
  case "ipad":
    console.log("ipad");
    break;
  case "galaxy note":
    console.log("galxy note");
    break;
  default:
    console.log("IDK...");
}

// 2-1. break 가 없을 때
switch (device) {
  case "iphone":
    console.log("iphone"); // 출력
  case "ipad":
    console.log("ipad"); // 출력
    break;
  case "galaxy note":
    console.log("galxy note");
    break;
  default:
    console.log("IDK...");
}

/***** 3. 조건문 더 스마트하게 쓰기  *****/
// 3-1. includes
// 3-1-2.
{
  function isAnimal(text) {
    const animals = ["고양이", "개", "거북이", "너구리"];
    return animals.includes(text);
  }
  console.log(isAnimal("개"));
  console.log(isAnimal("노트북"));
}
// 3-1-2. 화살표 함수로 작성
{
  const isAnimal = (text) =>
    ["고양이", "개", "거북이", "너구리"].includes(text);
  console.log(isAnimal("개"));
  console.log(isAnimal("노트북"));
}

// 3-2. 객체 활용 : 조건에 따라 해야하는 작업이 달라지는 경우 객체를 활용하라
// 3-2-1. if문 사용했을 경우
{
  function getSound(animal) {
    if (animal === "개") return "멍멍";
    if (animal === "고양이") return "야옹";
    if (animal === "참새") return "짹짹";
    if (animal === "비둘기") return "구구";
    return "...?";
  }
  console.log(getSound("개"));
  console.log(getSound("사람"));
}
// 3-2-2. 객체 활용
{
  function getSound(animal) {
    const sounds = {
      개: "멍멍",
      고양이: "야옹",
      참새: "짹짹",
      비둘기: "구구",
    };
    return sounds[animal] || "...?";
  }
  console.log(getSound("개"));
  console.log(getSound("사람"));
}
// 3-2-3. 객체에 함수
{
  function makeSound(animal) {
    const tasks = {
      개: () => console.log("멍멍"),
      고양이() {
        console.log("야옹");
      },
      비둘기() {
        console.log("구구");
      },
    };
    const task = tasks[animal];
    if (!task) {
      console.log("...?");
      return;
    }
    task();
  }
  makeSound("개");
  makeSound("사람");
}
