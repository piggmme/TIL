# `aria-label` vs. `aria-labelledby`

## `aria-label`

- 현재 요소에 레이블을 정의하기 위해 사용됨.
- 간단히 말하면, 화면에 현재 요소를 설명할 텍스트가 없으니까, 이 요소가 무슨 기능을 하는지 설명용 텍스트를 담는 것!
- `aria-label`은 HTML요소와 함께 사용가능. ARIA `role`이 적용된 요소에만 한정되지 않음.
- `button`에 텍스트 콘텐츠와 `aria-label`이 둘 다 있으면 `aria-label`값만 사용됨.

### 예1

- 닫기 버튼

```html
<button aria-label="Close" onclick="myDialog.close()">X</button>
```

> 위의 버튼은 가운데에 X가 있는 닫기 버튼처럼 스타일링 할 것임.
> 이 버튼의 목적이 "대화상자를 닫는 것" 인데, 그것에 대해서 암시하는 것이 없다.

따라서 스크린리더에게 `aria-label`로 이 버튼이 닫기 버튼임을 알려준다.

### 예2

- 햄버거 메뉴

```html
<button aria-label="menu" class="hamburger"></button>
```

> 위의 버튼은 메뉴 리스트를 펼치는 버튼으로, 그 목적을 `aria-label`로 명확히 함.

---

## aria-labelledby

- 화면에 현재 요소를 설명할 텍스트가 있어서, 이 요소는 해당 텍스트 내용의 기능을 한다~ 라는 것을 표현하기 위해, 텍스트 영역과 현재 요소를 연결함!
- `aria-labelledby`를 사용하면, 어떤 요소의 레이블로서 DOM에 있는 다른 모든 html 요소(주로 텍스트)의 ID를 지정할 수 있음.

### 예

- 점심 선택하기

```html
<span id="today-lunch"> 오늘의 점심 </span>

<div role="radiogroup" aria-labelledby="today-lunch">
  <div>
    <input type="radio" name="lunch" id="lunch1" />
    <label for="lunch">국밥</label>
  </div>
  <div>
    <input type="radio" name="lunch" id="lunch2" />
    <label for="lunch">돈까스</label>
  </div>
  <div>
    <input type="radio" name="lunch" id="lunch3" />
    <label for="lunch">냉면</label>
  </div>
  <div>
    <input type="radio" name="lunch" id="lunch4" />
    <label for="lunch">햄버거</label>
  </div>
</div>
```

> 오늘의 점심이라는 텍스트가 radiogroup영역을 가장 잘 설명하기 때문에, `aria-labelledby`로 연결함.

---

## aria-label vs. aria-labelledby vs. native text

> 참고로 native text는 현재 요소의 텍스트값임.

```html
<span id="labelledby">aria-labelledby text</span>
<button class="menu" aria-label="label text" aria-labelledby="labelledby-text">
  navive text
</button>
```

- 위의 예제에서 `aria-labelledby`속성으로 정의한 내용이 최우선 됨.
