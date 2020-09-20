function pigIt(str){
  words = str.split(' ');
  result = [];

  for (i = 0; i < words.length; i++) {
    if (words[i] != "!" && words[i] != "?") {
      w = words[i].split('');
      first = w.shift();
      w.push(first);
      result.push(w);
      result[i] = result[i].join('') + 'ay';
    } else {
      result.push(words[i]);
    }
  }

  return result.join(' ');
}