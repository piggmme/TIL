// 4. 마지막 남은 수 => 최대힙
// N길이의 수열이 주어집니다. 현수는 이 수열에서 가장 큰 두 개의 수를 뽑아 다음과 같은 행
// 동을 합니다.
// 만약 가장 큰 두 수가 a, b라면
// 1. a==b(같다)이면 수열에서 두 수는 사라집니다.
// 2. a!=b(다르다)이면 두 수 a와 b는 사라지고, |a-b|가 수열에 추가됩니다.
// 이 과정을 반복하면 최종적으로 수열에서 1개의 수가 남거나 모두 사라지게 됩니다.
// 예들 들어 N=5인 수열 [5, 2, 4, 3, 1]이 주어지면
// 5, 4가 뽑히고 (5-4)의 값인 1이 추가되어 [1, 2, 3, 1]이 됩니다.
// 3, 2가 뽑히고 (3-2)이 값인 1이 추가되어 [1, 1, 1]이 됩니다.
// 1, 1이 뽑히고 두 수는 사라지므로 수열은 [1]이 됩니다.
// 최종결과 마지막 남은 수는 1입니다.

// Time Limmit !!
// sort가 반복문 안에 있으면 안돼!

// sol) Heap
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
    let answer;
    let maxH = new maxHeap();
    for (let x of nums) {
      maxH.insert(x);
    }
    while (maxH.size() > 1) {
      let a = maxH.get();
      let b = maxH.get();
      if (a !== b) {
        // 항상 a > b
        maxH.insert(a - b);
      }
    }
    if (maxH.size() === 0) return 0;
    else return maxH.get();
  }
  //   console.log(solution([5, 2, 4, 3, 1])); // 1
  //   console.log(solution([7, 6, 3, 2, 4, 5, 1])); //0
}

// my sol)
{
  function solution(nums) {
    while (nums.length > 1) {
      let n = nums.length;
      nums.sort((a, b) => a - b); // 오름차순 정렬
      if (nums[n - 1] === nums[n - 2]) {
        nums.pop();
        nums.pop();
      } else {
        let a = nums.pop();
        let b = nums.pop();
        nums.push(Math.abs(a - b));
      }
    }
    return nums[0] || 0;
  }
  //   console.log(solution([5, 2, 4, 3, 1])); //1
  //   console.log(solution([7, 6, 3, 2, 4, 5, 1])); //0
}
