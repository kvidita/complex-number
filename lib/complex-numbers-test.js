const {strictEqual} = require('assert');
const {describe, it} = require('node:test');
const {complexNumbers} = require('../src/complexNumbers.js');

describe('complexNumbers', function() {
  it('should give 1 as the real part', function(){
    strictEqual(complexNumbers.getReal('1 + 1i'), 1)
  })
})

