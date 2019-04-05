


const onlyLetters = function(text) {

  var notLetter = /[^a-z]/g;
  return text.toLowerCase().replace(notLetter, "");
};

export const countLetters = (input) => {
  var text = onlyLetters(input);
  var count = {};

  for (var i = 0; i < text.length; i++) {
    var letter = text[i];

    // check if we have seen this letter before
    if (count.hasOwnProperty(letter)) {
      count[letter] += 1;
    }
    else {
      count[letter] = 1;
    }
  }

  return count;
};
