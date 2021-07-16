/* 1. 변수 선언 */
let value = 1;
console.log(value);

value = 2;
console.log(value);

// 1-1. 같은 이름으로 변수 선언 불가
// let value = 2;

// 1-2. var로 변수 선언 => 잘 사용 X
var x = 1;
// var은 같은 이름으로 선언 가능
var x = 2; 



/* 2. 상수 const */
const a = 1;

// 2-1. 상수는 수정할 수 없다
// a = 2;

// 2-2. 같은 이름으로 상수 선언 불가
// const a = 2;



/* 3. 데이터 타입 */
// 3-1. 숫자
let value2 = 100;

// 3-2. 문자열
let text = 'Hello JS!';
let name = "안녕 자바스크립트!";
// ; 없어도 되고 있어도 되는데... 쓰는게 좋을듯

// 3-3. boolean
let good = true;
let loading = false;

// 3-4. null/ undefined
let bad = null; 
// null은 없다. ex) 난 친구같은거 없어!
let something = undefined; 
// undefined는 아직 정해지지 않았다! ex) 범인은 아직 정해지지 않았어
let criminal;
console.log(criminal); // undifined
