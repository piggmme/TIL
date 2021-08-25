# Main

## HTML

```html

```

## SCSS

```scss

```

- [@custom-selector](https://preset-env.cssdb.org/features#custom-selectors)]

```scss
  [class*="__enTitle"]
```

- [font awesome - accessibility](https://fontawesome.com/v5.15/how-to-use/on-the-web/other-topics/accessibility)

- 프로젝트 할 때, post css 뭐 어떤걸 시도해봤다~ 실패해도 괜찮음.

- data-tooltip

- font-size clamp함수

## \_sprite.scss

```scss
// sprites
@use './color' as var; // 별칭 붙임
// 색상 테마
$colors: (
  "Green": var.$green,
  "Yellow": var.$yellow,
  "Brown": var.$brown,
  "Orange": var.$orange,
  "Blue": var.$blue,
);

@each $color, $color-value in $colors {
  // #{}으로 변수 값을 빼옴.
  .theme#{$color} {
    color: $color-value;
  }
}

// 스프라이트 배경이미지
.sprite {
  min-height: rem(60px);
  padding-left: rem(64px);
  background-image: url(./../assets/images/sprite_main.png);
  background-repeat: no-repeat;

  // 리스트 유형
  $sprites: Book, Board, News, Favorite, Twitter;
  $x: 0;
  $y: 0;

  @each $sprite in $sprites {
    // 인덱스를 index함수로 뽑아내서 i에 저장
    $i: index($sprites, $sprite);
    // #{} 변수를 뽑아줌.
    &#{$sprite} {
      background-position: $x $y;
    }
    // y값 115씩 감소
    $y: $y - 115px;
  }
}
```

- @each 반복문

- 데이터형: map
