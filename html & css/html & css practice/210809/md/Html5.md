# HTML5 Markup

## 1. 새로운 표준 HTML5

- 이전 버전 : HTML 4.01 / X-HTML 1.0
- HTML5(최신 표준) : 액티브X 없이 브라우저에서 비디오, 오디오등을 쉽게 이용할 수 있게 함

<br>

### 1-1. Html 탄생

#### 1-1-1. HTML5가 탄생하기 이전에 HTML의 최초버전은 1993년에, 최신버전은 1999년에

- 서드파티 기술 난입 - ria기술
  => 비표준이 만연한 시기

#### 1-1-2. XHTML1.0 (X: extensible)

- XML :
  데이터 전송의 표준. 태그로 감싸서 보내면 해당 정보가 어떤 정보인지 파악가능.
  문법이 정해져있음. (대소문자 혼용X ...)

- XML처럼 HTML을 재정시키자..!

[Emmet Document](https://docs.emmet.io/cheat-sheet/)

#### 1-1-3. WHATWG(Web Hypertext Application Technology Working Group)

- web application

#### 1-1-4. HTML5 탄생

- W3C가 만들던 HTML2.0 실패 인정하고, 새롭게 HTML을 개발하기로 결정하면서 WHATWG의 표준안을 따라 HTML5가 탄생함

<br>
<br>

## 2. HTML4.01, XHTML1.9과 HTML5의 차이점

### 2-1 콘텐츠 모델

  <img src="../img/2-1.png" width="400">

- HTML4 : html 태그를 inline, block 두 가지 요소로만 구별

- HTML5 : 태그의 특성에 따라 Metadata, Flow, Sectioning, Heading, Pharsing, Embedded, Interactive로 총 7개 카테고리로 분류함

1. MetaData Content

- 문서의 표현이나 동작을 설정, 다른 문서와의 관계 설정, 다른 문서에 정보를 전달
- `link, meta, script, style, title, ...`

2. Flow Content

- 문서나 Application의 본문 안에서 사용되는 컨텐츠
- `a, article, audio, br, button, canvas, code, div, figure, footer, form, h1, ... ,h6, header, i, img, input, lebel, map, mark, menu, nav, ol, p, pre, script, select, span, strong, sub, table, ul, video, text ...`

3. Sectioning Content

- Headings Content와 footer을 정의하는 컨텐츠
- `article, aside, nav, section`

4. Heading Content

- Sectioning Content의 header를 정의하는 컨텐츠
- `h1, h2, h3, h4, h5, h6`

5. Pharsing Content

- 텍스트와 텍스트가 포함된 마크업을 정의하는 컨텐츠
- `a, area, audio, br, button, canvas, i, img, kbd, label, script, select, span, strong, sub, sup, textarea, video, text, ...`

6. Embedded Content

- 다른 리소스나 컨텐츠를 문서에 삽입하는 컨텐츠
- `audio, canvas, embed, iframe, img, math, object, svg, video`

7. Interactive Content

- 사용자와 상호작용을 위해 사용되는 컨텐츠
- `a, button, details, embed, iframe, select, textarea, keygen, label, audio, img, input, menu...`

<br>
<br>

### 2-2. 아웃라인 알고리즘(Outline Algorithm)

- HTML 구획 요소와 HTML 제목 요소의 관계가 문서의 outline을 결정짓는다.

- Heading : 제목을 만들어주어야 한다.

- [HTML5 outline 참고](https://m.blog.naver.com/pjh445/220016749215)

<br>
<br>

## 3. HTML5의 API

- Application Cache
  오프라인에서 사용하는데 필요한 리소스를 클라이언트 쪽에 캐시하기 위한 기능 ...

- Web Storage

- Web SQL Database/ indexed Database

<br>
<br>

## 4. 기본문법 - [MDN](https://developer.mozilla.org/ko/)

- HTML5와 XHTML1.0 둘 다 맞지만, 하나를 골라서 사용해야함

- 시작 태그와 종료 태그의 중첩에 문제가 발생하지 않도록 해야함

- 속성 중복사용 불가.
