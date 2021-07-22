// 6. 올바른 괄호
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
// " ( " : mv += 1
// " ) " : mv -= 1
// - haveToOpen가 True일 때
// open만 해야함. 처음부터 close하면 잘못된 괄호임.
// 만약 close를 하면 haveToOpen이 false가 되고, close만 해야함.
// - haveToOpen이 false일 때
// close만 해야함. close가 open 된 만큼 하게 된다면 mv === 0 이 된다
// 만약 mv가 0이 아닌데 open 하려한다면 잘못된 괄호.
// - for문이 끝났다면
// 전체 괄호가 잘 닫겼다면 mv === 0 이 된다.
function solution(str) {
  let mv = 0,
    haveToOpen = true;
  for (let i = 0; i < str.length; i++) {
    if (haveToOpen) {
      if (str[i] === "(") mv += 1;
      else if (mv === 0) return "NO";
      else {
        haveToOpen = false;
        mv -= 1;
      }
    } else {
      if (str[i] === ")") mv -= 1;
      else if (mv !== 0) return "NO";
      else {
        haveToOpen = true;
        mv += 1;
      }
    }
  }
  if (mv !== 0) return "NO";
  return "YES";
}
// console.log(solution("(()()))"));
