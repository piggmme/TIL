# PostCSS 실습

## Sass 및 PostCSS 환경구성

**Learn_Postcss 폴더 복제하기**
```
git clone https://github.com/seulbinim/Learn_Postcss.git
```

**.git 디렉토리 삭제**
```
cd Learn_Postcss
rm -rf .git
```

**개발의존성 모듈 설치**
```
npm install
```

**의존성 패키지 모듈**
| 패키지명 | 설명 |
|-|-|
| live-server | 라이브 서버 실행 |
| htmlhint | HTML 파일에 대한 문법검사를 수행 |
| chokidar-cli | htmlhint가 watch 옵션을 제공하지 않는 문제를 해결 |
| sass | Dart Sass 설치 |
| postcss-normalize | normalize.css |
| postcss | postcss를 사용하기 위한 패키지 |
| autoprefixer | 자동으로 웹브라우저 별 접두사를 생성 |
| postcss-csso | css 파일 최적화(압축) |
| postcss-combine-media-query | 미디어쿼리 병합 |
| npm-run-all | 2개 이상의 npm 스크립트 명령을 직렬 또는 병렬로 수행 |

**크로스 브라우징 지원 범위 확인**
> autoprefixer의 경우 .browserslistrc 파일을 생성한 후 지원 브라우저의 범위를 명시할 수 있습니다.  
```
npx browserslist
```

## npm 스크립트 명령

| 명령어 | 설명 |
|-|-|
| start | dev 명령과 watch:htmlhint 및 watch:sass 명령을 병렬로 수행 |
| htmlhint | 현재 프로젝트에 포함 된 모든 html 파일에 대해 HTML Validation을 수행 |
| watch:htmlhint | 파일 내용이 변경되었을 때 HTML Validation을 수행 |
| sass | sass 파일을 css 파일로 빌드 |
| watch:sass | 파일 내용이 변경되었을 때 sass 파일을 css 파일로 빌드 |
| build:postcss | postcss 플러그인을 사용하여 css 파일을 재 빌드 |
| build | build:sass 명령과 build:postcss 명령을 직렬로 수행 |

```
npm run 명령어
```
> start 명령의 경우 run을 생략할 수 있다.  

**참고 사이트**  
- [htmlhint](https://www.npmjs.com/package/htmlhint) 
- [html watch](https://github.com/htmlhint/HTMLHint/issues/135#issuecomment-267123306)
- [sass](https://www.npmjs.com/package/sass)
- [postcss-cli](https://github.com/postcss/postcss-cli)
- [postcss plugins](https://github.com/postcss/postcss/blob/main/docs/plugins.md)
- [postcss-normalize](https://www.npmjs.com/package/postcss-normalize)
- [postcss-autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-csso](https://github.com/lahmatiy/postcss-csso)
- [postcss-combine-media-query](https://github.com/SassNinja/postcss-combine-media-query)