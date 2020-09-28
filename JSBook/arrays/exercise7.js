function sumOfSquares(numbers) {
  return numbers.reduce((accumulator,number) => {
    return accumulator + number * number;
  },0);
}

let numbers = [3,5,7]
console.log(sumOfSquares(numbers));