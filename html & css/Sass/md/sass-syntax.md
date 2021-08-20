# Sass 문법

## 1. 주석

```sass
// 컴파일 되지 않는 주석

/* 컴파일
되는 주석 */
```

<br>

## 2. 데이터 종류

- Numbers
  `1`, `.82`, `20px`, `2em`...

  > 단위 있거나 없거나

- Strings
  `bold`, `relative`, `"/images/a.png"`, `"dotum"`

  > 따옴표 있거나 없거나

- Colors
  `red`, `blue`, `#FFFF00`, `rgba(255,0,0,.5)`

- Booleans
  `true`, `false`

- Nulls
  `null`

  > 속성값이 null이면 컴파일 안됨

- Lists
  `(a, b, c)`, `a b`

  > () 붙이거나 안붙이거나

- Maps
  `(apple: a, orange: o, banana: b)`

  > `key: value` 형태, () 꼭 붙여야함

<br>

## 3. 중첩(Nesting)

> SCSS는 중첩이 허용되어, 상위 선택자 반복을 피할 수 있다.

- SCSS

```scss
.section {
  width: 100%;
  .list {
    padding: 20px;
    li {
      float: left;
    }
  }
}
```

- CSS

```css
.section {
  width: 100%;
}
.section .list {
  padding: 20px;
}
.section .list li {
  float: left;
}
```

## 4. Ampersand (상위 선택자 참조)

> 자기 자신을 추가적으로 정의할 때 `&`을 사용

- SCSS

```scss
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}
```

- CSS

```css
.btn {
  position: absolute;
}
.btn.active {
  color: red;
}
.list li:last-child {
  margin-right: 0;
}
```

> `&`는 상위 선택자로 치환되는 것이기 때문에... 다음도 가능!

- SCSS

```scss
.fs {
  &-small {
    font-size: 12px;
  }
  &-medium {
    font-size: 14px;
  }
  &-large {
    font-size: 16px;
  }
}
```

- CSS

```css
.fs-small {
  font-size: 12px;
}
.fs-medium {
  font-size: 14px;
}
.fs-large {
  font-size: 16px;
}
```

## 5. @at-root (중첩 벗어나기)

> 중첩에서 벗어나고 싶을 때!
> 중첩 안에서 작성해야하는데, 중첩 밖에서 사용해야 하는 경우...

- SCSS

```scss
.list {
  // 변수
  $w: 100px;
  $h: 50px;
  li {
    width: $w;
    height: $h;
  }
  @at-root .box {
    width: $w;
    height: $h;
  }
}
```

- CSS

```css
.list li {
  width: 100px;
  height: 50px;
}
.box {
  width: 100px;
  height: 50px;
}
```

## 6. 중첩된 속성

> `font-`, `margin-` 등과 같이 동일한 네임은 다음과 같이 사용 가능.

- SCSS

```scss
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  }
  margin: {
    top: 10px;
    left: 20px;
  }
  padding: {
    bottom: 40px;
    right: 30px;
  }
}
```

- CSS

```css
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-bottom: 40px;
  padding-right: 30px;
}
```

## 7. 변수

> `$`을 변수이름 앞에 붙임.

- SCSS

```scss
$color-primary: #e96900;
$url-images: "/assets/images/";
$w: 200px;

.box {
  width: $w;
  margin-left: $w;
  background: $color-primary url($url-images + "bg.jpg");
}
```

- CSS

```css
.box {
  width: 200px;
  margin-left: 200px;
  background: #e96900 url("/assets/images/bg.jpg");
}
```

## 8. 변수 유효범위 (Variable Scope)

> 선언된 블록(`{}`) 내에서만!

- SCSS

```scss
.box1 {
  $color: #111;
  background: $color;
}
// Error
.box2 {
  background: $color;
}
```

## 9. 변수 재 할당

> 다른 변수를 새로운 변수에 값을 할당

- SCSS

```scss
$red: #ff0000;
$blue: #0000ff;

$color-primary: $blue;
$color-danger: $red;

.box {
  color: $color-primary;
  background: $color-danger;
}
```

- CSS

```css
.box {
  color: #0000ff;
  background: #ff0000;
}
```

## 10. `!global` 전역 설정

> `!global`로 변수의 유효범위를 전역으로!

- SCSS

```scss
.box1 {
  $color: #111 !global; // 전역
  background: $color;
}
.box2 {
  background: $color;
}
```

- CSS

```css
.box1 {
  background: #111;
}
.box2 {
  background: #111;
}
```

> 주의! 기존에 사용하던 변수가 덮어질 수 있음.

- SCSS

```scss
$color: #000;
.box1 {
  $color: #111 !global; // color 덮어씀
  background: $color;
}
.box2 {
  background: $color; // #111
}
.box3 {
  $color: #222; // color 재정의
  background: $color;
}
```

- CSS

```css
.box1 {
  background: #111;
}
.box2 {
  background: #111;
}
.box3 {
  background: #222;
}
```

## 11. `!default` 초기값 설정

> `!default` 할당되지 않은 변수의 초기값을 설정

- SCSS

```scss
$color-primary: red;

.box {
  // color-primary가 값이 이미 존재한다면?
  // blue를 사용하지 않고, 기본값을 사용하겠다.
  $color-primary: blue !default;
  background: $color-primary;
}
```

- CSS

```css
.box {
  background: red;
}
```

> 변수와 값을 설정하겠다. 하지만 기존에 이미 존재하는 값이라면, 현재 설정값을 무효화하고 기존 값을 사용하겠다!

> 부트스트랩에서 `!default` 유용하게 쓰임.

- SCSS

```scss
// _config.scss
$color-active: red;
```

- SCSS

```scss
// main.scss
@import "config";

$color-active: blue !default;

.box {
  background: $color-active; // red
}
```

## 12. `#{}` 문자 보간

> `#{}` 로 코드의 어디든 변수 값을 넣을 수 있다.

- SCSS

```scss
// unquote : 따옴표를 제거함
$family: unquote("Droid+Sans");
// 해당 변수는 아래와 같이 문자열 사이에 들어감.
@import url("http://fonts.googleapis.com/css?family=#{$family}");
```

- CSS

```css
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

## 13. 가져오기 `@import`

> `@import`로 외부 Sass를 Sass로 가져옴

- CSS는...

  > `@import url("경로");`

- Sass는...

  > `@import "경로";`

### Sass와 CSS `@import` 규칙으로 컴파일 되는 네가지 규칙

- 파일 확장자가 `.css`일 때
- 파일 이름이 `http://`로 시작
- `url()`이 붙어있음
- 미디어 쿼리가 있는 경우

```scss
@import "hello.css";
@import "http://hello.com/hello";
@import url(hello);
@import "hello" screen;
```

### Sass `@import`

```sass
@import "header", "footer";
```

### 파일 분할

- 프로젝트 규모가 커지면 파일들을 분할하여 유지보수
- 그러면 파일이 많아지는데, 모든 파일이 각각 `.css`로 저장된다면 관리/성능 문제 발생
- Sass는 파일이름 앞에 `_` 를 붙여 `@import`하면 각각의 `~.css`로 컴파일 하지 않고 병합됨.

> `_` 쓰지 않은 예시

- shell

```bash
Sass-App
  # ...
  ├─scss
  │  ├─header.scss
  │  ├─side-menu.scss
  │  └─main.scss
  # ...
```

- SCSS

```scss
// main.scss
@import "header", "side-menu";
```

- 컴파일 후, 파일 별로 쪼개져서 `.css` 파일이 됨

```bash
Sass-App
  # ...
  ├─css
  │  ├─header.css
  │  ├─side-menu.css
  │  └─main.css
  ├─scss
  │  ├─header.scss
  │  ├─side-menu.scss
  │  └─main.scss
  # ...
```

> `_` 사용한 예시

- shell

```bash
Sass-App
  # ...
  ├─scss
  │  ├─_header.scss
  │  ├─_side-menu.scss
  │  └─main.scss
  # ...
```

- SCSS

```scss
// main.scss
@import "header", "side-menu";
```

- 컴파일 후, 합쳐져서 main.css에 저장됨

```bash
Sass-App
  # ...
  ├─css
  │  └─main.css  # main + header + side-menu
  ├─scss
  │  ├─header.scss
  │  ├─side-menu.scss
  │  └─main.scss
  # ...
```
