function telephoneCheck(str) {
  const result = /^1?\s?(\(\d{3}\)|\d{3})\-?\s?\d{3}\-?\s?\d{4}$/.test(str);
  return result;
}

console.log(telephoneCheck("(6054756961)"));
