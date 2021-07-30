/*************** Max Heap : 최대힙  ***************/

// heap [무한, M(실제 최대값), , , , , ]
// 부모가 자식보다 항상 크다.
// 트리의 root(i=1)는 최대값이다.

// 노드 접근
// - 왼쪽 자식 : 부모 idx * 2
// - 오른쪽 자식 : 부모 idx * 2 + 1
// - 부모 : 자식 // 2 (몫)

{
  class maxHeap {
    constructor() {
      this.heap = []; // 빈 배열 생성
      this.heap.push(Number.MAX_SAFE_INTEGER); // 0번엔 엄청 큰 숫자 삽입. 사용안함
    }
    /*************** 삽입  ***************/
    insert(val) {
      // 1개의 자료 넣을 때, O(logN)
      this.heap.push(val);
      this.upheap(this.heap.length - 1); // 인덱스 번호 넘겨줌
    }
    upheap(pos) {
      // 부모보다 자식이 크다면 위로 올라감, pos는 그 자식의 인덱스
      let tmp = this.heap[pos];
      while (tmp > this.heap[parseInt(pos / 2)]) {
        // 부모랑 자식을 비교함
        this.heap[pos] = this.heap[parseInt(pos / 2)];
        pos = parseInt(pos / 2);
      }
      this.heap[pos] = tmp;
    }

    /*************** 삭제  ***************/
    get() {
      // 자료가 1개 있는 경우.
      if (this.heap.length === 2) {
        return this.heap.pop();
      }
      // 젤 큰 값 삭제하고, 다시 정렬함
      let res = this.heap[1];
      this.heap[1] = this.heap.pop(); // 맨 마지막 자료 삭제하고
      this.downheap(1, this.heap.length - 1); // 재 정렬. O(logN)
      return res;
    }
    downheap(pos, len) {
      // pos는 마지막 자료(두번째 매개변수)의 부모 인덱스 까지만 가야함.
      // (len = this.heap.lenght - 1) / 2 까지만
      let tmp = this.heap[pos];
      let child;
      while (pos <= parseInt(len / 2)) {
        child = pos * 2; // child 왼쪽 자식
        // 더 큰 자식 선택, 근데 마지막 자료 경우엔 안돼!
        if (child < len && this.heap[child] < this.heap[child + 1]) child++;
        if (tmp >= this.heap[child]) break;
        this.heap[pos] = this.heap[child]; // pos는 부모자리. child는 자식자리. 위치옮김
        pos = child;
      }
      this.heap[pos] = tmp; // 자식의 자리에
    }

    /*************** 부가 함수  ***************/
    size() {
      return this.heap.length - 1;
    }
    show() {
      for (let i = 1; i <= this.size(); i++) {
        console.log(this.heap[i]);
      }
      return true;
    }
  }

  function solution(nums) {
    let maxH = new maxHeap();
    for (let x of nums) {
      maxH.insert(x);
    }
    console.log(maxH.get());
    maxH.show();
  }
  //  console.log(solution([5, 4, 3, 6, 7, 2, 9]));
}
