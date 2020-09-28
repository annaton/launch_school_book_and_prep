function removeLastChar (str) {
  let editedStr = str.slice(0, -1);
  console.log(editedStr)
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'