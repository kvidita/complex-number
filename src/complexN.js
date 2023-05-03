const realNumber = function(a) {
  const value = function() {
    return a;
  }

  const toString = function() {
    return a.toString();
  }

  const add = function(b) {
    return realNumber(a + b.value());
  }

  const multiply = function(b) {
    return realNumber(a * b.value());
  }

  return {toString, add, multiply, value};
}

const imaginary  = function(a) {
  const value = function() {
    return a;
  }

  const toString = function() {
    return a + 'i';
  }

  const add = function(b) {
    return imaginary(a + b.value());
  }

  const multiply = function(b) {
    return realNumber(a * -b.value());
  }

  return {value, add, toString, multiply};
}

const complexNumber = function(real, img) {
  const getReal = function() {
    return real;
  }

  const getImg = function() {
    return img;
  }

  const add = function(num) {
    const addedReal = num.getReal() + real;
    const addedImg = num.getImg() + img;

    return complexNumber(addedReal, addedImg);
  }

  const multiply = function(num) {
    const a = real;
    const b = img;
    const c = num.getReal();
    const d = num.getImg();

    const productReal = a * c - b * d;
    const productImg = a * d + b * c;

    return complexNumber(productReal, productImg);
  }

  const displayComplexNum = function() {
    if(real === 0) {
      return img + 'i';
    }

    if(img === 0) {
      return real.toString();
    }

    if(img < 0) {
      return real + ' - ' + -1 * img + 'i';
    }

    return real + ' + ' + img + 'i';
  }

  return {getReal, getImg, add, multiply, displayComplexNum};
}

exports.complexNumber = complexNumber;
exports.realNumber = realNumber;
exports.imaginary = imaginary;
