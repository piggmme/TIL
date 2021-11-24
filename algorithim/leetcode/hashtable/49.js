// https://leetcode.com/problems/group-anagrams/
// 49. Group Anagrams

{
  // countChars => [ [str, countChars] ]
  // [
  //     [ 'eat', 'a1e1t1' ],
  //     [ 'tea', 'a1e1t1' ],
  //     [ 'tan', 'a1n1t1' ],
  //     [ 'ate', 'a1e1t1' ],
  //     [ 'nat', 'a1n1t1' ],
  //     [ 'bat', 'a1b1t1' ]
  //   ]
  const groupAnagrams = strs => {
    const countChars = strs.map(str => {
      const sH = new Map();
      [...str].forEach(char => {
        sH.set(char, sH.get(char) ? sH.get(char) + 1 : 1);
      });

      return [
        str,
        [...sH]
          .sort((a, b) => (a[0] > b[0] ? 1 : -1))
          .flat(2)
          .join(''),
      ];
    });

    const answer = new Map();

    for (const [str, countChar] of countChars) {
      answer.set(
        countChar,
        answer.get(countChar) ? [...answer.get(countChar), str] : [str],
      );
    }

    return [...answer.values()];
  };
  console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
  console.log(groupAnagrams(['']));
  console.log(groupAnagrams(['a']));
}
