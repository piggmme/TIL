// 71. Simplify Path
// https://leetcode.com/problems/simplify-path/
{
  const simplifyPath = path => {
    const regex = /\/+/g;
    let pathStr = path.replace(regex, '/');
    let dir = pathStr.split('/').filter(d => d !== '');
    let answer = [];

    console.log(dir);
    for (let i = 0; i < dir.length; i++) {
      if (dir[i] === '..') {
        answer.pop();
        continue;
      } else if (dir[i] === '.') {
        continue;
      } else {
        answer.push(dir[i]);
      }
    }

    return '/' + answer.join('/');
  };

  console.log(simplifyPath('/home/'));
  console.log(simplifyPath('/../'));
  console.log(simplifyPath('/home//foo//'));
  console.log(simplifyPath('/a/./b/../../c/'));
}
