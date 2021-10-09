// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

const makeNewId = newId =>
  newId.replace(/[A-Z]/g, match => match.toLowerCase().replace(/[a-z0-9]/g, ''));

console.log(makeNewId('...!@BaT#*..y.abcdefghijklm'));
