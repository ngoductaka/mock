const assert = require('assert');
const spinalCase = require('../frecode/spinalTapCase_');

describe('spinalCase', () => {
  it('spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap', () => {
    assert(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
  });
  it('spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"', () => {
    assert(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
  });
  it('spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"', () => {
    assert(spinalCase('The_Andy_Griffith_Show'), 'the-andy-griffith-show');
  });
  it('spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh"', () => {
    assert(spinalCase('Teletubbies say Eh-oh'), 'teletubbies-say-eh-oh');
  });
  it('spinalCase("AllThe-small Things") should return "all-the-small-things".', () => {
    assert(spinalCase('AllThe-small Things'), 'all-the-small-things');
  });
});
