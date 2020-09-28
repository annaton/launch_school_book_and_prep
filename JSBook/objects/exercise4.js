let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj).map((key) => key.toUpperCase());
console.log(objKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }