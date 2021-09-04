# Tailwind Example

## HTML 기본 골격

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwindcss를 활용한 로그인 페이지 스타일링</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/style.css" />
  </head>

  <body>
    <!-- 라이트 / 다크 모드 토글 버튼 -->
    <!-- <button type="button"
            class=""
            onclick="toggleTheme()">
      <span class="theme-mode">다크</span>모드 보기
    </button> -->
    <!-- 전체 콘텐츠 컨테이너 -->
    <div class="">
      <!-- 데스크 탑에서 보여지게 될 로그인 콘텐츠 박스(테두리) -->
      <div class="">
        <!-- 패스트 캠퍼스 브랜드 로고 -->
        <!-- 패스트 캠퍼스 브랜드 로고 -->
        <h1 class="logo">
          <a href="#">
            <picture>
              <source
                srcset="./images/fastcampus-logo-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src="./images/fastcampus-logo.png" alt="fastcampus" />
            </picture>
          </a>
        </h1>

        <!-- 패스트 캠퍼스 슬로건 -->
        <p class="">
          인생을 바꾸는 교육,
          <span class="block">패스트 캠퍼스.</span>
        </p>

        <!-- 회원 로그인 폼 -->
        <form class="">
          <fieldset>
            <legend class="">회원 로그인 폼</legend>
            <!-- 아이디 입력 서식 -->
            <div class="">
              <label for="userId" class="">아이디</label>
              <input
                id="userId"
                class=""
                type="text"
                placeholder="아이디"
                required
              />
            </div>

            <!-- 비밀번호 입력 서식 -->
            <div class="">
              <label for="userPassword" class="">비밀번호</label>
              <input
                id="userPassword"
                class=""
                type="password"
                placeholder="비밀번호"
                required
              />
            </div>

            <!-- 자동 로그인 및 비밀번호 찾기 그룹 컨테이너 -->
            <div class="">
              <!-- 자동 로그인 및 비밀번호 -->
              <div class="">
                <input class="" type="checkbox" id="autoLogin" />
                <label for="autoLogin" class=""> 자동 로그인 </label>
              </div>

              <!-- 비밀번호 찾기 링크 -->
              <a href="#">비밀번호 찾기</a>
            </div>

            <button type="submit" class="">로그인</button>
          </fieldset>
        </form>

        <!-- 회원가입 링크 -->
        <p class="">
          아직 계정이 없으신가요?
          <a class="" href="#">간편 회원가입</a>
        </p>
      </div>
    </div>
    <!-- <script defer
            src="js/main.js"></script> -->
  </body>
</html>
```

---

## tailwind HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwindcss를 활용한 로그인 페이지 스타일링</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/style.css" />
  </head>

  <body>
    <!-- 라이트 / 다크 모드 토글 버튼 -->
    <!-- 1. 자바스크립트로 제어하기 위한 버튼 클래스 지정 (toggle-theme-button) -->
    <!-- 2. body 영역을 기준으로 오른쪽 상단에 배치 / 3. 글자 및 배경색상 / 4. 라운딩 처리 / 5. 버튼 크기 고정(커스텀) -->
    <button
      type="button"
      class="
        toggle-theme-button
        absolute
        top-5
        right-5
        bg-gray-300
        text-gray-700
        p-4
        rounded-md
        w-[200px]
      "
    >
      다크모드 보기
    </button>
    <!-- 전체 콘텐츠 컨테이너 -->
    <!-- 1. 플렉스로 배치 (모바일 및 데스크탑 스타일) / 2. 높이 / 3. 텍스트 색상 / 4. 다크모드 텍스트 및 배경 색상 /  -->
    <div
      class="
        flex
        justify-center
        items-start
        md:items-center
        h-screen
        text-gray1
        dark:text-white
        dark:bg-gray-900
      "
    >
      <!-- 데스크 탑에서 보여지게 될 로그인 콘텐츠 박스(테두리) -->
      <!-- 1. 가로 크기(full) / 2. 데스크탑 최대 가로크기(md:min-w-screen-sm) / 3. 데스크탑에만 border / 4. padding-->
      <div
        class="
          w-full
          md:max-w-screen-sm
          md:border
          md:rounded-2xl
          md:
          border-gray5
          px-5
          py-10
          md:py-16
          md:px-12
        "
      >
        <!-- 패스트 캠퍼스 브랜드 로고 -->
        <h1 class="logo">
          <a href="#">
            <picture>
              <!-- 운영체제 테마 전환 모드 -->
              <source
                srcset="./images/fastcampus-logo-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <source
                srcset="./images/fastcampus-logo.png"
                media="(prefers-color-scheme: light)"
              />
              <!-- 커스텀 테마 전환 모드 -->
              <img src="./images/fastcampus-logo.png" alt="fastcampus" />
            </picture>
          </a>
        </h1>

        <!-- 패스트 캠퍼스 슬로건 -->
        <!-- 1. 제목과 슬로건 사이 여백(margin) / 2. 글자 크기 및 색상 / 3. 다크모드 글자 색상-->
        <p class="mt-5 text-3xl">
          인생을 바꾸는 교육,
          <strong class="block font-normal">패스트 캠퍼스.</strong>
        </p>

        <!-- 회원 로그인 폼 -->
        <!-- 1. 슬로건과 로그인 폼 사이 여백(margin) -->
        <form class="mt-10">
          <fieldset>
            <!-- 스크린리더를 위한 유틸리티 클래스 적용 -->
            <!-- https://tailwindcss.com/docs/screen-readers -->
            <legend class="sr-only">회원 로그인 폼</legend>

            <!-- 아이디 입력 서식 -->
            <div>
              <!-- 스크린리더를 위한 유틸리티 클래스 적용 -->
              <label for="userId" class="sr-only">아이디</label>
              <!-- 1. 테두리 관련 속성 / 2. 안쪽여백 / 3. 아웃라인 제거 -->
              <!-- 4. :focus 스타일 - 선색상 black / 다크모드 선색상 primary -->
              <input
                id="userId"
                name="userId"
                class="input"
                type="text"
                placeholder="아이디"
                required
              />
            </div>

            <!-- 비밀번호 입력 서식 -->
            <div class="mt-3">
              <label for="userPassword" class="sr-only">비밀번호</label>
              <!-- 반복되는 스타일을 @apply 디렉티브 활용 하여 tailwind.css 파일에 작성할 것 -->
              <!-- 
                .input{
                  @apply ;
                }
                .input:focus{
                  @apply ;
                }
              -->
              <input
                id="userPassword"
                name="userPassword"
                class="input"
                type="password"
                placeholder="비밀번호"
                required
              />
            </div>

            <!-- 자동 로그인 및 비밀번호 찾기 그룹 컨테이너 -->
            <!-- 1. 플렉스 배치 / 2. 상하 여백(margin) /  -->
            <div class="flex justify-between item-center my-4">
              <!-- 자동 로그인 및 비밀번호 -->
              <!-- 1. 플렉스 배치 / 2. relative(input 요소의 컨테이닝 블록 역할)  -->
              <div class="relative">
                <!-- tailwind.css 파일에 추가되어 있는 코드는 주석으로 처리한 후 작성해보기 -->
                <!-- 1. 웹브라우저 스타일 제거(appearance) / 2. absolute(영역을 차지하지 않도록) -->
                <!-- 3. 가로 세로 크기 / 4. 위치 미세 조정 / 5. 배경이미지 커스텀을 위한 auto-login 클래스-->

                <input
                  class="
                    appearance-none
                    absolute
                    w-[16px]
                    h-[16px]
                    top-[2px]
                    auto-login
                  "
                  type="checkbox"
                  id="autoLogin"
                  name="autoLogin"
                />
                <!-- 1. 체크박스(input)와 겹치지 않도록 왼쪽에 padding 지정 -->
                <!-- 2. 기본 배경이미지 및 선택상태 배경이미지 커스텀 -->
                <!-- 
                  backgroundImage: theme => ({
                    'checkbox-default': "url('/../images/checkbox-default.png')",
                    'checkbox-checked': "url('/../images/checkbox-checked.png')",
                  }),
                 -->
                <!-- 3. 배경이미지 반복하지 않기, 배경이미지 왼쪽 중앙 배치 -->
                <label for="autoLogin" class=""> 자동 로그인 </label>
              </div>

              <!-- 비밀번호 찾기 링크 -->
              <a href="#">비밀번호 찾기</a>
            </div>

            <!-- 1. 가로 및 세로 크기 / 2. 테두리 라운딩 / 3. 글자 크기, 색상, 굵기 / 4. 배경 색상 /-->
            <button
              type="submit"
              class="
                w-full
                p-4
                bg-primary
                text-white
                font-bold
                text-lg
                rounded-lg
              "
            >
              로그인
            </button>
          </fieldset>
        </form>

        <!-- 회원가입 링크 -->
        <!-- 1. 여백(margin) / 2. 텍스트 가운데 정렬 -->
        <p class="mt-6 text-center">
          아직 계정이 없으신가요?
          <!-- 1. 글자 굵기, 밑줄 제거, 글자 색상 / 2. 다크모드 글자 색상 -->
          <a class="font-bold underline text-gray1 dark:text-white" href="#"
            >간편 회원가입</a
          >
        </p>
      </div>
    </div>
    <script defer src="js/main.js"></script>
  </body>
</html>
```
