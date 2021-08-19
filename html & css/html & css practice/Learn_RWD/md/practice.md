# 미디어 쿼리

## 기본 틀 설정

### HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>미디어쿼리</title>
    <link rel="stylesheet" href="./css/media-query.css" />
  </head>
  <body>
    <div class="container">
      <header class="header">헤더</header>
      <nav class="navigation">내비게이션</nav>
      <main class="main">
        <section class="content">메인 콘텐츠</section>
        <aside class="sidebar">사이드바</aside>
      </main>
      <footer class="footer">푸터</footer>
    </div>
  </body>
</html>
```

### CSS

```css
@import url(./variable.css);
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
}

/* 공통 */
.container {
  display: flex;
  /* 행방향, 줄바꿈 허용 */
  flex-flow: row wrap;
  /* 여러줄의 경우엔 align-content/ 한줄일 경우엔 align-items */
  align-content: flex-start;
  /* 메인이 남는 영역 다 차지하게 하기위해서 */
  min-height: 100vh;
}
.header,
.navigation,
.main,
.footer {
  min-height: 10vh;
  /* container안에서 열 처럼 보임. */
  width: 100%;
}
.header {
  background-color: var(--yellow);
}
.navigation {
  background-color: var(--pink);
}
.main {
  background-color: var(--blue);
}
.content {
  background-color: var(--coral);
}
.sidebar {
  background-color: var(--violet);
}
.footer {
  background-color: var(--tomato);
}

@media screen and (max-width: 767px) {
  /* 여긴 모바일 영역 */
}

@media screen and (min-width: 768px) {
  /* 여긴 데스크탑 영역 */
  .container {
    /* 최대로 커질수 잇는 너비 */
    max-width: 1200px;
    margin: 0 auto;
  }
  .main {
    display: flex;
    /* 행방향, 줄바꿈 허용 */
    flex-flow: row nowrap;
    /* 메인이 남는 영역 다 차지하게 하기위해서 */
    flex-grow: 1;
    justify-content: space-between;
  }
  .content {
    width: 78.125%;
  }
  .sidebar {
    width: 19.53125%;
  }
}
```

#### 반응형으로 작성하고 싶다면!!

<img scr="./img/layout.png" width="400"/>

- 컨테이너로 `max-width: 1280px`

  > 1280px 이상 늘어나지 않게함.

- 가로 비율 값을 나눠서 계산하자.

- main이 나머지 영역을 제외한 영역을 포함하고 싶다면?

<img scr="./img/main-flex.png" width="300"/>

```css
.container {
  display: flex;
  height: 100vh;
}
.main {
  flex-grow: 1;
}
```

- container도 설정해서, 자식 요소들을 column처럼(실은 row) 배치함!

```css
.container {
  display: flex;
  /* 행방향, 줄바꿈 허용 */
  flex-flow: row wrap;
  /* 여러줄의 경우엔 align-content/ 한줄일 경우엔 align-items */
  align-content: flex-start;
}
.header,
.navigation,
.main,
.footer {
  min-height: 10vh;
  /* 열 처럼 보임. */
  width: 100%;
}
```

> 컨테이너를 flex direction row로 해두어도, 나머지 자식요소들의 너비를 100%로 하면, 줄바꿈 되어서 column 처럼 보임.

---

## 반응형을 위해 알아야하는 이미지/ 비디오처리!!

## figure

### HTML

```html
<!-- <figure>
      <img class="fullsize-max" src="./images/lezhin-narrow.webp" alt="" />
    </figure> -->
<img
  src="./images/lezhin-wide.webp"
  src="./images/medium-1024.jpg"
  alt=""
  class="fullsize-max"
/>
```

### CSS

```css
@import url(./base.css);

figure {
  background-color: var(--pink);
}
.fullsize {
  /* 반응형 아님 */
  width: 100%;
  height: auto;
}
.fullsize-max {
  /* 이미지의 원본 크기 이상 커지지 않음. - 반응형 */
  max-width: 100%;
  height: auto;
}
```

## picture

- [내 화면은 몇배율?](https://www.mydevice.io/)

- `media="(max-width:767px)"`

- HTML

```html
<figure>
  <picture>
    <source
      srcset="/images/banner-narrow.jpg 1x, /images/banner-narrow@2x.jpg 2x"
      media="(max-width:767px)"
    />
    <source
      srcset="/images/banner-narrow.jpg 1x, /images/banner-narrow@2x.jpg 2x"
      media="(min-width:1000px)"
    />
    <img src="./images/banner-wide.jpg" alt="" />
  </picture>
</figure>
```

- [ficture pollifill](https://github.com/scottjehl/picturefill)

## video

```html
<figure>
  <!-- 이미지하고 비디오의 css처리가 좀 다르다. -->
  <!-- 비디오를 다룰 때 바깥에 클래스를 설정함. -->
  <video class="fullsize" poster="./video/poster.jpg">
    <!-- source 여러개해도 하나만 렌더링됨 -->
    <source src="./video/Google Developer Stories.mov" type="video/mov" />
    <source src="./video/Google Developer Stories.mp4" type="video/mov" />
    <source src="./video/Google Developer Stories.ogg" type="video/mov" />
    <source src="./video/google-developer-stories.webm" type="video/mov" />
    <!-- 자막 -->
    <track
      src="./video/google-developer-stories-subtitles-en.vtt"
      kind="captions"
      srclang="en"
      label="English Caption"
    />
  </video>
</figure>
```

- source 여러개해도 하나만 렌더링됨

## iframe

```html
<figure>
  <!-- 아이프레임은 컨테이너가 필요하다. -->
  <div class="iframe-container iframe16">
    <!-- 비디오 비율 = 0.5625 = 560:315 = 16:9 -->
    <!-- iframe16 = 16:9 비율입니다. -->
    <iframe
      class="fullsize"
      src="https://www.youtube.com/embed/lInsaDkR9Nc"
      aria-label="카야 생일 영상"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</figure>
```

- 옛날 반응형

```css
/* iframe 비디오 크기 컨테이너에 맞추기 - 옛날버전 */
.iframe-container {
  width: 100%;
  height: 0;
  position: relative;
}
/* 컨테이너가 높이를 가지지 않으니 패딩 트릭을 사용함. */
.iframe4 {
  /* 너비 기준 75%임. */
  padding-top: 75%;
}
.iframe16 {
  /* 너비 기준 56.25%임. */
  padding-top: 56.25%;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

- 모던 반응형

```css
/* iframe 비디오 크기 컨테이너에 맞추기 
- 옛날버전
height: 0,  
padding-top: 75%;
- 요즘엔
aspect-ratio: 4 / 3;
*/
.iframe-container {
  width: 100%;
  /* height: 0; */
  position: relative;
}
/* 컨테이너가 높이를 가지지 않으니 패딩 트릭을 사용함. */
.iframe4 {
  aspect-ratio: 4 / 3;
  /* 너비 기준 75%임. */
}
.iframe16 {
  aspect-ratio: 16 / 9;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
