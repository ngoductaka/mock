function uniteUnique(...arr) {
  const dnd = new Set();
  arr.map(e => e.map(i => dnd.add(i)));
  return [...dnd];
}
module.exports = uniteUnique;
