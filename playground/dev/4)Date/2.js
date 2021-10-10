// 2. 요일 구하기

const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const getDay = dateStr => day[new Date(dateStr).getDay()];

console.log(getDay('2021-07-24')); // => '토요일'
console.log(getDay('2021-07-25')); // => '일요일'
console.log(getDay('2021-07-26')); // => '월요일'
