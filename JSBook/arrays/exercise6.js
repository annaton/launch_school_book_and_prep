function oddLengths(arr) {
  let filteredNumbersArray = arr.map((letters) => {
    return letters.length;
  }).filter((number) => {
    return number % 2 === 1;
  });

  return filteredNumbersArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));