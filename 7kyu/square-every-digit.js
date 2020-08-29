function squareDigits(num){
    var str = num.toString();
    var res = [];
  
    for (var i = 0; i < str.length; i++){
        res[i] = str[i] * str[i];
    }
  
    return Number(res.join(''));
}