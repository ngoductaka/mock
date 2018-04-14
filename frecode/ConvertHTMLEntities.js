function convertHTML(str) {
  const key = ['&', '<', '>', "'", '"'];
  const val = ['&amp;', '&lt;', '&gt;', '&apos;', '&quot;'];
  let result = str;
  for (let i = 0; i < val.length; i += 1) {
    result = result.replace(new RegExp(key[i], 'g'), val[i]);
  }
  return result;
}
module.exports = convertHTML;
