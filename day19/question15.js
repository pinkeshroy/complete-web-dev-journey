function substring(string, startIdx, endIdx) {
    if (!endIdx) endIdx = string.length
    let str=""
    for (; startIdx < endIdx; startIdx++){
        str=str.concat(""+string.charAt(startIdx))
    }
    return str
}
console.log(substring("abcdefghijkl",4,8))