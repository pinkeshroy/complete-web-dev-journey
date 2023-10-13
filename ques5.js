
const sum = (a) => {
    console.log(a);
    const b1= (b) => {
        console.log(a,b);
        const c1= (c) => {
            console.log(a,b,c);
            return a+b+c
        }
        console.log({c1});
        return c1
    }
    console.log({b1});
    return b1;
}


console.log(sum(1)(2)(3));