function convertToRoman(num) {
  let numbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (let key in numbers) {
    while (num >= numbers[key]) {
      num = num - numbers[key];
      result = result + key;
    }
  }
  return result;
}

console.log(convertToRoman(68));
