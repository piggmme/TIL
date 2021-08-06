// 5. 자동완성
// 포털 다음에서 검색어 자동완성 기능을 넣고 싶은 라이언은 한 번 입력된 문자열을 학습해서
// 다음 입력 때 활용하고 싶어 졌다. 예를 들어, go 가 한 번 입력되었다면, 다음 사용자는 g 만
// 입력해도 go를 추천해주므로 o를 입력할 필요가 없어진다! 단, 학습에 사용된 단어들 중 앞부
// 분이 같은 경우에는 어쩔 수 없이 다른 문자가 나올 때까지 입력을 해야 한다.
// 효과가 얼마나 좋을지 알고 싶은 라이언은 학습된 단어들을 찾을 때 몇 글자를 입력해야 하는
// 지 궁금해졌다.
// 예를 들어, 학습된 단어들이 아래와 같을 때
// go
// gone
// guild
// go를 찾을 때 go를 모두 입력해야 한다.
// gone을 찾을 때 gon 까지 입력해야 한다. (gon이 입력되기 전까지는 go 인지 gone인지 확신
// 할 수 없다.)
// guild를 찾을 때는 gu 까지만 입력하면 guild가 완성된다.
// 이 경우 총 입력해야 할 문자의 수는 7이다.
// 라이언을 도와 위와 같이 문자열이 입력으로 주어지면 학습을 시킨 후, 학습된 단어들을 순서
// 대로 찾을 때 몇 개의 문자를 입력하면 되는지 계산하는 프로그램을 만들어보자.

// ▣ 입력설명
// 학습과 검색에 사용될 중복 없는 단어 N개가 주어진다.
// 모든 단어는 알파벳 소문자로 구성되며 단어의 수 N과 단어들의 길이의 총합 L의 범위는 다음
// 과 같다.
// 2 <= N <= 100,000
// 2 <= L <= 1,000,000
// ▣ 출력설명
// 단어를 찾을 때 입력해야 할 총 문자수를 리턴한다.
// ▣ 매개변수 형식 1
// ["go","gone","guild"]
// ▣ 반환값 형식 1
// 7
{
  class Node {
    constructor() {
      this.end = false;
      this.child = {};
      this.cnt = 0;
    }
  }
  class Trie {
    constructor() {
      this.root = new Node();
    }
    insert(word) {
      // 단어 추가
      let cur = this.root; // cur: 현재 가리키는 노드
      for (let x of word) {
        if (cur.child[x] === undefined) {
          cur.child[x] = new Node();
        }
        cur.child[x].cnt += 1;
        cur = cur.child[x];
      }
      cur.end = true; // 단어의 끝에는 true
    }
    getCnt(word) {
      let cur = this.root;
      let cnt = 0;
      for (let x of word) {
        cnt++;
        cur = cur.child[x];
        if (cur.cnt === 1) return cnt;
      }
      return cnt;
    }
  }
  function solution(nums) {
    // trie 자료구조에 단어들 삽입
    let word = new Trie();
    for (let x of nums) {
      word.insert(x);
    }

    // 접미사 어디지 쳐야하는가!!
    let answer = 0;
    for (let x of nums) {
      answer += word.getCnt(x);
    }
    return answer; // 7
  }
  console.log(solution(["go", "gone", "guild"]));
}
