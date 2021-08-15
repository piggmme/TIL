# WCAG 2.1 - 1.인식의 용이성 (Perceivable)

## 0. WCAG란

- Web Content Accessibiility Guidelines

  > 웹 콘텐츠를 장애인이 보다 더 접근 가능하게 만드는 방법을 정의한다.

      - 전맹, 저시력
      - 난청, 청각장애
      - 운동장애
      - 언어장애
      - 광과민성
      - 학습장애/ 인지장애

### 원칙

    - 인식의 용이성 (perceivable)
    - 운용의 용이성 (operable)
    - 이해의 용이성 (understandable)
    - 견고성 (robust)

### 지침

    - 13가지
    - 틀(framework)와 목표(objectives)

### 성공기준

    - A(최저), AA, AAA(최고)

### 충분/조언

    - 웹 콘텐츠 저작자들이 지침을 보다 더 잘 구현할 수 있도록
    - 일반적인 실패가 있는 경우, 그러한 것들도 문서화

<br>

## 1. 인식의 용의성

- 정보와 사용자 인터페이스 요소는 사용자가 인식할 수 있는 방법으로 제시되어야 한다.

### 1.1 대체 텍스트

- 큰 인쇄물, 점자, 음성, 기호 또는 간단한 언어와 같이 사용자가 필요로 하는 다른 형식으로 변경할 수 있도록 텍스트가 아닌 콘텐츠에 대한 대체 텍스트를 제공해야 한다

## 홈페이지 사례

1. [야놀자](https://www.yanolja.com/)

- bad)tab키로 접근하였는데, 아이콘이 포커싱되는 효과가 없음...

- bad)색상 대비가 너무 미미함

![](./img/yanolja-color.png)

![](./img/yanolja-color2.png)

- bad)a link의 텍스트가 없음

![](./img/yanolja-link-text.png)

- bad)기본 언어가 표시되어있지 않음.

![](./img/yanolja-lang.png)

---

2. [엽떡](https://www.yupdduk.com/)

- bad)처음에 뜬 광고창 때문에 키보드로 접근이 불가능. 광고창 닫는 칸에 키보드 접근이 안된다.

![](./img/yup.png)

- bad)`target="_blank"`로 여는데, opnener 이나 openreferr이 사용되지 않음

![](./img/yup-blank.png)

- bad)input 아이디에서 label이 제공되지 않음. 비밀번호도 마찬가지

![](./img/yup-label.png)

- bad)네이버 아이디 로그인 텍스트와 네이버 이미지의 대체텍스트가 똑같음. 이미지 대체텍스트는 생략해야함.

![](./img/yup-alt.png)

- bad)색상 명암비가 확대시 3:1을 지키지 못한 2.7:1임.

![](./img/yup-contra.png)

---

3. [넷플릭스](https://www.netflix.com/browse)

- good)aria-label을 사용하였음, 그리고 이미지 alt는 생략하였다.

![](./img/netflix-aria-label.png)

- bad) 스크린리더(보이스오버)사용시 사용자정보에서, `&#xAC15;&#xD76C;`(강희) 을 직접 읽어줌

![](./img/netflix-screen1.png)

![](./img/netflix-screen2.png)

![](./img/netflix-screen3.png)
