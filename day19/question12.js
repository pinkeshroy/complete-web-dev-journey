const arr = [{ bookname: "ramayan", rating: 5 }, { bookname: "kuran", rating: 0 }, { bookname: "Gita", rating: 5 }]
const newArr = arr.filter((book) => {
    return book.rating>4
})
console.log(newArr)