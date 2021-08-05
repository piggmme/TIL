// 3. 후위식 연산 (postfix) => 면접볼 때!!
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

// ▣ 입력설명
// 매개변수 s에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않은 문자열입니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
// ▣ 출력설명
// 연산한 결과를 반환합니다.
// ▣ 매개변수 형식 1
// 352+*9-
// ▣ 반환값 형식 1
// 12

// 이미지 자료 : ./03-전위후위중위.jpeg 확인

// - 트리
//     1
//   2   3
// 4  5 6  7

// - 전위 : 부모 -> 왼쪽 -> 오른쪽
// 1,2,4,5,3,6,7
// - 중위 : 왼쪽 -> 부모 -> 오른쪽
// 4,2,5,1,6,3,7
// - 후위 : 왼쪽 -> 오른쪽 -> 부모
// 4,5,2,6,7,3,1

// - 3*(5+2)-9 (중위식)
// - 트리
//       -
//    *     9
//  3   +
//    5   2
// 후위식 : 3,5,2,+,*,9,-

// Sol)
{
  function solution(s) {
    let answer;
    let stack = [];
    for (let x of s) {
      if (!isNaN(x)) stack.push(Number(x));
      else {
        let rt = stack.pop();
        let lt = stack.pop();
        if (x === "+") stack.push(lt + rt);
        else if (x === "-") stack.push(lt - rt);
        else if (x === "*") stack.push(lt * rt);
        else if (x === "/") stack.push(lt / rt);
      }
    }
    answer = stack[0];
    return answer;
  }
  // console.log(solution("352+*9-"));
}

// MySol)
{
  function solution(str) {
    let arr = str.split("");
    let stack = [];
    let sp = -1;
    let N = arr.length;
    let op = ["*", "-", "+", "/"];

    for (let j = 0; j < N; j++) {
      if (op.indexOf(arr[j]) !== -1) {
        // 기호 찾음
        // stack의 가장 위에있는 2개를 연산하고, sp를 1 감소한다음, stack에 삽입.
        // 가장 위에있는 값은 pop해준다.
        let temp = stack[sp - 1] + arr[j] + stack[sp];
        sp -= 1;
        stack[sp] = String(eval(temp));
        stack.pop();
      } else {
        // 숫자인 경우엔 스택에 쌓아준다.
        stack.push(arr[j]);
        sp += 1;
      }
    }

    return stack[0];
  }
  // console.log(solution("352+*9-"));
}
