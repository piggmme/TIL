// 937. Reorder Data in Log Files
// https://leetcode.com/problems/reorder-data-in-log-files/
{
  var reorderLogFiles = function (logs) {
    const digits = logs.filter(log => log.match(/ \d/g));
    const letters = logs.filter(log => !digits.includes(log));

    letters.sort((let1, let2) => {
      const arrLet1 = let1.split(' ');
      const arrLet2 = let2.split(' ');

      const subLet1 = arrLet1.slice(1).join(' ');
      const subLet2 = arrLet2.slice(1).join(' ');

      return subLet1 < subLet2
        ? -1
        : subLet1 === subLet2
        ? arrLet1[0] < arrLet2[0]
          ? -1
          : 1
        : 1;
    });

    return [...letters, ...digits];
  };
  console.log(
    reorderLogFiles([
      'dig1 8 1 5 1',
      'let1 art can',
      'dig2 3 6',
      'let2 own kit dig',
      'let3 art zero',
    ]),
  ); // ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
  console.log(
    reorderLogFiles([
      'a1 9 2 3 1',
      'g1 act car',
      'zo4 4 7',
      'ab1 off key dog',
      'a8 act zoo',
    ]),
  ); // ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
  console.log(
    reorderLogFiles([
      'a1 9 2 3 1',
      'g1 act car',
      'zo4 4 7',
      'ab1 off key dog',
      'a8 act zoo',
      'a2 act car',
    ]),
  ); // ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
}
