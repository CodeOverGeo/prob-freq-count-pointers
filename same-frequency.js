// add whatever parameters you deem necessary
function helperCounter(num) {
  let count = new Map();
  let str = num.toString();
  for (number of str) {
    value = count.get(number) || 0;
    count.set(number, value + 1);
  }

  return count;
}

function sameFrequency(num1, num2) {
  let num1Map = helperCounter(num1);
  let num2Map = helperCounter(num2);

  if (num1Map.size !== num2Map.size) return false;

  for (let key of num1Map.keys()) {
    if (num1Map.get(key) !== num2Map.get(key)) {
      return false;
    }
  }
  return true;
}

module.exports = sameFrequency;
