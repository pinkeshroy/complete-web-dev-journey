
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.
// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function includeChecker(ransomNote="", magazine="") {
    const obj1 = {}, obj2 = {}
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (obj1[ransomNote.charAt(i)]) {
            obj1[ransomNote.charAt(i)] = obj1[ransomNote.charAt(i)] + 1;
        }
        else {
            obj1[ransomNote.charAt(i)]=1;
        }
        
    }
     for (let i = 0; i < magazine.length; i++) {
       if (obj2[magazine.charAt(i)]) {
         obj2[magazine.charAt(i)] = obj2[magazine.charAt(i)] + 1;
       } else {
         obj2[magazine.charAt(i)] = 1;
       }
    }
    for (const [key,val] of Object.entries(obj1)) {
        if (obj2[key] <val) {
            return false;
        }
    }

    return true

}

const ransomNote = "aa",
    magazine = "aab";
  
    console.log(includeChecker(ransomNote,magazine));