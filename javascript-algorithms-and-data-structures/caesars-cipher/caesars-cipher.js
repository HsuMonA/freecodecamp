function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = [];
  let letter;

  for (let i = 0; i < str.length; i++) {
    letter = str[i]; // get the letter of str
    if (alphabet.includes(letter)) {
      // if the letter is in alphabet
      newStr.push(alphabet[(alphabet.indexOf(letter) + 13) % 26]); // decrypt letter and add letter in the newStr
    } else {
      newStr.push(letter); // add letter in the newStr
    }
  }
  return newStr.join(""); // to put all the letters in string instead of ["F", "R", "E", "E"] to FREE
}

console.log(rot13("SERR YBIR?"));
