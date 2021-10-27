const sleep = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });

console.log('1');
(async () => {
  await sleep(2000);
})();
console.log('3');
