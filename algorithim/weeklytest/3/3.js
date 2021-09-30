// 회문(palindrome)이란 숫자, 혹은 단어를 앞에서 뒤로 읽나 거꾸로 읽나 같게 읽히는 경우를 말합니다. 이를 테면 이름 'anna'는 회문입니다. 숫자도 물론 회문이 될 수 있습니다(예를들어 151, 753357 같은 경우 회문수입니다). 추가로 이러한 수들은 당연히 크기 순으로 정렬 될 수 있습니다. 처음 몇 개의 회문들은 이와 같습니다: 1 2 3 4 5 6 7 8 9 11 22 33....
// 현수는 k번째 회문수가 무엇인지 찾으려고 합니다.

// ▣ 입력설명
// 매개변수 nums에 k(1<=k<=1,000,000)가 원소인 배열이 전달됩니다. nums배열의 길이는 10을 넘지 않습니다.

// ▣ 출력설명
// 각각의 k번째인 회문수를 배열형태로 반환합니다.

// ▣ 매개변수 형식 1
// [1, 12, 24]

// ▣ 반환값 형식 1
// [1, 33, 151]

// 출력설명 : 1번째 회문수는 1, 12번째 회문수는 33, 24번째 회문수는 151입니다.

{
  function solution(nums) {}
  //   console.log(solution([1, 12, 24])); // [1, 33, 151]
}

{
  function solution(nums) {
    let dy = Array.from({ length: 10 }, (_, i) => i);

    // 길이 2의 회문 문자열
    for (let i = 10; i < 19; i++) {
      dy[i] = `${dy[i - 9]}${dy[i - 9]}` * 1;
    }
    let start = 10;
    let end = 18;

    // 길이 3이상의 회문 문자열
    let cnt = Math.max(...nums) - 18;
    let len = 3;
    while (cnt > 0) {
      if (len % 2 === 1) {
        // 길이가 홀수라면 짝수길이 + 가운데 0~9
        let temp = [];
        let tempEnd = end;
        for (let i = start; i <= end; i++) {
          for (let j = 0; j <= 9; j++) {
            const str = dy[i] + '';
            const preNum = str.slice(0, Math.floor(str.length / 2));
            temp.push(`${preNum}${j}${preNum}` * 1);
            tempEnd++;
          }
        }
        start = end + 1;
        end = tempEnd + 1;
        dy = [...dy, ...temp];
        cnt -= end - start + 1;
      } else {
        // 길이가 짝수라면 홀수 처음부터 중간까지 2번 반복
        let temp = [];
        let tempEnd = end;
        for (let i = start; i <= end; i++) {
          const str = dy[i] + '';
          const preNum1 = str.slice(0, Math.ceil(str.length / 2));
          const preNum2 = Array.from(preNum1).reverse().join('');
          temp.push(`${preNum1}${preNum2}` * 1);
          tempEnd++;
        }
        start = end + 1;
        end = tempEnd + 1;
        dy = [...dy, ...temp];
        cnt -= end - start + 1;
      }
      len++;
    }

    return nums.map(a => dy[a]);
  }
  //   console.log(solution([1, 12, 24])); // [1, 33, 151]
  console.log(solution([110]));
}
