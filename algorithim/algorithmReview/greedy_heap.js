// 다시 볼 문제 : (3) 회의실 배정, (5)수열의 높이 조정, (6) 최대 수입 스케줄
// 1. 동전 교환
{
  function solution(nums, m) {
    let n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      cnt += parseInt(m / nums[n - i - 1]);
      m = m % nums[n - i - 1];
    }
    return cnt;
  }

  //   console.log(solution([1, 5, 10], 15)); // 2
}

// 2. 침몰하는 타이타닉
{
  function solution(nums, m) {
    let answer = 0;
    let lt = 0;
    let rt = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (lt <= rt) {
      if (nums[lt] + nums[rt] <= m) {
        answer += 1;
        lt++;
        rt--;
      } else {
        answer++;
        rt--;
      }
    }
    return answer;
  }
  //   console.log(solution([90, 50, 70, 100, 60], 140)); // 3
}

// 3. 회의실 배정
{
  function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return a[1] - b[1];
    });
    let end = 0;
    for (let x of meeting) {
      if (x[0] >= end) {
        answer++;
        end = x[1];
      }
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       [1, 4],
  //       [2, 3],
  //       [3, 5],
  //       [4, 6],
  //       [5, 7],
  //     ])
  //   ); // 3
  //   console.log(
  //     solution([
  //       [3, 3],
  //       [1, 3],
  //       [2, 3],
  //     ])
  //   ); // 2
}

// 4. 마지막 남은 수
{
  // 최대 힙
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
      if (a !== b) maxH.insert(a - b);
    }
    if (maxH.size() === 0) return 0;
    else return maxH.get();
  }
  //   console.log(solution([5, 2, 4, 3, 1])); // 1
  //   console.log(solution([7, 6, 3, 2, 4, 5, 1])); //0
}

// 5. 수열의 높이 조정
{
  function solution(nums, m) {
    let answer = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < m; i++) {
      nums[0]++;
      nums[nums.length - 1]--;
      nums.sort((a, b) => a - b);
      if (nums[0] === nums[nums.length - 1]) break;
    }
    answer = nums[nums.length - 1] - nums[0];
    return answer;
  }
  // console.log(solution([2, 1, 3, 7, 5], 2)); // 3

  // <개선된 코드>
  // 궁금한 것은 최대, 최소값임!
  function solution(nums, m) {
    let answer = 0;
    let ch = Array.from({ length: 1001 }, () => 0);
    let maxH = Number.MIN_SAFE_INTEGER;
    let minH = Number.MAX_SAFE_INTEGER;
    for (let x of nums) {
      ch[x] += 1;
      if (x > maxH) maxH = x;
      if (x < minH) minH = x;
    }
    for (let i = 1; i <= m; i++) {
      if (maxH === minH) return 0;
      if (ch[maxH] === 1) {
        ch[maxH]--;
        maxH--;
        ch[maxH]++;
      } else {
        ch[maxH]--;
        ch[maxH - 1]++;
      }
      if (ch[minH] === 1) {
        ch[minH]--;
        minH++;
        ch[minH]++;
      } else {
        ch[minH]--;
        ch[minH + 1]++;
      }
    }
    answer = maxH - minH;
    return answer;
  }
  console.log(solution([2, 1, 3, 7, 5], 2)); //3
}

// 6. 최대 수입 스케쥴
{
  // 최대 힙
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
    let answer = 0;
    const maxH = new maxHeap();
    nums.sort((a, b) => b[1] - a[1]);
    const maxDay = nums[0][1];

    let i = 0;
    for (let day = maxDay; day >= 1; day--) {
      for (; i < nums.length; i++) {
        if (nums[i][1] < day) break;
        maxH.insert(nums[i][0]);
      }
      if (maxH.size() > 0) answer += maxH.get();
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       [50, 2],
  //       [20, 1],
  //       [40, 2],
  //       [60, 3],
  //       [30, 3],
  //       [30, 1],
  //     ])
  //   ); // 150
  //   console.log(
  //     solution([
  //       [50, 2],
  //       [40, 2],
  //       [20, 1],
  //       [10, 1],
  //     ])
  //   ); // 90
}
