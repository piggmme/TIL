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

```

- CSS

```css

```

- SCSS

```scss

```

- CSS

```css

```
