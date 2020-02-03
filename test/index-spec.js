var assert = require('assert');
var calculator = require('../index');

describe('calculator', () => {
    describe('add function', () => {
        it('adds numbers', () => {
            var result = calculator.add(1,1);
            assert.equal(result, 2);
        })
    })
})
