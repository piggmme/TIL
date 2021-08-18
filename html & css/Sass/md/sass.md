# Sass 들어가며

## 1. CSS는 힘들어

- CSS는 작업이 고도화 될수록 불편함.
- 불필요한 Selector의 과용, 연산 기능 한계, Statement의 부재...

<br>

## 2. CSS Preprocessor - Sass

### CSS 전처리기

> CSS가 동작하기 전에 사용하는 기능,
> 웹에서는 CSS로 동작하지만, 이전에 Sass로 작성 가능하다.
> `Sass`, `Less`, `Stylus` 등이 있다.

### 사용법

- CSS말고 CSS 전처리기로 작성하면...

전처리기는 CSS 문법과 유사하고, 다양한 기능을 제공함.

> 선택자 중첩, 조건문, 반복문, 다양한 단위 연산...

- 하지만 웹에서 동작하지 않음!

> 그래서 전처리기를 웹에서 동작 가능한 표준 CSS로 컴파일(Compile)해야한다.

### Why Sass?

- Less

  > 기본적인 기능은 전처리기들이 비슷함, 하지만 몇몇 기능에 아쉬움이 있음

- Stylus

  > 깔끔하고 세련되고 기능도 훌륭, 하지만 덜 유명하고 성숙도 떨어짐. 버그도 종종 보임

- Sass(SCSS)
  > 위의 두가지 장점을 모두 가짐.

### Sass SCSS 차이

> Sass의 세번째 버전 === SCSS

1. SCSS는 문법이 CSS와 거의 동일함.

- Sass

```s
.list
  width: 100px
  float: left
  li
    color: red
    background: url("./image.jpg")
    &:last-child
      margin-right: -10px
```

- SCSS

```SCSS
.list {
  width: 100px;
  float: left;
  li {
    color: red;
    background: url("./image.jpg");
    &:last-child {
      margin-right: -10px;
    }
  }
}
```

2. Mixins 문법 차이

> Mixins : 재사용 가능한 기능을 만드는 방식

- Sass

```s
=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius

.box
  +border-radius(10px)
```

- SCSS

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px);
```

<br>

## 3. 컴파일 방법

### [SassMeister](https://www.sassmeister.com/)

> 설치하지 않고, 웹에서 컴파일해줌.

### Parcel

> 웹 애플리케이션 번들러

- SCSS

```scss

```

- CSS

```css

```
