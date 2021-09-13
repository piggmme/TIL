const obj = {
  a: 1,
  b: 2,
};

const copy = obj;

console.log(copy === obj); // true
console.log(copy, obj); // { a: 1, b: 2 } { a: 1, b: 2 }

obj.c = 3;

console.log(copy === obj); // true
console.log(copy, obj); // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

function isEqueal(obj1, obj2) {
  // 두 객체의 동일한 프로퍼티가 있고, 값도 다 똑같은지 확인해라
}
function deepCopy(obj) {
  // 입력 객체를 깊은 복사해서 만든 값을 반환함
}

{
  var add = function (x, y) {
    return x + y;
  };

  console.log(add(1, 2));
  // ()는 함수 호출 연산자, add는 식별자로 함수 객체를 가리켜야한다.
}
{
  $.ajax({
    method: "POST",
    url: "/user",
    data: { id: 1, name: "Lee" },
    cache: false,
  });
}
{
  setTimeout(function () {
    console.log("1초 경과");
  }, 1000);
}
{
  var counter = {
    n: 0,
    increase() {
      this.n += 1;
    },
  };
  counter.increase();
  counter.n = -100; // 문제!!
}
