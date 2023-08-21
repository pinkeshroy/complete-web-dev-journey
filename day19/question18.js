function vowelConsonentCounter(str) {
    let vowel = 0, consonent = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'u' || str.charAt(i) === 'o' || str.charAt(i) === 'A' || str.charAt(i) === 'E' || str.charAt(i) === 'I' || str.charAt(i) === 'O' || str.charAt(i) === 'U')
        {
            vowel += 1;
        }
        else
            consonent += 1;
    }
    console.log(`Total String length ${str.length}  Vowel  ${vowel}  consonent ${consonent}`)
}

vowelConsonentCounter("hdgwiuogfefjbjsdAfiuefihkxn")