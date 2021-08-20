# Sass 연산과 함수

## 1. Operation

### 산술 연산자

- `+`, `-`
- `*` : 하나 이상 값이 반드시 숫자
- `/` : 오른쪽 값이 반드시 숫자
- `%` : 나머지

### 비교 연산자

> 결과는 부울값으로.

`==`, `!=`, `<`, `>`, `<=`, `>=`

### 논리 연산자

`and`, `or`, `not`

## 2. 숫자

### 상대적 단위 (%, em, vw) 연산

- CSS calc()

```scss
div {
  width: 50% - 20px; // 단위 모순 에러(Incompatible units error)
  width: calc(50% - 20px); // 연산 가능
}
```

### 나누기 연산 주의사항

> 오른쪽 값이 순수한 숫자여야함.

> CSS는 숫자를 구분하는 방법으로 `/`를 사용하기 때문에 나누기 연산으로 사용되지 않을 수 있음..!!

- 나누기 연산 사용하기 위해...

  - 변수에 저장된 값 또는 함수에 의해 반환되는 값을 사용하는 경우
  - ()로 묶여 있는 경우
  - 다른 산술 표현식과 같이 사용되는 경우

- SCSS

```scss
div {
  margin: 30px / 2 // 오류
  $x: 100px;
  width: $x / 2;  // 변수에 저장된 값을 나누기
  height: (100px / 2);  // 괄호로 묶어서 나누기
  font-size: 10px + 12px / 3;  // 더하기 연산과 같이 사용
}
```

- CSS

```css
div {
  margin: 30px / 2;
  width: 50px;
  height: 50px;
  font-size: 14px;
}
```

## 3. 문자 (String)

> `+` 연산자 사용

    - 첫번째 따옴표 있으면, 결과도 따옴표
    - 첫번째 따옴표 없으면, 결과도 따옴표 없음

- SCSS

```scss
div::after {
  content: "Hello " + World; // 따옴표 O
  flex-flow: row + "-reverse" + " " + wrap; // 따옴표 X
}
```

- CSS

```css
div::after {
  content: "Hello World";
  flex-flow: row-reverse wrap;
}
```

## 4. 색상 colors

> 색상도 연산 가능

- SCSS

```scss
div {
  color: #123456 + #345678;
  // R: 12 + 34 = 46
  // G: 34 + 56 = 8a
  // B: 56 + 78 = ce
  background: rgba(50, 100, 150, 0.5) + rgba(10, 20, 30, 0.5);
  // R: 50 + 10 = 60
  // G: 100 + 20 = 120
  // B: 150 + 30 = 180
  // A: Alpha channels must be equal
}
```

- CSS

```css
div {
  color: #468ace;
  background: rgba(60, 120, 180, 0.5);
}
```

> opacity 도 연산.

- SCSS

```scss
$color: rgba(10, 20, 30, 0.5);
div {
  color: opacify($color, 0.3); // 30% 더 불투명하게 / 0.5 + 0.3
  background-color: transparentize($color, 0.2); // 20% 더 투명하게 / 0.5 - 0.2
}
```

- CSS

```css
div {
  color: rgba(10, 20, 30, 0.8);
  background-color: rgba(10, 20, 30, 0.3);
}
```

## 5. 논리 boolean
