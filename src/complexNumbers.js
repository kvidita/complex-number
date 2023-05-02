const complexNumbers = function(num1, num2) {
  const complexNum1 = num1;
  const complexNum2 = num2;

  const getReal = function() {
    return complexNum1.real;
  }

  const getImaginary = function() {
    return complexNum1.imaginary;
  }

  const sumOfTwoComplexNum = function() {
    const real = complexNum1.real + complexNum2.real;
    const imaginary = complexNum1.imaginary + complexNum2.imaginary;
    return {real: real, imaginary: imaginary};
  }

  return {getReal, getImaginary};
}

exports.complexNumbers = complexNumbers;
