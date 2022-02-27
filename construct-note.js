// add whatever parameters you deem necessary
function freqHelper(str) {
  const freq = new Map();
  for (let key of str) {
    const value = freq.get(key) || 0;
    freq.set(key, value + 1);
  }

  return freq;
}

function constructNote(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  const freqStr1 = freqHelper(str1);
  const freqStr2 = freqHelper(str2);
  for (let key of freqStr1.keys()) {
    if (freqStr2.get(key) < freqStr1.get(key)) return false;
  }
  return true;
}

module.exports = constructNote;
