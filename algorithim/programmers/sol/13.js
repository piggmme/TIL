// 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

{
  function solution(str1, str2) {
    const findSet = string =>
      [...string]
        .map((ch, i) => (ch + string[i + 1]).toLowerCase())
        .slice(0, -1)
        .filter(str => /^[a-z]+$/.test(str));

    const arr1 = findSet(str1);
    const arr2 = findSet(str2);

    if (arr1.length === 0 && arr2.length === 0) return 65536;

    let andNum = 0;
    let addNum = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        const temp = arr1[i];
        arr1[arr1.indexOf(temp)] = -1;
        arr2[arr2.indexOf(temp)] = -1;
        andNum += 1;
      }
    }
    addNum +=
      arr1.filter(str => str != -1).length +
      arr2.filter(str => str != -1).length +
      andNum;

    return parseInt((andNum / addNum) * 65536);
  }
  console.log(solution('FRANCE', 'french'));
  console.log(solution('handshake', 'shake hands'));
  console.log(solution('aa1+aa2', 'AAAA12'));
  console.log(solution('E=M*C^2', 'e=m*c^2'));
}
