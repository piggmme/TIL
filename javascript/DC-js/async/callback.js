"us strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting이 된 이후부터 작성한 코드 순서대로 하나하나 동기적으로 실행된다
// hoisting: var, function declaration
// 함수 선언들이 자동으로 코드의 제일 위로 올라가는 것

// 동기 (Synchronous)와 비동기(Asynchronous)
// - 동기 방식은 서버에서 요청을 보냈을 때 응답이 돌아와야 다음 동작을 수행할 수 있다.
//   즉 A작업이 모두 진행 될때까지 B작업은 대기해야한다.
// - 비동기 방식은 반대로 요청을 보냈을 때 응답 상태와 상관없이 다음 동작을 수행 할 수 있다.
//   즉 A작업이 시작하면 동시에 B작업이 실행된다. A작업은 결과값이 나오는대로 출력된다.

// 1-1. 동기 함수 : 실행 순서가 예측됨
console.log("1");
console.log("2");
console.log("3");

// 1-2. 비동기 함수 : 언제 실행될 지 모르는 함수
console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
// setTimeout(() => console.log('2'), 1000)
// setTimeout : 브라우저한테 지정한 시간이 지나면, (우리가 전달한 함수 = 콜백 함수)를 실행하게 요청함.
console.log("3");
// 1, 3, 2 순으로 출력됨

// 2. callback function
// 나중에 이 함수를 다시 불러줘! 그때 전달하는 함수를 callback function 이라고 함

// 2-1. Synchronous callback 동기
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); // hello

// 2-2. Asynchronous callback 비동기
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 2초 뒤에 async callback

// 3. callback 지옥 체험
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
