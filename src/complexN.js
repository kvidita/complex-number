const complexNumber = function(real, img) {
  const getReal = function() {
    return real;
  }

  const getImg = function() {
    return img;
  }

  const add = function(num) {
    addedReal = num.getReal() + real;
    addedImg = num.getImg() + img;
    return complexNumber(addedReal, addedImg);
  }

  return {getReal, getImg, add};
}

const a = complexNumber()
