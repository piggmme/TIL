/* 1. if - else 조건문 */

// 1-1. if 조건문
const a = 1;
if(a + 1 === 2){
    console.log('a + 1 이 2 입니다.');
}

// 참고1) 지역 변수 예제
const b = 1;
if(b + 1 === 2){
    const b = 2;
    console.log('if문 안의 b 값은 ' + b); // 2
}
console.log('if문 밖의 b 값은 '+ b); // 1

// 참고2) var을 쓰지않는 이유!
var c = 1;
if(c + 1 === 2){
    var c = 2; // 여기서 바깥의 c가 수정되어 버림
    console.log('if문 안의 c 값은 ' + c); // 2
}
console.log('if문 밖의 c 값은 '+ c); // 2

// 1-2. if /else if /else
const d = 10;
if(d == 5){
    console.log('5 입니다');
} else if(d == 10) {
    console.log('10 입니다'); // 실행됨
} else {
    console.log('5도 아니고 10도 아니다')
}


/* 2. switch case */
const device = 'iphone';

switch (device){
    case 'iphone':
        console.log('iphone');
        break;
    case 'ipad':
        console.log('ipad');
        break;
    case 'galaxy note':
        console.log('galxy note');
        break;
    default:
        console.log('IDK...')
}

// 2-1. break 가 없을 때
switch (device){
    case 'iphone':
        console.log('iphone'); // 출력
    case 'ipad':
        console.log('ipad'); // 출력
        break;
    case 'galaxy note':
        console.log('galxy note');
        break;
    default:
        console.log('IDK...')
}