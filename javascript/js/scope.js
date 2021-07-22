/***** Scope 영역 *****/
// 1. global scope
// 전역, 코드의 모든 범위에서 사용가능
// 2. function scope
// 특정 함수 영역에서만 사용 가능
// 3. block scope
// if, for, switch 문 블록 안에서만 사용 가능

// ex1. global scope
{
  const value = "hello!"; // global

  function myFunction() {
    console.log("myFunction: " + value);
    // myFunction: hello!
  }

  function otherFunction() {
    const value = "bye!"; // function scope
    console.log("otherFunction: " + value);
    // otherFunction: bye!
  }

  myFunction();
  otherFunction();

  console.log("global scope: " + value);
  //global scope: hello!
}

// ex2. function scope
{
  // global
  const value = "hello!";

  function myFunction() {
    const value = "bye!";
    // function
    const anotherValue = "world!";
    function functionInside() {
      console.log("FunctionInside: " + value + anotherValue); // bye!world!
    }
    functionInside();
  }

  myFunction();
  console.log("global scope: " + value); // hello!
  // console.log(anotherValue); // referenceError!
}

// ex3. block scope
// var을 사용하게 된다면 ... function 단위로 scope가 설정되어서, block안에서 사용해도, 영향을 미침
// const/ let을 사용하면 잘 적용됨.
{
  const value = "hello!"; // global

  function myFunction() {
    const value = "bye!"; // function
    if (true) {
      const value = "world"; // block
      console.log("block scope: " + value); // world
    }
    console.log("function scope: " + value); // bye!
  }

  myFunction();
  console.log("global scope: " + value); // hello!
}

/***** 4. Hoisting *****/
// JS는 함수 선언을 밑에 작성하더라도, 코드의 맨 위로 함수 선언을 위로 끌어 올려준다.
// 따라서 함수 선언 전에 함수를 사용해도 잘 작동한다.
// 하지만 코드를 이해하는데 오래걸릴 수 있고, 유지보수가 어렵기 때문에 hoisting을 기피해야함.
// 이는 var 변수도 마찬가지이다.

// 4-1. function hoisting
{
  myFunction(); // 잘 작동함.

  function myFunction() {
    // 함수 선언이 hoisting 되었기 때문
    console.log("hello");
  }
}

// 4-3. var hoisting
{
  console.log(number); // undefined
  var number = 2;
}

// 4-4. const, let은 hoisting이 발생하지 않는다!
{
  // console.log(number); // error!
  const number = 1;
}
