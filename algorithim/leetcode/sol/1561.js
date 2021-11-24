// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
// 1561. Maximum Number of Coins You Can Get

{
  const maxCoins = piles => {
    const coins = piles.slice().sort((a, b) => a - b);
    let answer = 0;

    while (coins.length) {
      coins.pop();
      answer += coins.pop();
      coins.shift();
    }

    return answer;
  };

  //   console.log(maxCoins([2, 4, 1, 2, 7, 8]));
  //   console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
  //   console.log(maxCoins([2, 4, 5]));
}
{
  const maxCoins = piles => {
    const coins = piles.slice().sort((a, b) => a - b);
    const temp = [];
    let answer = 0;

    let lt = 0,
      rt = coins.length - 1;
    while (temp.length !== coins.length) {
      answer += coins[rt - 1];
      temp.push(coins[lt], coins[rt], coins[rt - 1]);
      lt += 1;
      rt -= 2;
    }

    return answer;
  };

  console.log(maxCoins([2, 4, 1, 2, 7, 8]));
  console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
  console.log(maxCoins([2, 4, 5]));
}
