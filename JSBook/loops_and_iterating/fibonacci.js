function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));  // the 6th Fibonacci number is 8
console.log(fibonacci(20)); // the 20th Fibonacci number is 6765