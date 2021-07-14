# start git


## git 사용 전 필요한 내용

### Mac OS의 경우

1. iTerm : 기본 터미널 대체재. tmux와 호환이 잘된다.
2. Xcode Command Line Tools (`$ xcode-select --install`) : 터미널환경에서 다양한 도구 지원을 위해 필요한 도구
3. OhMyZsh : zsh Customize
4. Homebrew

### git 명령 쓸 수 있는지 다음 명령어로 확인한다.
`git --version`





## git 이란

### VCS (Version Control System)
또는 SCM (Source Code Management)로, 버전 관리 시스템이다.
Git이 버전관리를 위한 '소프트웨어'라면, Github는 이 Git으로 저장되어 원격전송된 내역들이 저장되는 공간을 제공해주는 '서비스'이다. 한마디로, Git은 카메라, Github는 유튜브라고 생각하면된다.

### Git의 특징

- 빠른 속도, 단순한 구조
- 분산형 저장소 지원
- 비선형적 개발(여러개 브랜치 생성) 가능

### Git의 장점

- 소스코드를 주고받을 필요 없이 동시 작업
- 수정 사항은 commit 단위로 관리. 원하는 시점으로 이동 가능.
- 새로운 기능 추가는 Branch로 개발하며 실험 가능. 성공적이면 Merge 하여 반영.
- 인터넷이 연결되지 않아도 개발할 수 있음. (나중에 push하면 됨, 오프라인이여도 commit 정보 남음)


### git object
- blob : 파일 하나의 내용에 대한 정보
- tree : blob이나 subtree의 메타데이터(디렉토리 위치, 속성, 이름 ...)
- commit : commit 순간 스냅샷 (어떤 것은 유지되고 수정되고 언제...)


### git의 단계

깃은 간단히 말해 "작업하고 메모해서, 넘긴다."

[](https://s3-ap-northeast-2.amazonaws.com/pentutorials-user-file/module/3963/10395.png)

1. git add
2. git commit
3. git push

4. git pull
5. git check out





## git 시작하는 법

### 시작 전 계정과 에디터 설정

```
$ git config --global user.name "당신의유저네임"
$ git config --global user.email "당신의메일주소"
$ git config --global core.editor "vim"
$ git config --global core.pager "cat"
```

- option
```
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```





## git으로 project 시작하는 첫번째 방법: git init


### 1.원격 저장소 생성

- github에 들어가서, new repository로 원격 저장소를 생성한다.
- 우리가 사용할 것은 새로 생성된 원격 저장소의 url 주소다.


### 2. working directory 를 생성

`mkdir {새로운 디렉토리}`

- `git status` 를 입력하면, 아직 깃 저장소가 아님이라고 뜬다.


### 3. staging area, localrepo 생성

`git init`

- `git status` 를 입력하면, 저장소는 있지만 커밋이 없다고 뜬다.


### 4. git remote로 원격 저장소를 설정함

`git remote add origin {원격 저장소 url}`

- 여기서 origin은 긴 원격 저장소 주소를 짧은 닉네임이다. 
- 이제부터는 origin를 이용하면 원격 저장소에 push 할 수 있다.


`git remote`

- 설정된 원격 저장소가 있는지 확인


`git remote get-url origin`

- origin으로 부르는 원격 저장소 url을 확인



### 5. git add로 commit할 파일들을 묶음

`git add {}`

- 만약 전부 선택하고 싶다면, * 를 입력


### 6. git commit

`git commit`

- commit 생성
- vim 이 실행되게 됨
- commit 한 내용을 작성하면 된다.


### 7. master => main

- 예전에는 master을 사용했지만, main을 쓰는 추세라서 바꿔준다.
- 아마 곧 수정될 수 도 있다.

`git branch`
- 만약 master이라면 다음을 실행함.


`git branc -M main`
- master => main으로 수정함.


### 8. git push

`git push -u origin main`

- 원격 저장소로 생성/수정한 내용을 업데이트한다.
- upstring set flag(-u)를 꼭 붙여주어야 한다.


### 9. 이후에 수정사항이 생긴 경우

- 5, 6, 8 과정을 실행한다





## git으로 project 시작하는 두번째 방법: git clone



### 1. GitHub에서 new repository를 생성

- 이 경우, initialize this repository with: 부분에 있는 3가지 체크박스를 모두 체크한다.
	- ADD a README file
	- ADD .gitignore
	- Choose a license

- 그 다음 생성된 원격 저장소의 url을 copy한다.


### 2. clone

`git clone {}`

- clone을 하게되면, 디렉토리 파일 안에 LICENSE와 README.md .git 까지 전부 포함하여 생성된다.
- clone을 하면, init/ remote를 해 줄 필요가 없다.


### 3. 이후에 수정사항이 생긴경우

- git을 init으로 생성한 위의 경우와 마찬가지로, 5, 6, 8 과정을 실행하면 된다. 







