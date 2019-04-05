module.exports = {
    /**
     * utility function containing the logic to
     * randomize vowels/consonants
     */
     randomize: function(userInput, option) {
    let regex;
    let charstobeReplaced
    if(option == 0) {
        charstobeReplaced = "aeiou";
        regex = /[aeiou]/ig
    } else {
        charstobeReplaced = "qwrtpsdfghjklzxcvbnm"
        regex = /(?![AEIOU])[A-Z]/ig
    }
    
    var pIndex = userInput.length;
    var res = new Array(pIndex);
    while (pIndex--) {
        res[pIndex] = userInput[pIndex]
          .replace(regex,randomCharacter(charstobeReplaced,  userInput[pIndex]))
    }
  
    function randomCharacter(charstobeReplaced, currentChar) {
          arrayElement = Math.floor(Math.random() * charstobeReplaced.length);
                   while(currentChar == charstobeReplaced[arrayElement]) {
            arrayElement = Math.floor(Math.random() * charstobeReplaced.length);
            }
          return charstobeReplaced.charAt(arrayElement)
    }   

    return res.join("");
}
}