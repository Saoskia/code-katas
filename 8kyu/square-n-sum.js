function squareSum(numbers){
    total = 0
    for (i=0; i<numbers.length; i++) {
        total += numbers[i] * numbers[i];
    }
    return total;
}