/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!*/

function smashWords(words) {
    let result = '';
    for (let word of words) {
      if (result.length === 0) {
        result += word;
      } else {
        result += ' ' + word;
      }
    }
    if (result.charAt(0) === ' ') {
      result = result.slice(1);
    }
    if (result.charAt(result.length - 1) === ' ') {
      result = result.slice(0, -1);
    }
    return result;
  }
  