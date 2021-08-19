# 이디야

## Header

### 헤더 구조와 초기화

- HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <!-- X: 비표준, UA 호환성 보기, IE=edge : 최신 버전으로 렌더링해라 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>음료 소개 - 이디야 커피</title>
    <link rel="shortcut icon" href="./images/favicon.ico" />
    <link rel="stylesheet" href="./css/main.css" />
    <!-- <link rel="icon" href="./images/favicon.png" /> -->
  </head>
  <body>
    <div class="container">
      <div class="header" role="banner">
        <h1 class="brand">
          <a href="#"
            ><img
              srcset="
                ./images/ediya-logo@1x.png 1x,
                ./images/ediya-logo@2x.png 2x,
                ./images/ediya-logo@3x.png 3x
              "
              src="./images/ediya-logo.png"
              alt="EDIYA COFFEE"
          /></a>
        </h1>
        <button
          type="button"
          class="button button-open-menu"
          aria-label="메뉴 열기"
          title="메뉴 열기"
        >
          <span class="ir"></span>
        </button>
        <div
          class="navigation is-active"
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul class="reset-list">
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
            <li><a href="#">이디야 디자인</a></li>
            <li><a href="#">이디야 음료</a></li>
            <li><a href="#">이디아 뉴스</a></li>
            <li><a href="#">매장찾기</a></li>
          </ul>
          <button
            class="button button-close-menu"
            type="button"
            aria-label="메뉴 닫기"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
      <div class="main" role="main">메인 콘텐츠</div>
      <div class="footer a11y-hidden" role="contentinfo"></div>
    </div>
  </body>
</html>
```

- CSS

```css
/* normalize css cdn - reset css */
@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css);

.container {
  background-color: silver;
}
/* 모바일 버전 */
@media screen and (max-width: 767px) {
}
/* 데스크 버전 */
@media screen and (min-width: 768px) {
  .button-open-menu,
  .button-close-menu {
    display: none;
  }
}
```

### 헤더 CSS

<img src="./img/header-lay.png" width="400">

- navigation
  position: fixed
  height: 100vh

```css

```
