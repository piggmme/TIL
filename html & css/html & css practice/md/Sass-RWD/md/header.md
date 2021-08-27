# Header

- [그리드 md](https://github.com/yamoo9/CSS-Grid)
- [그리드 e북](https://yamoo9.gitbook.io/css-grid/)

## 0. 폴더 구조 확인하기...

### map 타입 이용하여 작성한 media-query.scss

```scss
@if map-has-key($breakpoints, $breakpoint) ;
```

## HTML

```html
<header class="appHeader">
  <h1 class="logo">
    <a href="index.html" class="logo__link" aria-label="Web Cafe"> </a>
  </h1>
  <ul class="memberOnly">
    <li><a href="/">로그인</a></li>
    <li>
      <span class="divider" aria-hidden="true">ㅣ</span><a href="/">회원가입</a>
    </li>
    <li>
      <span class="divider" aria-hidden="true">ㅣ</span><a href="/">커뮤니티</a>
    </li>
  </ul>
  <form
    action="https://formspree.io/seulbinim@gmail.com"
    method="POST"
    class="searchForm"
  >
    <fieldset>
      <legend>검색</legend>
      <div class="searchForm__group">
        <div class="formInput">
          <label for="search" class="a11yHidden formInput__label">검색어</label>
          <input
            id="search"
            class="formInput__input"
            type="search"
            required
            placeholder="검색어를 입력하세요."
            name="search"
          />
        </div>
        <button type="submit" class="button button--primary">검색</button>
      </div>
    </fieldset>
  </form>
  <!-- 버튼을 클릭하면 .button--burger와 .menu에 is-active 클래스가 토글 -->
  <button class="buttonNone button--burger" aria-label="메뉴 열기">
    <span class="button--burgerBarTop"></span>
    <span class="button--burgerBarMiddle"></span>
    <span class="button--burgerBarBottom"></span>
  </button>
</header>
```

## CSS

### 모바일 구조

- layout

![](./img/header-mobile.png)

### 데스크탑 구조

- layout : 2행 2열 그리드

![](./img/header-desk.png)

- result

![](./img/header-desk2.png)

    - 로고 이미지는 백그라운드 이미지로 처리할 것
    - 배경 고정형식

### header

```scss
// _header.scss
@use './../utils/' as *;
@use './../components/' as *;
.appHeader {
  // 모바일
  @include mobile {
    // _flexbox.scss
    @include flexbox(column);
    background: $darkbrown;
    // 컨테이너에 양옆 패딩 처리
    padding: 0 rem(20px);
  }

  // 데스크탑
  @include desktop {
    // _mixin.scss
    @include boxSizeMax($paddingX: 20px);

    // 그리드로 배치
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "logo member"
      "logo search";
  }
}
```

### header - logo

- \_header.scss

```scss
.appHeader {
  .logo {
    // 데스크탑
    @include desktop {
      grid-area: logo;
    }

    &__link {
      $w: rem(204px);
      $h: rem(59px);
      // a 태그
      display: block;
      width: $w;
      height: $h;
      @include bgRetina("webcafe-logo", "png", $w, $h);
    }
  }
}
```

- \_mix.scss

디스플레이 배율에 따라 고해상도 배경이미지를 처리해주는 utility

```scss
// _mixin.scss
// 고해상도 배경이미지 처리 ---------------------------------------------------- /
@mixin bgRetina($file, $type, $width, $height) {
  background-image: url("./../assets/images/" + $file + "." + $type);
  background-repeat: no-repeat;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 144dpi) {
    & {
      background-image: url('./../assets/images/' + $file + '@2x.' + #{$type});
      background-size: $width $height;
    }
  }
}
```

### 멤버링크 - 모바일

```scss
.appHeader {
  // 멤버링크
  .memberOnly {
    // 공통영역
    @include flexbox(row, flex-end);
    padding: rem(16px) 0;
    // background-color: pink;

    // 모바일
    @include mobile {
      order: -1;
      color: $white;
      font-size: rem(14px);
    }
    // 데스크탑
    @include desktop {
      grid-area: member;
    }

    // 독립된 컴퍼넌트
    .divider {
      margin: 0 rem(8px);
    }

    // a태그 - line-block 트릭. 링크 클릭하기 용이하게...
    a {
      display: inline-block;
      padding: rem(8px) 0;
      // background-color: purple;
    }
  }
}
```

### searchForm

```scss
.appHeader {
  // 검색
  .searchForm {
    // background-color: pink;

    // 컨테이너 박스
    &__group {
      // 공통부분
      @include flexbox(row, flex-start, center);

      // 입력창
      .formInput {
        flex-grow: 1;
        // _form.scss에서 formInput 재활용.
      }

      // 버튼
      // _button.scss
      .button--primary {
        // 레이아웃 배치는 헤더영역에서.
        // 버튼 자체를 꾸미는건 컴포넌트에서.!
        margin-left: rem(8px);
      }

      // 모바일
      @include mobile {
        padding: rem(16rem) 0;
      }
    }
    // 데스크탑
    @include desktop {
      grid-area: search;
    }
  }
}
```

### button - desktop

```scss
.appHeader {
  .button--burger {
    @include desktop {
      display: none;
    }
  }
}
```
