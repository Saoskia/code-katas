function highAndLow(numbers){
  var highest = Number.MIN_SAFE_INTEGER;
  var lowest = Number.MAX_SAFE_INTEGER;
  var arr = numbers.split(" ");

  if (arr.length == 1) {
    highest = arr[0];
    lowest = arr[0];
  } else {
    arr.forEach( function (int) {
      var num = parseInt(int);
      if (num >= highest) highest = num;
      if (num <= lowest) lowest = num;
    });
  }

  return highest.toString() + " " + lowest.toString();
}