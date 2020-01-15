function countFrequency(sortedArr, frequency = 1, t = [], index = 0) {
  if (sortedArr.length < index) {
    return t;
  }
  if (sortedArr[index] === sortedArr[index + 1]) {
    frequency++
    return countFrequency(sortedArr, frequency, t, index + 1);
  } else {
    t.push({r: sortedArr[index], frequency});
    frequency = 1;
    return countFrequency(sortedArr, frequency, t, index + 1);
  }
}

function logger(message) {
  return console.log(message)
}

module.exports = {
  countFrequency,
  logger
}