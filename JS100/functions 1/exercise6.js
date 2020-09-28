function compareByLength(string1, string2){
  if (string1.length > string2.length){
    return 1;
  } else if (string1.length < string2.length) {
    return -1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); 
compareByLength('strength', 'dignity');      
compareByLength('humor', 'grace');    