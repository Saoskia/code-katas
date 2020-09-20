function persistence(num) {
  arr = num.toString().split('');
  count = 0;

  if (arr.length == 1) return 0;
  else {
    while (arr.length >= 2) {
      total = 1;
      arr.forEach(n => {
        total *= n;
      });
      count++;
      arr = total.toString().split('');
    }
  }
  return count;
}