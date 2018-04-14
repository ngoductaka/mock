const assert = require('assert');
const convert = require('../frecode/ConvertHTMLEntities');

describe('ConvertHTMLEntities', () => {
  it('convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.', () => {
    assert.equal(convert('Dolce & Gabbana'), 'Dolce &amp; Gabbana');
  });
  it('convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos', () => {
    assert.equal(
      convert('Hamburgers < Pizza < Tacos'),
      'Hamburgers &lt; Pizza &lt; Tacos',
    );
  });
  it('convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.', () => {
    assert.equal(convert('Sixty > twelve'), 'Sixty &gt; twelve');
  });
  it('convertHTML(Stuff in "quotation marks") should return Stuff in &​quot;quotation marks&​quot;.', () => {
    assert.equal(
      convert('Stuff in "quotation marks"'),
      'Stuff in &quot;quotation marks&quot;',
    );
  });
});
