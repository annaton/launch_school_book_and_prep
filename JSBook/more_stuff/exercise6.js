function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

allMatches(words, /lab/);