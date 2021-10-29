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

// 강사님 SOL)
{
  function solution(nums) {
    let answer = [];
    let tmp;
    for (let n of nums) {
      n--;
      let t = 1;
      for (let i = 1; ; i++) {
        if (n >= t * 9) n -= t * 9;
        else {
          tmp = parseInt((i + 1) / 2);
          let res = Array(100).fill(0);
          let pal = '';
          res[0] = 1;
          for (let j = 0; j < tmp; j++) {
            res[j] += parseInt(n / t);
            pal += res[j];
            n %= t;
            t /= 10;
          }
          for (let j = tmp - (i % 2) - 1; j >= 0; j--) {
            pal += res[j];
          }
          answer.push(parseInt(pal));
          break;
        }
        if (i % 2 === 0) t *= 10;
      }
    }
    return answer;
  }
  console.log(solution([1, 12, 24]));
  console.log(solution([10, 15, 30]));
  console.log(solution([345, 3456, 2352, 939595]));
  console.log(solution([345, 3456, 2352, 2326, 138748, 395802, 930595]));
  console.log(
    solution([643809, 968068, 287576, 798592, 138749, 395802, 939595, 958085]),
  );
}
