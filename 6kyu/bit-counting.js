var countBits = function(n) {
  count = 0;
  temp = n;

  while (temp > 0) {
    if (temp % 2 != 0) count++;
    temp = Math.floor(temp / 2);
  }

  return count;
};