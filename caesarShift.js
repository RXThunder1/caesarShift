const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let randomLetterCounter = 0;

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let isUpperCase = char === char.toUpperCase();

    // Convert to lowercase for shifting
    char = char.toLowerCase();

    if (alphabet.includes(char)) {
      // Shift the character
      let shiftedIndex = (alphabet.indexOf(char) + shiftValue) % alphabet.length;
      if (shiftedIndex < 0) shiftedIndex += alphabet.length;

      let shiftedChar = alphabet[shiftedIndex];

      // Convert back to original case
      if (isUpperCase) shiftedChar = shiftedChar.toUpperCase();

      encryptedMessage += shiftedChar;

      // Insert random letter after every two characters
      randomLetterCounter++;
      if (randomLetterCounter === 2) {
        encryptedMessage += getRandomLetter();
        randomLetterCounter = 0; // Reset counter
      }
    } else {
      // Non-alphabet characters remain unchanged
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}




function decrypt(encryptedMessage, shiftValue) {
    let decryptedMessage = "";
    let randomLetterCounter = 0;
  
    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = encryptedMessage[i];
      let isUpperCase = char === char.toUpperCase();
  
      // Convert to lowercase for shifting
      char = char.toLowerCase();
  
      if (alphabet.includes(char)) {
        // Reverse the shift to get the original character
        let reversedIndex = (alphabet.indexOf(char) - shiftValue) % alphabet.length;
        if (reversedIndex < 0) reversedIndex += alphabet.length;
  
        let originalChar = alphabet[reversedIndex];
  
        // Convert back to original case
        if (isUpperCase) originalChar = originalChar.toUpperCase();
  
        decryptedMessage += originalChar;
  
        // Skip over inserted random letters
        randomLetterCounter++;
        if (randomLetterCounter === 2) {
          i++; // Skip the random letter
          randomLetterCounter = 0; // Reset counter
        }
      } else {
        // Non-alphabet characters remain unchanged
        decryptedMessage += char;
      }
    }
  
    return decryptedMessage;
  }