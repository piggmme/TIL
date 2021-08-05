// 6. 최대 수입 스케쥴 => 최대힙
// 현수는 유명한 강연자이다. N개이 기업에서 강연 요청을 해왔다. 각 기업은 D일 안에 와서 강
// 연을 해 주면 M만큼의 강연료를 주기로 했다.
// 각 기업이 요청한 D와 M의 정보를 바탕으로 가장 많을 돈을 벌 수 있도록 강연 스케쥴을 짜
// 야 한다.
// 단 강연의 특성상 현수는 하루에 하나의 기업에서만 강연을 할 수 있다.
// 매개변수 nums에 N(1<=N<=10,000)개의 기업이 요청한 강연 M, D가 차례로 주어집니다.
// 현수가 최대로 벌 수 있는 수입을 반환합니다

// ▣ 입력설명
// 매개변수 nums에 N(1<=N<=10,000)개의 기업이 요청한 강연 M, D가 차례로 주어집니다.
// ▣ 출력설명
// 현수가 최대로 벌 수 있는 수입을 반환합니다.
// ▣ 매개변수 형식 1
// [[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]
// ▣ 반환값 형식 1
// 150
// ▣ 매개변수 형식 2
// [[50, 2], [40, 2], [20, 1], [10, 1]]
// ▣ 반환값 형식 2
// 90

// 입력설명 :
// 현수의 스케쥴의 시작은 1일부터 출발합니다.
// [[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]이면 첫 번째 기업의 강연정보인 [50, 2]는 2일 안에(2일포함) 와서 강연을 해주면 50의 강연료를 주겠다는 의미입니다.
// 네 번째 정보인 [60, 3]은 3일 안에 와서 강연을 해주면 60의 강연료를 주겠다는 의미입니다. 즉 현수가 1일, 2일, 3일 중 아무 날에 가서 강연을 하면 60의 강연료를 받습니다.

// Sol)
// 날짜순 내림차순 정렬
// 같은 날짜일 때 까지, 최대힙에 M값 저장.
// 만약 다른 날짜가 된다면, 저장된 힙중에서 최대값이 해당 날짜 까지 벌 수 있는 최대 금액임!
// 집합으로 생각하면 편한다.

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
  // sol)
  {
    function solution(nums) {
      let answer = 0;
      let maxH = new maxHeap();
      nums.sort((a, b) => b[1] - a[1]);
      let maxd = nums[0][1];
      let i = 0; // i는 한번 초기화 하고 계쏙 증가!
      for (let day = maxd; day >= 1; day--) {
        for (; i < nums.length; i++) {
          if (nums[i][1] < day) break;
          maxH.insert(nums[i][0]);
        }
        if (maxH.size() > 0) {
          // 비어있지 않을 때.
          answer += maxH.get();
        }
      }
      return answer;
    }
    // console.log(
    //   solution([
    //     [50, 2],
    //     [20, 1],
    //     [40, 2],
    //     [60, 3],
    //     [30, 3],
    //     [30, 1],
    //   ])
    // ); // 150
    // console.log(
    //   solution([
    //     [50, 2],
    //     [40, 2],
    //     [20, 1],
    //     [10, 1],
    //   ])
    // ); // 90
  }

  // mySol) => 5, 3, 1 이러면 중간 날짜를 못더함 ㅋㅋ => for문 넣어봄 이따가 확인하기
  {
    function solution(nums) {
      let maxH = new maxHeap();
      let n = nums.length;
      let result = 0;
      nums.sort((a, b) => b[1] - a[1]);

      let i;
      for (i = 0; i < n - 1; i++) {
        maxH.insert(nums[i][0]);
        if (nums[i][1] !== nums[i + 1][1]) {
          for (let j = 0; j < nums[i][1] - nums[i + 1][1]; j++)
            result += maxH.get();
        }
      }
      for (let j = 0; j < nums[i][1]; j++) result += maxH.get();
      return result;
    }
    // console.log(
    //   solution([
    //     [50, 2],
    //     [20, 1],
    //     [40, 2],
    //     [60, 3],
    //     [30, 3],
    //     [30, 1],
    //   ])
    // ); // 150
    // console.log(
    //   solution([
    //     [50, 2],
    //     [40, 2],
    //     [20, 1],
    //     [10, 1],
    //   ])
    // ); // 90
  }
}
