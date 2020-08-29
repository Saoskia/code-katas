function getCount(str) {
    var vowelsCount = 0;
    var arr = str.split('');
    arr.forEach(function(item){
        if(item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u'){
            vowelsCount++;
        }
    });
    
    return vowelsCount;
}