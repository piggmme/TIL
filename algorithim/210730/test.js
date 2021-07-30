{
  function solution(str) {
    return str
      .split("")
      .sort((a, b) => a.charCodeAt() - b.charCodeAt())
      .join("");
  }
  // console.log(solution("aBAcbD"));
}
