// 문제 설명
// 버블버블
// 김토스는 프론트엔드 기술에 대한 전문성을 높이기 위해 브라우저 내부 동작을 공부하고 있습니다. 공부하던 중, 브라우저의 이벤트 버블링(Event bubbling)에 대해 알게 되었습니다.

// 이벤트 버블링의 예시
// 아래 HTML DOM 구조에서 ID가 "first-input"인 입력에 이벤트가 발생한 상황을 가정합시다.

// <form id="root">                <!-- (3) 이벤트 버블링 -->
//   <div id="first">              <!-- (2) 이벤트 버블링 -->
//     <input id="first-input" />  <!-- (1) 이벤트 발생! -->
//   </div>
//   <div id="second">
//     <input id="second-input" />
//   </div>
// </form>
// 그 이벤트는

// 최초에는 ID가 "first-input"인 input의 이벤트 핸들러로 전달되고,
// 그 다음에는 상위 엘리먼트인 ID가 "first"인 div의 이벤트 핸들러에게,
// 마지막으로는 최상위 엘리먼트인 ID가 "root"인 div의 이벤트 핸들러로 전달됩니다.
// "first-input"의 조상이 아닌 요소들은 "first-input"에서 발생한 이벤트를 전달받지 못합니다. 예를 들어, ID가 "second" 또는 "second-input" 인 HTML 요소들은 이벤트를 전달받지 못합니다.

// 문제
// 김토스는 이벤트 버블링을 더 잘 이해하기 위해 가짜 DOM으로 이벤트 버블링을 구현해보고자 합니다.

// 김토스의 가짜 DOM 요소를 만드는 solution(type, id, listener) 함수를 구현해주세요.

// 요구사항 1. DOM 요소 생성
// solution 함수를 이용하여 type이 div이고 id가 first인 요소를 다음과 같이 생성할 수 있어야 합니다. 이 요소는 이벤트가 발생했을 때 이벤트 정보를 console에 기록합니다.

// // <div id="first" /> 를 생성
// const myElement = solution(
//   'div',                           // 요소 종류
//   'first',                         // 요소 ID
//   (event) => console.log(event)    // 이벤트가 발생했을 때 실행될 함수
// );
// 생성된 요소의 종류와 ID를 type과 id 프로퍼티로 접근할 수 있어야 합니다.

// myElement.type === 'div' // true
// myElement.id === 'first' // true
// 요구사항 2. 자식 요소 추가, 삭제하기
// 생성된 DOM 요소에서 자식 요소를 추가하거나 삭제할 수 있어야 합니다. 이를 위해 DOM 요소는 addChild, removeChild 메서드를 제공해야 합니다.

// /*
//  * 아래 구조의 DOM을 만드는 코드
//  * <div id="foo">
//  *   <button id="bar">
//  *   </button>
//  *  </div>
//  */
// const div = solution('div', 'foo', event => console.log('foo', event));
// const button = solution('button', 'bar', event => console.log('bar', event));

// div.addChild(button);
// 위 예시에서는 addChild 메서드로 div 요소에 button 요소를 자식으로 추가합니다.

// // div가 더 이상 button을 자식으로 가지지 않도록 함
// div.removeChild(button);
// removeChild 메서드를 이용하여 자식 요소를 삭제합니다.

// 조건

// div.addChild(button);
// button.addChild(div);   /* 에러 발생: div는 button의 부모임 */
// 어떤 요소의 부모는 그 요소의 자식이 될 수 없습니다. 자식이 부모를 addChild하려 한다면, 에러가 발생해야 합니다.
// const div1 = solution('div', 'div1', e => console.log(e));
// const div2 = solution('div', 'div2', e => console.log(e));
// const button = solution('button', 'button', e => console.log(e));

// div1.addChild(button);
// div2.addChild(button);   /* 에러 발생: button은 이미 div1을 부모로 가지고 있음 */
// 이미 부모가 있는 요소를 자식으로 추가할 수 없습니다. 부모가 있는 요소를 자식으로 추가하려 한다면, 에러가 발생해야 합니다.
// const div1 = solution('div', 'div1', e => console.log(e));
// const div2 = solution('div', 'div2', e => console.log(e));
// const button = solution('button', 'button', e => console.log(e));

// div1.addChild(button);
// div2.removeChild(button);   /* 에러 발생: button은 div2의 자식이 아님 */
// 자식이 아닌 요소를 삭제할 수 없습니다. 자식이 아닌 요소를 삭제하려 한다면, 에러가 발생해야 합니다.
// 요구사항 3. 이벤트 발생
// 생성한 DOM 객체에 onEvent() 메서드를 이용하여 이벤트를 발생시킬 수 있어야 합니다. 이벤트로는 문자열이 주어집니다.

// const element1 = solution(
//   'div',
//   'element-1',
//   e => console.log(`element1: ${e}`)
// );

// // element1: click event 출력
// element1.onEvent('click event');
// 요소에 이벤트가 발생하면, solution 함수의 세 번째 인자로 주어진 listener 함수를 실행합니다.
// listener 함수의 인자로 onEvent 에 주어진 이벤트 문자열을 전달합니다.
// const element2 = solution(
//   'div',
//   'element-2',
//   e => console.log(`element2: ${e}`);
// );

// element1.addChild(element2);

// // 아래 내용을 차례대로 출력
// // element2: mouseover event
// // element1: mouseover event
// element2.onEvent('mouseover event');
// 자식 요소에서 이벤트가 발생했다면, 부모 요소도 이벤트가 발생해야 합니다.
// listener 함수가 실행되는 순서는 자식 → 부모 순이어야 합니다.
// 유의사항
// interface DOMElement {
//   type: string;
//   id: string;
//   onEvent: (event: string) => void;
//   addChild: (child: DOMElement) => void;
//   removeChild: (child: DOMElement) => void;
// }
// 위 DOM 요소 인터페이스를 만족하는 한, 가짜 DOM 객체를 자유롭게 구현할 수 있습니다.
// 에러는 throw new Error()를 통해 발생시켜주세요. throw '' 등은 테스트를 통과하지 못할 수 있습니다.
// function solution(type, id, listener) {
//     return {
//         type,
//         id,
//         onEvent(event) {
//             listener(event);
//         },
//         addChild(node) {},
//         removeChild(node) {},
//     }
// }
