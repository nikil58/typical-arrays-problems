
exports.min = function min (array) {
  if (arguments.length==0 || Object.keys(array).length==0)  return 0;
  else {
    return (Math.min.apply(null, array));
  }
}

exports.max = function max (array) {
  if (arguments.length==0 || Object.keys(array).length==0)  return 0;
  else {
    return (Math.max.apply(null, array));
  }
}

exports.avg = function avg (array) {
  if (arguments.length==0 || Object.keys(array).length==0)  return 0;
  else {
  return array.reduce((a, b) => (a + b)) / array.length;
  }
}
