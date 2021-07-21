/* DOM 요소 선택 */

/* 1. HTML 태그 이름(tag name)을 이용한 선택 */
{
  // li태그의 객체 집합을 받아옴.
  const selectedItem = document.getElementsByTagName("li");
  for (let i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red";
    // item()메소드는 해당 html 객체 집합에서 전달 받은 인덱스에 해당하는 요소를 반환.
  }
}

/* 2. 아이디(id)를 이용한 선택 */
{
  // 아이디가 even인 요소를 받아옴.
  const selectedItem = document.getElementById("even");
  selectedItem.style.color = "red";
}

/* 3. 클래스(class)를 이용한 선택 */
{
  // 클래스가 odd인 모든 요소를 선택함
  const selectedItem = document.getElementsByClassName("odd");
  for (let i = 0; i < selectedItem.length; i++) {
    // 선택된 모든 클래스 요소의 텍스트 색상을 변겅
    selectedItem.item(i).style.color = "red";
  }
}

/* 4. name 속성을 이용한 선택 */
{
  // HTML 요소의 name 속성이 first인 모든 요소를 선택함
  const selectedItem = document.getElementsByName("first");
  for (let i = 0; i < selectedItem.length; i++) {
    // 선택된 모든 요소의 텍스트 색상을 변겅
    selectedItem.item(i).style.color = "red";
  }
}

/* 5. CSS 선택자(selector)를 이용한 선택 */
// querySelectorAll은 익스플로어 8과 그 이전은 지원하지 않음
{
  const selectedItem = document.querySelectorAll("li.odd");
  // 클래스가 "odd"인 요소 중에서 <li> 요소만을 선택함. => 복합선택자 중 일치 선택자임.
  for (let i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
  }
}

/* 6. HTML 객체 집합(object collection)을 이용한 선택 */
{
  const title = document.title;
  // <title> 요소를 선택함
  document.write(title);
  // html 문서에 title 요소의 값을 작성함.
}

/* 7. DOM 요소의 내용 변경  */
// 7-1. innerHTML : HTML 요소의 내용을 변경하는 방법
{
  const str = document.getElementById("text");
  str.innerHTML = "이 문장으로 바뀌었습니다!";
}

// 7-2. innerHTML : 속성 이름을 선택하면, 속성 값도 바꿀 수 있음.
{
  const link = document.getElementById("link"); // 아이디가 "link"인 요소를 선택함.
  link.href = "/javascript/intro"; // 해당 요소의 href 속성값을 변경함.
  link.innerHTML = "자바스크립트 수업 바로 가기!"; // 해당 요소의 내용을 변경함.
}
