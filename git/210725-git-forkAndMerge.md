# Git - Branch 와 Forking Workflow

## 1. Branch

### - 분기점을 생성하여 독립적으로 코드를 변경할 수 있도록 도와주는 모델

### `$ git branch`

- 지금 어떤 브랜치 위에 있는지 알 수 있는 명령어

### `$ git branch "새로운 브랜치 이름"`

- 새로운 브랜치를 생성한다.
- 이전 브랜치와 독립적인 공간을 생성한 것! => 평행 우주로 예를 들 수 있다
- 따라서 이 브랜치에서 파일을 수정하고 add & commit 해도, 이전 브랜치와 독립적이다!

### `$ git switch "branch name"

- 구 버전에선 `$ git checkout "branch name"
- 다른 브랜치로 이동하는 명령어
- 만약 파일을 변경하고, add & commit 하지 않은 채 다른 브랜치로 switch하게 된다면, 문제가 발생할 수 있다!!
- 실수로 다른 브랜치에서 commit을 진행하면, 전부 다른 브랜치에 commit 되어버림...

### `$ git merge "합쳐질 브랜치"`

- 합쳐질 목적지 브랜치에서 위 명령어를 사용해야 한다.
- main에서 사용한다면, main에 다른 브랜치의 새로운 파일들이 합쳐짐

### `git branch -D "branch name"`

- 브랜치를 삭제한다.
- merge를 완료한 다음엔 브랜치를 삭제해주는 것이 좋다.

## `git push origin "branch"`

- 브랜치를 push 한다.
- 로컬 디스크에서 원격 저장소로 commit 사항을 올린다.

### trailing comma

- 코드에서 배열은 다음과 같이 작성하는 것이 좋다
- 배열 괄호의 줄을 바꿔주고, 마지막 요소엔 콤마를 붙여주는 양식

```python
    animals = [
        'rabbit',
        'dog',
    ]
```

- 이렇게 하지 않으면, 깃에서 코드 변경사항을 추적할 때, 배열 전체가 변경되었다고 파악할 수 있음. 변경사항을 정확하게 추적하기 위해 trailing comma를 사용하도록 하자.

### Conflict

- merge할 때, 두 브랜치 사이에서 같은 코드 부분이 서로 다른 내용을 가지게 될 경우 발생한다.
- conflict가 발생하여 merge가 실패하였다는 메세지가 출력된다.
- 코드를 열어보면 다음과 같은 코드가 삽입되어 있다.

```python
<<<<<<< HEAD

... 내가 현재 있는 브랜치의 code

=======

... merge하려했던 브랜치의 code

>>>>>> branch name
```

- 이 경우, 위에 새로 추가된 부분을 삭제하고, 겹치는 부분을 수정해서 add & commit 해주면 된다.

## 2. Branch Models

### git flow

- (hotfix) - `master` - (release) - `develop` - feature
- 장점: 가장 많이 사용, 각 단계가 명확히 구분됨
- 단점: 복잡하다..

### github flow

- `master` - feature
- 장점: 브랜치 모델 단순화, `master`의 모든 커밋은 deployable
- 단점: CI의존성이 높다. 누구 하나라도 실수하면...

## 2-1. Git Flow

### git flow strategy

![](https://github.com/ulgoon/nklcb-git/raw/main/handouts/img/git-flow.png)

- 유용한 사이트 [](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

- mac의 경우엔 `brew install git-flow-avh` 해준다.
- 기존에 소스트리를 사용했던 경우엔 에러가 발생할 수 있는데, 잘 구글링해서 환경변수 수정해주면 됨.(스택오버플로우에 잘 나와있다)

### `$ git flow init`

- git flow 초기 설정을 해준다.
- develop 브랜치가 생성되고, 그 위치로 이동됨

### `$ git flow feature start "branch name"`

- 새로 설정한 브랜치 이름으로, feature이 생성됨
- 여기서 작업한 결과를 develop 브랜치에 merge하게 되는데, 그건 finish 명령임

### `$ git add "file name"`

### `$ git commit`

### `$ git flow feature finish "branch name"`

- 위에서 작업한 내용을 develop 브랜치에 merge해줌

### `$ git flow release start vn.m.k`

- release 브랜치를 생성함
- vn.m.k 에서 ...
- n은 크게바뀌었을 때, m은 좀 굵직한게 바뀌었을 때, k는 마이너한 변경사항일 경우
- ex) v1.2.2

### `$ git branch`

- release브랜치에 vn.m.k이름으로 브랜치가 생성되었음을 확인할 수 있음

### `$ git flow release finish vn.m.k`

- main 브랜치와 develop브랜치에 merge됨
- 총 3개의 vim이 열리는데, 첫번째와 마지막은 그냥 넘겨도 된다. 하지만 두번째 vim은 패치 노트가 될 tag를 생성하는 것이라 매우 중요함. 작성을 열심히 해야한다.

### `$ git push -u origin develop`

- 위에서 merge가 끝나면 develop 브랜치 내용을 원격 저장소로 밀어준다.

### `$ git switch main`

- main으로 변경한 다음

### `$ git push origin main`

- main의 내용도 원격 저장소로 push해준다.

### `$ git tag`

- tag 사항을 확인할 수 있다.

### `$ git push --tags`

- 작성했던 tag또한 원격저장소로 저장한다.

## 2-2. 수정사항이 있는 경우...

### 파일 이름 수정

- `$ git mv "원래 이름" "바꿀 이름"`

### 파일만 수정하였을 때

- `$ git checkout -- "file name"`
- `$ git checkout .`
- `$ git restore .`

### stage에서 내리는 법 (add를 취소)

- `$ git reset HEAD "file name"`
- `$ git rm -f "file name"`
- 그 다음 수정 이전으로 파일을 돌리고 싶다면, 위의 파일만 수정하였을 때를 적용해야함

### commit 을 삭제하는 방법

- `$ git revert --no-commit HEAD~n..`
- n은 가장 최근 기준 삭제할 커밋 수
- 파일은 삭제 되었지만, 이전 commit은 남아있음
- 삭제한 이유에 대해서 commit을 남겨줘야해... 미안하다...~~해서 삭제했다...

## 3. Forking Workflow

![](https://media.vlpt.us/images/blackwidow/post/b4b5e4b1-ced8-417f-a4f7-386003ff5aac/gitfork_fullrequest.jpg)

### 3-1. 팀장

1. GitHub에서 new repo 생성
2. repo 주소 복사하여, local disk에서 `$ git clone {repo 주소}`
3. `$ git flow init` 하여 develop 브랜치를 생성
4. `$ git push -u origin develop` 하여 원격 저장소에 push
5. 그 후 GitHub에서 repo 주소를 팀원에게 보냄 => 팀원 (3-2의 1로)
6. issues에서 팀원이 제시한 사항을 assigned/ labels 설정
7. project 생성 => 팀원 (3-2의 6으로)
8. pull request 확인. 맘에 안들면 딴지걸고 request change
9. 맘에 들면 aprove & merge

### 3-2. 팀원

1. 팀장이 보내준 주소로 들어가 fork 함
2. 본인 소유로 repo가 생성되는데, 그 주소를 복사
3. local disk에 `$ git clone {repo 주소}`
4. `$ git flow init` 하여 develop 브랜치 생성
5. 팀장의 repo에 issues에 해야할 일을 확인 또는 작성 => 팀장 (3-1의 6으로)
6. `$ git flow feature start {branch}`
7. 일을 수행하고, add & commit
8. 기능 개발 끝나면 `$ git flow feature finish {branch}` (develop에 merge되었음)
9. `$ git push -u origin develop` 하면 나의 repo에 올라감.
10. GitHub의 나의 repo에 들어가면 pull request 할 수 있음. pull request함.
11. open된 이슈의 number을 꼭 적어주기. `resolved : #1` => 팀장 (3-1의 8로)
12. 수정 요청에 대한 것은 3~8 과정 없이 바로 develop위에서 작업한다.
13. 수정 작업 후 add & commit & push 하면 열려있는 이슈의 pull request에 붙는다.

### 3-3. 나머지 팀원

1. `$ git fetch origin develop`
2. `$ git merge FETCH_HEAD`
3. 위를 진행하면, 원격 디스크에 있는 변경 사항을 내려받을 수 있음.
