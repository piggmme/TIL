// 5. 두 날짜 사이의 일수 구하기

// const diffDays = (date1, date2) =>
//   Math.floor(Math.abs(date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000));

const diffDays = (date1, date2) => Math.floor(Math.abs(date1 - date2) / (24 * 60 * 60 * 1000));

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364
