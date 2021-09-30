// 표준 빌트인 객체 Number
// 원시 타입인 숫자를 다룰 때 유용한 프로퍼티와 메서드를 제공

/**************** 1. Number 생성자 함수 ****************/
{
  {
    // 1. 인수를 전달하지 않은 경우
    // [[PrimitiveValue]] 프로퍼티는 [[NumberData]] 내부슬롯을 가리킴.
    const numObj = new Number();
    console.log(numObj); // Number {[[PrimitiveValue]]: 0}
  }

  {
    // 2. 인수로 숫자를 전달한 경우
    const numObj = new Number(10);
    console.log(numObj); // Number {[[PrimitiveValue]]: 10}
  }

  {
    // 3. 숫자가 아닌 값을 전달한 경우, 인수를 숫자로 강제 변환후
    // [[NumberData]] 내부 슬롯에 변환된 숫자를 할당한 Number 래퍼 객체를 생성함.
    let numObj = new Number('0');
    console.log(numObj); // Number {[[PrimitiveValue]]: 10}

    // 인수를 숫자로 변환할 수 없는 경우 NaN
    numObj = new Number('Hello');
    console.log(numObj); // Number {[[PrimitiveValue]]: NaN}
  }

  {
    // 4. 명시적 타입 변환
    // 문자열 타입 => 숫자 타입
    Number('0'); //  0
    Number('-1'); //  -1
    Number('10.53'); //  10.53
    // 불리언 타입 => 숫자 타입
    Number(true); //  1
    Number(false); //  0
  }
}

/**************** 2. Number 프로퍼티 ****************/

// Number.EPSILON --------------------------
{
  // 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다
  // 2.2204460492503130808472633361816 × 10^-16
  // 부동 소수점으로 인해 발생하는 오차를 해결하기 위해서 사용한다.

  // 부동소수점을 비교하는 함수
  function isEqual(a, b) {
    // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
    return Math.abs(a - b) < Number.EPSILON;
  }
  isEqual(0.1 + 0.2, 0.3); //  true
}

// Number.MAX_VALUE --------------------------
{
  // 자바스크립트에서 표현할 수 있는 가장 큰 양수 값
  // (1.7976931348623157 × 10^308)
  // 이보다 큰 수는 Infinity다
  Number.MAX_VALUE; // 1.7976931348623157e+308
  Infinity > Number.MAX_VALUE; // true
}

// Number.Min_VALUE --------------------------
{
  // 자바스크립트에서 표현할 수 있는 가장 작은 양수 값
  // 이보다 작은 숫자는 0
  Number.MIN_VALUE; // 5e-324
  Number.MIN_VALUE > 0; // true
}

// Number.MAX_SAFE_INTEGER --------------------------
{
  // 자바스크립트에서 표현할 수 있는 가장 큰 정수값
  Number.MAX_SAFE_INTEGER; // 9007199254740991
}

// Number.MIN_SAFE_INTEGER --------------------------
{
  // 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값
  Number.MIN_SAFE_INTEGER; // -9007199254740991
}

// Number.POSITIVE_INFINITY --------------------------
{
  // 양의 무한대를 나타내는 숫자 Infinity와 동일함
  Number.POSITIVE_INFINITY; // Infinity
}

// Number.NEGATIVE_INFINITY --------------------------
{
  // 음의 무한대를 나타내는 숫자값 -Infinity와 같다.
  Number.NEGATIVE_INFINITY; // -Infinity
}

// Number.NaN --------------------------
{
  // 숫자가 아님(Not-a-Number)을 나타내는 숫자값이다. Number.NaN은 window.NaN과 같다
  Number.NaN; // NaN
}

// 3. Number 메서드 --------------------------

// Number.isFinite --------------------------
{
  // ES6에서 도입된 Number.isFinite 정적 메서드는 인수로 전달된 숫자값이 정상적인 유한수,
  // 즉 Infinity 또는 -Infinity가 아닌지 검사하여 그 결과를 불리언 값으로 반환한다

  // 인수가 정상적인 유한수이면 true를 반환한다.
  Number.isFinite(0); // true
  Number.isFinite(Number.MAX_VALUE); // true
  Number.isFinite(Number.MIN_VALUE); // true

  // 인수가 무한수이면 false를 반환한다.
  Number.isFinite(Infinity); // false
  Number.isFinite(-Infinity); // false

  // 인수가 NaN이면 언제나 false를 반환한다.
  Number.isFinite(NaN); // false

  // 인수를 숫자로 암묵적 타입 변환을 하지 않는다.
  Number.isFinite(null); // false

  // 빌트인 전역 함수 isFinite는 암묵적 타입 변환을 한다.
  isFinite(null); // true
}

// Number.isInteger --------------------------
{
  // ES6에서 도입된 Number.isInteger 정적 메서드는 인수로 전달된 숫자값이 정수integer인지 검사하여 그 결과를 불리언 값으로 반환한다.
  // 검사하기 전에 인수를 숫자로 암묵적 타입 변환하지 않는다.

  // 인수가 정수이면 true를 반환한다.
  Number.isInteger(0); // true
  Number.isInteger(123); // true
  Number.isInteger(-123); // true
  // 0.5는 정수가 아니다.
  Number.isInteger(0.5); // false
  // '123'을 숫자로 암묵적 타입 변환하지 않는다.
  Number.isInteger('123'); // false
  // false를 숫자로 암묵적 타입 변환하지 않는다.
  Number.isInteger(false); // false
  // Infinity/-Infinity는 정수가 아니다.
  Number.isInteger(Infinity); // false
  Number.isInteger(-Infinity); // false
}

// Number.isNaN --------------------------
{
  // 인수로 전달된 숫자값이 NaN인지 검사, 그 결과를 불리언으로 반환

  // 인수가 NaN이면 true를 반환한다.
  Number.isNaN(NaN); // true

  // - 전역 함수 isNaN
  // 전달받은 인수를 암묵적 타입변환 한다음 검사를 수행
  // isFinite는 인수를 숫자로 암묵적 타입 변환한다. undefined는 NaN으로 암묵적 타입 변환된다.
  isNaN(undefined); // true

  // - Number.isNaN
  // 암묵적 타입 변환을 하지 않음
  Number.isNaN(undefined); // false
}

// Number.isSafeInteger --------------------------
{
  // ES6에서 도입된 Number.isSafeInteger 정적 메서드는 인수로 전달된 숫자값이 안전한 정수인지 검사하여 그 결과를 불리언 값으로 반환한다.
  // 검사전에 인수를 숫자로 암묵적 타입 변환하지 않는다.

  // 0은 안전한 정수다.
  Number.isSafeInteger(0); // true
  // 1000000000000000은 안전한 정수다.
  Number.isSafeInteger(1000000000000000); // true
  // 10000000000000001은 안전하지 않다.
  Number.isSafeInteger(10000000000000001); // false
  // 0.5는 정수가 아니다.
  Number.isSafeInteger(0.5); // false
  // '123'을 숫자로 암묵적 타입 변환하지 않는다.
  Number.isSafeInteger('123'); // false
  // false를 숫자로 암묵적 타입 변환하지 않는다.
  Number.isSafeInteger(false); // false
  // Infinity/-Infinity는 정수가 아니다.
  Number.isSafeInteger(Infinity); // false
}

// 4. Number 프로토타입 메서드 --------------------------

// Number.prototype.toExponential --------------------------
{
  // 숫자를 지수 표기법으로 변환하여 문자열로 반환한다
  // 인수로 소수점 이하로 표현할 자릿수를 전달할 수 있다.
  (77.1234).toExponential(); // "7.71234e+1"
  (77.1234).toExponential(4); // "7.7123e+1"
  (77.1234).toExponential(2); // "7.71e+1"

  // 숫자 리터럴과 함께 Number 프로토타입 메서드를 사용할 경우 에러가 발생
  // 숫자 뒤의 .을 부동소수점 숫자의 소수 구분 기호로 해석함
  // 77.toExponential(); // SyntaxError: Invalid or unexpected token

  (77.1234).toExponential(); // "7.71234e+1"
  // 첫번째 . : 소수 구분 기호
  // 두번째 . : 프로퍼티 접근 연산자

  // 다음과 같이 그룹 연산자를 사용하자.
  (77).toExponential(); // "7.7e+1"

  // 공백도 가능
  (77).toExponential(); // "7.7e+1"
}

// --------------------------
{
}

// --------------------------
{
}

// --------------------------
{
}
