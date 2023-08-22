function convertObjectArrayToObject(array) {
    const object = {}
    array.forEach((element) => {
        const id=Object.values(element)[0]
        object[id] = element
    });
    return object
}

const arrayOfObject = [
    { id: '1', name: 'Alpha', gender: 'Male' },
    { id: '2', name: 'Bravo', gender: 'Male' },
    { id: '3', name: 'Charlie', gender: 'Female' },
]

const objectOfObject = convertObjectArrayToObject(arrayOfObject)

console.log(objectOfObject)