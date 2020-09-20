function cleanString(s) {
  var arr = [];
  var str = s.split("");

  for (var i = 0; i < str.length; i++) {
    if (str[i] == "#") {
      if (arr.length >= 1) arr.pop();
      else continue;
    } else arr.push(str[i]);
  }
  return arr.join('');
}