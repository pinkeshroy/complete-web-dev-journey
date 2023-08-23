// async function fetchData(URL){
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data);
// }
// fetchData("https://jsonplaceholder.typicode.com/posts")


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err)=>console.error(err))