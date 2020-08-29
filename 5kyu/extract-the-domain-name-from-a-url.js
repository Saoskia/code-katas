function domainName(url){
    
    let prefix = new RegExp(/(http(s)?:\/\/)?(www.)?/g);
    let prefixLength = url.match(prefix)[0].length;
    let newUrl = url.split('').slice(prefixLength, url.length).join('');

    let domain = new RegExp(/[a-z0-9-]+/);
    return domainLength = newUrl.match(domain)[0];

}