function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let newStr = str.split("").reverse().join("");
  if (str === newStr) {
    return true;
  }
  return false;
}

console.log(palindrome("My age is 0, 0 si ega ym."));
