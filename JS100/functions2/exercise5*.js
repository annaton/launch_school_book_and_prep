function catAge (humanYears) {
  if (humanYears === 0){
    console.log(0);
  } else if (humanYears === 1) {
    console.log(15);
  } else if (humanYears === 2) {
    console.log(24);
  } else {
    console.log(24 + (humanYears - 2) * 4)
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32