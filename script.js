let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let  age= document.getElementById('age')
let email = document.getElementById('email')
let male = document.getElementById('male')
let female = document.getElementById('female')
let errorMessage = document.getElementsByTagName('p')[0];
// console.log(errorMessage)

function validateInput(input) {
    console.log(input)
    if (input === 'age') {
        if (age.value < 18)
            errorMessage.innerText = 'Age should grater than 18'
        else if (age.value > 100) {
            errorMessage.innerText = 'Age should lesser than 100'
        }
        else {
            errorMessage.innerText = ""
        }
    }
    else if (input === 'phone') {
        if (phone.value.length < 10 || phone.value.length > 10)
            errorMessage.innerText = 'phone should have 10 digits'
        else {
            errorMessage.innerText = ""
        }
    }
}

const handleFormSubmit = (event) => {
    console.log("event handle")
    event.preventDefault();
    console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        phone: phone.value,
        gender:male.checked ? "male":"female"
    })
}