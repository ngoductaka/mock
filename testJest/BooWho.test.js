const assert = require('assert');
const BooWho = require('../frecode/Boowho');

describe('BooWho test', () => {
  it('booWho(true) should return true.', () => {
    assert.equal(BooWho(true), true);
  });
  it('booWho(false) should return true.', () => {
    assert.equal(BooWho(false), true);
  });
  it('booWho([1, 2, 3]) should return false.', () => {
    assert.equal(BooWho(1), false);
  });
  it('booWho([].slice) should return false.', () => {
    assert.equal(BooWho(2), false);
  });
  it('booWho({ "a": 1 }) should return false.', () => {
    assert.equal(BooWho([1]), false);
  });
  it('booWho(1) should return false.', () => {
    assert.equal(BooWho([1, 2]), false);
  });
  it('booWho(NaN) should return false.', () => {
    assert.equal(BooWho('1'), false);
  });
  it('sbooWho("a") should return false.', () => {
    assert.equal(BooWho({ 1: 2 }), false);
  });
  it('booWho("true") should return false.', () => {
    assert.equal(BooWho('true'), false);
  });
});
