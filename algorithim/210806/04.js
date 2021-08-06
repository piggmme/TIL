// 4. Trie 자료구조
// 트리로 단어를 저장하는 방법
{
  class Node {
    constructor() {
      this.end = false;
      this.child = {};
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
        cur = cur.child[x];
      }
      cur.end = true; // 단어의 끝에는 true
    }
    search(word) {
      // 단어 검색
      let cur = this.root;
      for (let x of word) {
        if (cur.child[x] === undefined) return false;
        cur = cur.child[x];
      }
      return cur.end;
    }
    prefixS(str) {
      // 접두사 검색
      let cur = this.root;
      for (let x of str) {
        if (cur.child[x] === undefined) return false;
        cur = cur.child[x];
      }
      return true;
    }
  }
}

// mytry)
{
  class Node {
    constructor() {
      this.end = false;
      this.child = {};
    }
  }
  class Trie {
    constructor() {
      this.root = new Node();
    }
    insert(word) {
      let cur = this.root;
      for (let x of word) {
        if (!cur.child[x]) {
          cur.child[x] = new Node();
        }
        cur = cur.child[x];
      }
      cur.end = true;
    }
    search(word) {
      // 해당 단어가 있는지 검색
      let cur = this.root;
      for (let x of word) {
        if (!cur.child[x]) return false;
        cur = cur.child[x];
      }
      return cur.end;
    }
    prefixS(str) {
      // 해당 접두사가 있는지 검색
      let cur = this.root;
      for (let x of str) {
        if (!cur.child[x]) return false;
        cur = cur.child[x];
      }
      return true;
    }
  }
}
