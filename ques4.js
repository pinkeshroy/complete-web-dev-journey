// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]


function wordChecker(arr) {
    const word1 = "qwertyuiop",
      word2 = "asdfghjkl",
        word3 = "zxcvbnm";
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        const elem=arr[i].toLowerCase()
        for (let j = 0; j < elem.length; j++) {
          if (!word1.includes(elem.charAt(j))) {
            flag = false;
            break;
          }
          if (j === elem.length - 1 && word3.includes(elem.charAt(j))) {
            flag = true;
          }
        }
    
        if (!flag) {
            for (let j = 0; j < elem.length; j++) {
              if (!word2.includes(elem.charAt(j))) {
                flag = false;
                break;
              }
              if (j === elem.length - 1 && word2.includes(elem.charAt(j))) {
                flag = true;
              }
            }
        }
        if (!flag) {
            for (let j = 0; j < elem.length; j++) {
              if (!word3.includes(elem.charAt(j))) {
                flag = false;
                break;
              }
              if (j === arr[i].length - 1 && word3.includes(elem.charAt(j))) {
                flag = true;
              }
              log;
            }
        }
        if (!flag) {
            arr.splice(i, 1);
        }
    }
    return arr;
    
}

const arr = ["Hello", "Alaska", "Dad", "Peace"];//["adsdf", "sfd"]; //["omk"];// 
console.log(wordChecker(arr));