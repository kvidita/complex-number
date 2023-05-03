const {deepStrictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumber} = require('../src/complexN.js');

describe('testing complex numbers for real', function() {
  it('should give 1 as the real part', function() {
    deepStrictEqual(complexNumber(
      1, 2).getReal(),
      1)
  })
});

describe('testing complex numbers for imaginary', function() {
  it('should give 1 as the imaginary part', function() {
    deepStrictEqual(complexNumbers(
      {real: 1, imaginary: 1}).getImaginary(),
      1)
  })
});

describe('testing complex numbers for addition', function() {
  it('should give sum of the two complex numbers', function() {
    deepStrictEqual(complexNumbers(
      {real: 1, imaginary: 1}, {real: 1, imaginary: 2}).sumOfTwoComplexNums(), 
      {real: 2, imaginary: 3})
  })
});

describe('testing complex numbers for multiplication', function() {
  it('should give the product of two complex numbers', function() {
    deepStrictEqual(complexNumbers(
      {real: 1, imaginary: 1}, {real: 1, imaginary: 2}).productOfTwoComplexNums(), 
      {real: -1, imaginary: 3})
  })
});

describe('displaying test for complex numbers', function() {
  it('should display the complex number', function() {
    deepStrictEqual(complexNumbers(
      {real: 2, imaginary: 1}).displayComplexNum(),
      '2 + 1i')
  })
})
