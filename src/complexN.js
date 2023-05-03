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
