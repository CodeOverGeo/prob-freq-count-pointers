// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  let left = 0;
  let right = 0;

  while (str2[right]) {
    if (str1[left] === str2[right]) {
      left++;
      right++;
    } else {
      right++;
    }
    if (!str1[left]) return true;
  }
  return false;
}

module.exports = isSubsequence;
