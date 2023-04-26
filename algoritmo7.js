
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeFirstAndLastChar(str) {
    if (str.length < 2) {
      return str;
    } else {
      return str.slice(1, -1);
    }
  }

  console.log(removeFirstAndLastChar('hello')); // 'ell'
  console.log(removeFirstAndLastChar('world')); // 'orl'
  console.log(removeFirstAndLastChar('a')); // 'a'
  console.log(removeFirstAndLastChar('')); // ''

  return str.substring(1, str.length - 1);
  return str.substring(1, str.length - 1);