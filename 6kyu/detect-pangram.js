function isPangram(string){
    let abc = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
  
    let str = string.toLowerCase().split(' ').join('').split('')
    
    for (let i = 0; i < abc.length; i++) {
        if (!str.includes(abc[i]))
            return false
    }
    
    return true
}