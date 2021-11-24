// https://leetcode.com/problems/integer-to-roman/
// 12. Integer to Roman

{
  const intToRoman = num => {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ];
    let answer = '';

    let temp = num;
    let i = 0;
    while (temp) {
      while (temp - nums[i] >= 0) {
        temp -= nums[i];
        answer += roman[i];
      }
      i++;
    }
    return answer;
  };
  console.log(intToRoman(3));
  console.log(intToRoman(4));
  console.log(intToRoman(9));
  console.log(intToRoman(58));
  console.log(intToRoman(1994));
}

{
  const intToRoman = num => {
    const roman = new Map([
      [1, 'I'],
      [4, 'IV'],
      [5, 'V'],
      [9, 'IX'],
      [10, 'X'],
      [40, 'XL'],
      [50, 'L'],
      [90, 'XC'],
      [100, 'C'],
      [400, 'CD'],
      [500, 'D'],
      [900, 'CM'],
      [1000, 'M'],
    ]);

    const splitNums = num => {
      let temp = num;
      let pos = 1;
      const result = [];
      while (temp) {
        result.push((temp % 10) * pos);
        pos *= 10;
        temp = Math.floor(temp / 10);
      }
      return result.slice();
    };

    const splitedNums = splitNums(num);
    let answer = '';

    for (const num of splitedNums.reverse()) {
      if (roman.has(num)) {
        answer += roman.get(num);
        continue;
      }

      const decimal = 10 ** (Math.floor(Math.log10(num)) + 1);
      const half = decimal / 2;
      let cnt = num < half ? num : num - half;

      if (num > half) answer += roman.get(half);
      while (cnt) {
        answer += roman.get(decimal / 10);
        cnt -= decimal / 10;
      }
    }
    return answer;
  };
  //   console.log(intToRoman(3));
  //   console.log(intToRoman(4));
  //   console.log(intToRoman(9));
  //   console.log(intToRoman(58));
  //   console.log(intToRoman(1994));
}
