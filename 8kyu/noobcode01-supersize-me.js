function superSize(num){
    let str = num.toString()
    let arr = [...str]
    let max = ''
    
    arr.sort().reverse()
    
    for (let i = 0; i < str.length; i++) {
        max += arr[i]
    }
    
    return parseInt(max)
}