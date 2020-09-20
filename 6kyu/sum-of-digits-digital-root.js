function digital_root(n) {
  nums = n.toString().split('');
  console.log(nums);
  
  do {
    res = 0;
    nums.forEach(s => {
      i = parseInt(s);
      res += i;
    });
    
    nums = res.toString().split('');
  } while (nums.length >= 2);

  return res;
}