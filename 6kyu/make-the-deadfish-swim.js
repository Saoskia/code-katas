function parse( data ) {
    var output = [];
    var num = 0;
    
    data.split('').forEach(function (x) {
        if (x == 'i') num += 1;
        else if (x == 'd') num -= 1;
        else if (x == 's') num *= num;
        else if (x == 'o') output.push(num);
    });
    
    return output;
}