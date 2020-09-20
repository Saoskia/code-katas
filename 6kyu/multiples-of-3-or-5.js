function solution(number){
  var result = 0;
  var num = number - 1;

  while (num > 0) {
    if (((num % 3) == 0) || ((num % 5) == 0)) result += num;
    num--;
  }

  return result;
}