/**
 * Binary strings in '4-asciiTo8bit.js' need to be at least 8 bits (length)
 *
 * addZeros() will: Return a new string with the length set to the number passed
 *    into the 'newLength' argument by filling in empty spaces with a '0' at the
 *    beginning of the string passed into the 'str' argument
 *
 * Examples:
 *    '110001' -> '00110001'
 *    '110010' -> '00110010'
 *    '110011' -> '00110011'
 */

const addZeros = (str, newLength) => {
  if (str.length < newLength) {
    let newStr = str.padStart(newLength, '0');
    return newStr;
  }
};

const base2ToDigit = (str) => {
  let total = 0;
  for (let i = str.length - 1, count = 0; i > 1; i--, count++) {
    total += (2 ** count * str[i]);
  }
  return total;
}

module.exports = {
  addZeros,
  base2ToDigit
}