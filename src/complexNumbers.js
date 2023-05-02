const complexNumbers = function(num) {
  const complexNum = num;
  const [real, operator, imaginaryNumber] = num.split(' ');
  const [imaginary, iota] = imaginaryNumber.split('');

  const getReal = function() {
    return +real;
  }

  const getImaginary = function() {
    return +imaginary;
  }

  return {getReal, getImaginary};
}
exports.complexNumbers = complexNumbers;
