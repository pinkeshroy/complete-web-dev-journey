const name = document.getElementById('name')
const age = document.getElementById('age')
const email = document.getElementById('email')
const male = document.getElementById('male')
const female = document.getElementById('female')
const phone=document.getElementById('phone')
const errorMessage = document.getElementById('error');

function validateInput(input) {
    if (input === "age") {
        if (age.value < 18) {
            errorMessage.innerText = "Age must be greater than 18"
        }
        else if (age.value > 100) {
            errorMessage.innerText = "Age must be lesser than 100"
        }
        else {
            errorMessage.innerText = ""
        }
    }
    else if (input === "phone") {
        if (phone.value.length !== 10) {
            errorMessage.innerText = "phone must be 10 digit"
        }
        else {
            errorMessage.innerText = ""
        }
    }
}
const handleSubmitForm = (event) =>{
    event.preventDefault();
    console.log({
        name: name.value,
        age: age.value,
        phone: phone.value,
        gender: male.checked ? "male" : "female"
    })
}

const submitted = document.getElementById('submitButton')
submitted.addEventListener('click', (event) => {
    submitted.innerText="Submitted"
})