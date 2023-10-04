// Find the string which have most vowels in it.
// const arr = ["ap", "aeioUtt", "qAeIoUar", "art"]
// output - qAeIoUar
// function findMostVowelString(arr) - this function will return an string with the most vowels

function findMostVowelString(arr) {
    const obarr = { val: "", count: 0 }
    
    for (const elem of arr) {
        const elem1 = elem.toLowerCase()
        let temp = 0;
        for (const char of elem1) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                ++temp;
            }
            
        }
          if (obarr.count < temp) {
            obarr.val = elem;
            obarr.count = temp;
          }
        
    }
    return obarr.val

}
const arr = ["ap", "aeioUtt", "qAeIoUar", "art"];
console.log(findMostVowelString(arr));