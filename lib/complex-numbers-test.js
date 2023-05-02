const {strictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumbers} = require('../src/complexNumbers.js');

describe('complexNumbers', function() {
  it('should give 1 as the real part', function(){
    strictEqual(complexNumbers({real: 1, imaginary: 1}).getReal(), 1)
  })
});

describe('complexNumbers', function() {
  it('should give 1 as the imaginary part', function(){
    strictEqual(complexNumbers({real: 1, imaginary: 1}).getImaginary(), 1)
  })
});

