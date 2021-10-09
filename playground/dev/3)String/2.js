// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
const solution = newId =>
  newId
    .replace(/[A-Z]/g, match => match.toLowerCase())
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/[.]+/g, '.')
    .replace(/(^[.])|([.]$)/g, '')
    .replace(/^$/g, 'a')
    .replace(/.+/g, match => (match.length >= 16 ? match.substring(0, 15) : match))
    .replace(/[.]$/g, '')
    .replace(/.{0,}/g, match =>
      match.length === 2
        ? match[0] + match[1].repeat(2)
        : match.length === 1
        ? match.repeat(3)
        : match
    );
console.log(solution('=.=')); // aaa
console.log(solution('...!@BaT#*..y.abcdefghijklm')); // bat.y.abcdefghi
console.log(solution('z-+.^.')); // z--
console.log(solution('123_.def')); // 123_.def
console.log(solution('abcdefghijklmn.p')); // abcdefghijklmn
