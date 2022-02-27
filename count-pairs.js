// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let visited = {};
  let pointer = 0;
  let count = 0;
  while (pointer < arr.length) {
    if (visited[num - arr[pointer]] == arr[pointer]) {
      count++;
    } else {
      visited[arr[pointer]] = num - arr[pointer];
    }

    pointer++;
  }

  return count;
}

module.exports = countPairs;
