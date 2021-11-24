// 93. Restore IP Addresses
// https://leetcode.com/problems/restore-ip-addresses/submissions/

{
  const restoreIpAddresses = s => {
    const answer = new Set();
    const temp = [];
    const pos = [];

    if (!/^\d+$/.test(s)) return [];

    const DFS = (L, k) => {
      if (L >= 3) {
        pos.push(temp.slice());
        return;
      } else {
        for (let i = k; i < s.length - 1; i++) {
          if (temp[temp.length - 1] + 3 < i) return;
          temp.push(i);
          DFS(L + 1, i + 1);
          temp.pop();
        }
      }
    };

    DFS(0, 0);

    for (let i = 0; i < pos.length; i++) {
      for (let j = 0; j < 3; j++) {
        pos[i][j] += pos[i][j] + 1;
      }
    }

    const arr = Array(s.length + s.length - 1).fill(null);

    for (let i = 0; i < s.length; i++) {
      arr[i * 2] = s[i];
    }

    const isInvalidIP = str => {
      const arr = str.split('.');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === '0' && +arr[i].length > 1) {
          return false;
        }
        if (+arr[i] > 255) return false;
      }
      return true;
    };

    for (let i = 0; i < arr.length; i++) {
      for (const [a, b, c] of pos) {
        arr[a] = '.';
        arr[b] = '.';
        arr[c] = '.';
        const ip = arr.join('');
        if (isInvalidIP(ip)) answer.add(ip);
        arr[a] = arr[b] = arr[c] = null;
      }
    }

    return [...answer];
  };
  console.log(restoreIpAddresses('25525511135'));
  console.log(restoreIpAddresses('010010'));
}
