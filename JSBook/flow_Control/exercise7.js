function allCaps(text) {
  if (text.length > 10 ) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

console.log(allCaps("Sue Smith"));     // 'Sue Smith'
console.log(allCaps("Sue Robertson")); // 'SUE ROBERTSON'
console.log(allCaps("Joe Thomas"));    // 'Joe Thomas'
console.log(allCaps("Joe Stevens"));   // 'JOE STEVENS'