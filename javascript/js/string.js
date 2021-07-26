// 문자열
// 1. String as objects
{
  // 문자열 객체의 속성과 메서드를 사용할 수 있다.
  let string = "This is my string";
  let sample = new String("sample");
  console.log(string); // This is my string
  console.log(sample); // String {"sample"}

  // 1-1. 문자열 길이
  const len = string.length;
  console.log(len); // 17

  // 1-2. 특정 문자열 찾기
  console.log(string[0], string[len - 1]); // T, g

  // 1-3. 문자열 내부의 하위 문자열 찾기
  console.log(string.indexOf("my")); // 8
  console.log(string.lastIndexOf("i")); // 14 (마지막 부터, i를 찾아감)
  console.log(string.indexOf("water")); // -1 => 없는 경우!

  // 1-3. 문자열 내부의 하위 문자열 추출 (원본 건들이지 않음)
  // slice()의 두 번째 매개 변수는 선택 사항임.
  console.log(string.slice(0, 3)); // slice(idx, cnt);
  console.log(string.slice(8)); // my string => idx = 8이하의 모든 문자 출력
  console.log(string); // This is my string => 그대로

  // 1-4. 대 소문자 변경 (원본 건들이지 않음)
  let radData = "My NaMe Is MuD";
  console.log(radData.toLowerCase()); // my name is mud
  console.log(radData.toUpperCase()); // MY NAME IS MUD
  console.log(radData); // My NaMe Is MuD => 그대로

  // 1-5. 문자열의 일부를 변경하기 (원본 건들이지 않음)
  // replace("찾을 문자", "치환할 문자")
  console.log(string.replace("my", "your")); // This is your string
  console.log(string); // This is my string
}

// 2. 문자열 객체의 여러가지 함수
{
  // 2-1. charAt()
  // 문자열에서 인자로 넘긴 index에 해당하는 문자형 데이터를 반환함.
  const sample = "hello";
  console.log(sample.charAt(1)); // e
  console.log(sample[1]); // e
}
{
  // 2-2. substring()/ substr()
  const sample = "Hello world";
  // substring(시작 인덱스, 마지막 인덱스)
  const r_substring = sample.substring(0, 5);
  // substr(시작 인덱스, cnt)
  const r_substr = sample.substr(6, 5);

  console.log(r_substring); // Hello
  console.log(r_substr); // world
  console.log(sample); // Hello world => 그대로
}
{
  // 2-3. split("구분자")
  // 구분자를 기준으로 문자열을 잘라, 배열 객체로 반환함
  const sample = "Hello/World";
  console.log(sample.split("/")); // ["Hello", "World"]

  const sample2 = "hello~ world~ i luv chicken";
  console.log(sample2.split(" ")); // (5) ["hello~", "world~", "i", "luv", "chicken"]
  console.log(sample2.split("~")); // ["hello", " world", " i luv chicken"]
  console.log(sample2.split("")); // ["h", "e", "l", "l", "o", "~", " ", "w", "o", "r", "l", "d", "~", " ", "i", " ", "l", "u", "v", " ", "c", "h", "i", "c", "k", "e", "n"]
}
{
  // 2-4. concat("합칠 문자열")
  // 기존 문자열 그대로. 새로운 문자열로 반환함
  const sample1 = "hello";
  const sample2 = "world";
  console.log(sample1.concat(sample2)); //helloworld
  console.log(sample1); // hello
}
{
  // 2-3. trim()
  // 문자열 양쪽 끝의 공백을 제거함.
  const sample = "  Hello  ";
  console.log(sample.trim()); // "Hello"
  console.log(sample); // "   Hello  "
}
