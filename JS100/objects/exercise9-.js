let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {}

for (let i = 0; i < nestedArray.length; i += 1) {
  let pair = nestedArray[i];
  person[pair[0]] = pair[1];
}


console.log(person)