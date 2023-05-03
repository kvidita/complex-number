const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumber, realNumber, imaginary} = require('../src/complexN.js');

describe('testing complex numbers for real', function() {
  it('should give 1 as the real part', function() {
    const actual = complexNumber(1, 2).getReal();
    deepStrictEqual(actual, 1);
  })
});

describe('testing complex numbers for imaginary', function() {
  it('should give 1 as the imaginary part', function() {
    const actual = complexNumber(1, 2).getImg();
    deepStrictEqual(actual, 2);
  })
});

describe('testing complex numbers for addition', function() {
  it('should give real of sum of the two complex numbers', function() {
    const b = complexNumber(2, 3);
    const actual = complexNumber(1, 2).add(b).getReal();
    deepStrictEqual(actual, 3);
  })

  it('should give imaginary of sum of the two complex numbers', function() {
    const b = complexNumber(2, 3);
    const actual = complexNumber(1, 2).add(b).getImg();
    deepStrictEqual(actual, 5);
  })

});

describe('testing complex numbers for multiplication', function() {
  it('should give the real of product of two complex numbers', function() {
    const c = complexNumber(2, 3);
    const actual = complexNumber(1, 2).multiply(c).getReal();
    deepStrictEqual(actual, -4);
  })

  it('should give the imaginary of product of two complex numbers', function() {
    const c = complexNumber(2, 3);
    const actual = complexNumber(1, 2).multiply(c).getImg();
    deepStrictEqual(actual, 7);
  })

});

describe('displaying test for complex numbers', function() {
  it('should display the complex number', function() {
    const actual = complexNumber(1, 2).displayComplexNum();
    deepStrictEqual(actual, '1 + 2i');
  })

  it('should display only real part for imaginary being zero', function() {
    const actual = complexNumber(3, 0).displayComplexNum();
    deepStrictEqual(actual, '3');
  })

  it('should display only imaginary part for real being zero', function() {
    const actual = complexNumber(0, 7).displayComplexNum();
    deepStrictEqual(actual, '7i');
  })

  it('should display only imaginary part for real being zero and imaginary is negative', function() {
    const actual = complexNumber(10, -7).displayComplexNum();
    deepStrictEqual(actual, '10 - 7i');
  })

})

describe('real numbe', function() {
  it('should give sum of two real numbers', function() {
    const actual = realNumber(2).value();
    deepStrictEqual(actual, 2);
  })

  it('should give string representation', function() {
    const actual = realNumber(3).toString();
    deepStrictEqual(actual, '3');
  })

  it('should give the sum of two real numbers', function() {
    const r1 = realNumber(2);
    const actual = realNumber(3).add(r1).value();
    deepStrictEqual(actual, 5);
  })

  it('should give the product of two real numbers', function() {
    const r1 = realNumber(2);
    const actual = r1.multiply(r1).value();
    deepStrictEqual(actual, 4);
  })
})

describe('testing imaginary number', function() {
  it('should give the value of the imaginary number', function() {
    const i = imaginary(2);
    const actual = i.value();
    deepStrictEqual(actual, 2);
  })

  it('should give the string reperesentation of the imaginary', function() {
    const i = imaginary(4);
    const actual = i.toString();
    deepStrictEqual(actual, '4i');
  })

  it('should give the sum of the two imaginary numbers', function() {
    const i1 = imaginary(1);
    const actual = i1.add(imaginary(3)).value();
    deepStrictEqual(actual, 3);
  })
})
