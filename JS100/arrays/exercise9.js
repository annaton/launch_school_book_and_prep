let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
function checkDest (array, obj) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === obj) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkDest(destinations, 'Boston'))