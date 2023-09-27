// Count the frequency of each Character in a string
// const string = "WebMaster wEBmasTer Best"
// function getFrequency(string) - this function will return an object containing frequency of each character, lowercase and uppercase of a character considered as single character
// output
// { w : 2
// e : 5
// b : 3
// m : 2
// a : 2
// s : 3
// t : 3
// r : 2
// }
function getFrequency(newString) {
    const string=newString.toLowerCase()
    
    const obj = {}
    for (let i = 0; i < string.length; i++) {
        const key =""+string.charAt(i)
        if (obj[key]) {
            let count = Number(obj[key])
            obj[key]=++count
            console.log(++count)
        } else {
            if (key!==" ")
                obj[key]=1
        }
        
    };

    console.log(obj)

}

const string = "WebMaster wEBmasTer Best";
getFrequency(string)
