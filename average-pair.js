// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avgNum = (arr[left] + arr[right]) / 2;
    if (avgNum === target) {
      return true;
    } else if (avgNum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

module.exports = averagePair;
