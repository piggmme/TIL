const toggleCase = str =>
  str.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) => {
    console.log(_, lowerCase, upperCase);
    return lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase();
  });