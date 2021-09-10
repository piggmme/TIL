// 전달 받은 배열 중 짝수만 더해서 반환하는 함수
{
  // 1. 명령형 프로그램
  function sumEven(numbers) {
    // sum even nubmers 라고 읽을 수 있도록 함수 이름과 매개변수 이름을 지어줌

    // 단점1. 변수 선언!
    var sum = 0; // 초기화를 해주어야한다. 산술 연산을 해야해서.

    // 자바스크립트 엔진이 length 프로퍼티 참조를 딱 한번만 실행함. 반복문을 반복해도 초기에 한번
    // 단점2. 변수 선언, 3개의 문이 나열되어있음. 좋지않아!
    // 0부터 시작해야하는거, length 이전까지 돌아야하는거, ... 사람한테 실수를 유발하는 부분!!
    for (let i = 0; i < numbers.length; i++) {
      // 가독성을 생각한다면
      var number = numbers[i];
      // 단점3. if문. 여기 들어가나 안들어가나 판단해야함.
      if (number % 2 === 0) {
        sum += number;
      }
    }

    return sum;
  }
  // console.log(sumEven([1, 2, 3, 4, 5]));
}
{
  // 2. 선언형 프로그램
  function sumEven(numbers) {
    // reduce 란
    // 배열에 존재하는 여러개의 값을 하나로 만드는 것!
    // map 이란
    // 여러개의 값이 존재할 때, 여러개의 값과 다른 값을 가지는 배열을 생성
    // filter
    // n개보다 작은 값의 집합을 만들어냄
    return numbers.reduce(function (acc, cur) {
      return cur % 2 === 0 ? acc + cur : acc;
    }, 0);
  }
  //  console.log(sumEven([1, 2, 3, 4, 5]));

  // 매개변수 선언밖에 없다. 매개변수는 금방 죽는다!
  // const sumEven = numbers => numbers.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), 0);
  // console.log(sumEven([1, 2, 3, 4, 5]));
}
{
  //   function getStringLength(str) {
  //     // str이 falsy면 ''를 str에 할당해라.
  //     str = str || ''; // 사실 이건 안티패턴. 매개변수를 수정하면 안된다.
  //     return str.length;
  //   }
  //   function getStringLength(str = '') {
  //     // ES6의 매개변수의 기본값 설정을 사용해, 초기값을 빈문자열로 설정함.
  //     // 만약, 인수값을 아무것도 보내지 않았을 때도 0을 반환하게됨. 이는 기대한 값이 아니다!
  //     return str.length;
  //   }
  function getStringLength(str) {
    // 이는 너무 귀찮다. typeScript를 사용하면 타입을 설정해줄 수 있다!
    if (typeof str !== 'string') throw new Error('error');
    return str.length;
  }
  console.log(getStringLength('hi')); // 2
  console.log(getStringLength()); // error
  //   console.log(getStringLength('123')); // error
}
{
  // 유사배열객체. 근데 꼭 이렇게 메서드를 사용해야할까? 그냥 함수를 선언해!!
  var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    legnth: 3
  };
  var foo = {
    var: 1,
    function: 2
  };
}
