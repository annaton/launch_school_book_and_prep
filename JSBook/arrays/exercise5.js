let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}