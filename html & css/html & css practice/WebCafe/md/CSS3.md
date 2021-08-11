# [CSS3 디자인](https://github.com/seulbinim/PDF/blob/master/CSS3.pdf)

## 1. CSS란

- CSS 또는 캐스케이딩 스타일 시트(Cascading Style Sheet)는 마크업 언어가 실제로 표시되는 방법을 기술하는 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있음.

- CSS는 W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높은 언어

- CSS는 웹 사이트에서 사용되는 스타일을 지정하기 위한 언어로, 스타일은 웹의 독창적인 개념이 아니라 웹 이전부터 워드프로세스 등에 사용했던 개념임

<br><br>

## 2. CSS의 과거와 현재

- 1996년 W3C의 주도하에 첫 번째 CSS Level 1이 발표. (빈약함)

- 1998년에 CSS Level 2가 등장. 대부분의 웹 브라우저가 CSS Level 2를 지원

- 그 후 CSS Level 2의 버그를 수정한 CSS Level 2.1이 2006년에 발표

- CSS Level 3는 단일 스택이 아닌, 모듈 단위로 그룹을 나눔.

<br>

### 2-1. 웹표준 개발 단계

<img src ="../img/css-2.png" alt="웹표준 개발 단계" width="400"/>

<br>

### 2-2. CSS3 모듈

- CSS : [w3.org](https://www.w3.org/Style/CSS/Overview.en.html)

- HTML : [Living Standards HTML](https://html.spec.whatwg.org/multipage/)
  새로운 명령어나 스펙의 standard를 확인할 수 있다.

- 브라우저별로 CSS모듈 확인 : [The CSS3 test](https://css3test.com/)

<br><br>

## 3. CSS 사용의 의의

- 스타일 사용의 중요한 의의

  - 문서의 구조와 표현을 분리할 수 있다는 점
  - 이는 구조와 표현을 분리함으로써 문서 구조의 수정 없이 스타일의 변경만으로 다양한 표현을 할 수 있음.

- [Tail Wind CSS](https://tailwindcss.com/)

- [CSS zen garden](http://www.csszengarden.com/)
  - HTML에는 정말 글정보만. 꾸미는데에는 CSS를!
  - 꾸미기 위해 HTML을 맞추지 않았음
  - 같은 HTML소스에 CSS로 다양하게 꾸며놓음
  - 나중에 시도해보쟈~

<br>

## 3-1. CSS 웹 브라우저별 접두사(vendor prefix)

- CSS3는 표준안이 아직 확정되지 않은 상태기 때문에, 최신 웹 브라우저들은 CSS3 속성을 실험적으로 제공하고 있다.
- 이를 위해 속성이나 속성 값 앞에 웹 브라우저별로 접두사를 제공.

<img src ="../img/css-3-1.png" alt="vendor prefix" width="400"/>

## 3-2. 상대 단위와 절대 단위

- 반응형의 경우, 상대 단위를 많이 사용하게 된다...
- 협업에서 rem을 많이 사용함.

## 3-3. RGBA 형식 및 HSLA 형식의 사용 예

- RGBA

`color : rgba(R, G, B, 투명도)`

- HSLA

`color : hsla(색상, 채도, 명도, 투명도)`

## 3-4. CSS 적용하기

- External
  - `<link>`, `@import`
  - css파일을 외부에 생성하여 HTML 문서에 연결.
- Embeded
  - `<style></style>`
  - HTML파일 내에 CSS코드를 직접 포함아여 스타일에 적용
- inline
  - `style` 속성
  - js로 css를 추가하는 방법.
  - 별로임!
