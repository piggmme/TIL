// 2. 특정 달의 말일 구하기

const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();
// 2021년 1월의 마지막 날은 31일
console.log(getLastDateOfMonth(2021, 0)); // => 31

// 2021년 2월의 마지막 날은 28일
console.log(getLastDateOfMonth(2021, 1)); // => 28
