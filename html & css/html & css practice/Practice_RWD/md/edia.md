# 이디야 미디어 쿼리

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

```

- 반응형으로 작성하고 싶다면!!

<img scr="./img/layout.png" width="400"/>

- 컨테이너로 `max-width: 1280px`

  > 1280px 이상 늘어나지 않게함.

- 가로 비율 값을 나눠서 계산하자.
