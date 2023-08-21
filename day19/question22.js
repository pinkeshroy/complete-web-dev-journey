function occurenceCount(string){
    const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i)
        let index=char-65
        arr[index]++;
        console.log(string.charAt(i),arr[index])
    }
    for (let i = 0; i < arr.length; i++){
        console.log()
    }
}


occurenceCount("ABCCCFF")