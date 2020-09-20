function anagrams(word, words) {
  drow = word.split('').sort();
  result = [];

  for (i = 0; i < words.length; i++) {

    w = words[i].split('').sort();

    if (drow.length == w.length && drow.every((v, j) => { return v == w[j] })) {
      result.push(words[i]);
    }

  }
  return result;
}