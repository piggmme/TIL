// https://poiemaweb.com/ex/date

// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기
const formatDate = date =>
  `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? '0' + (+date.getMonth() + 1) : +date.getMonth() + 1
  }-${date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate()}`;

console.log(formatDate(new Date('2021/07/24'))); // => "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))); // => "1900-01-04"
