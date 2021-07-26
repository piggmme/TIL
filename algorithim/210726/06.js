// 6. 학급 회장 => 해슁
// 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
// 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요.
// 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

/*
// - Map 객체 사용해야함.
{
  const map1 = new Map();

  // key와 value 설정
  map1.set("a", 1);
  map1.set("b", 2);
  map1.set("c", 3);

  // key값에 해당하는 value 가져옴
  console.log(map1.get("a"));
  // expected output: 1

  map1.set("a", 97);

  console.log(map1.get("a"));
  // expected output: 97

  console.log(map1.size);
  // expected output: 3

  // key 삭제함
  map1.delete("b");

  console.log(map1.size);
  // expected output: 2
}*/

// Sol)
function solution(s) {
  let sh = new Map();
  let max = 0,
    person;
  for (let x of s) {
    sh.set(x, sh.get(x) + 1 || 1); // 단축 논리 기법, key값이 없다면 NaN(falsy)라 1로 결정됨.
  }
  for (let [key, value] of sh) {
    if (max < value) {
      max = value;
      person = key;
    }
  }
  return person;
}

/*
// MySol)
function solution(s) {
  let cnt = {};
  let max = 0,
    person;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in cnt) cnt[s[i]] += 1;
    // key값 있는지 확인.
    else cnt[s[i]] = 1;
  }
  for (let key in cnt) {
    if (cnt[key] > max) {
      max = cnt[key];
      person = key;
    }
  }
  return person;
}*/
console.log(solution("BACBACCACCBDEDE"));
