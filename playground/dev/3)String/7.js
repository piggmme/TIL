// 7. 문자열 압축
// https://regexr.com/

// const compress = str => str.replace(/(.)\1+/g, match => match[0] + match.length);

// 앞서 매치한 그룹을 패턴 내에서 재사용하려면 \1과 같이 그룹번호를 역슬래시로 이스케이프하여 표현한다.
// (.)에 매치된 문자를 재사용하여 1번이상 반복
const compress = str => str.replace(/(.)\1+/gi, match => match[0] + match.length);

console.log(compress('ABBCCCE')); // => AB2C3E
