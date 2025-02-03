const form = document.getElementById('form-body')
const inputs = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    nameValidate()
    emailValidate()
    phoneValidate()
})

inputs[2].addEventListener("input", (event) => {
    let value = event.target.value.replace(/\D/g, "")
    if (value.length > 11) value = value.slice(0, 11)
    let formattedValue = ""
  
    if (value.length > 10) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`; // Formato (XX) XXXXX-XXXX
    } else if (value.length > 6) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`; // Formato (XX) XXXX-XXXX
    } else if (value.length > 2) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`; // Formato (XX) XXXX...
    } else if (value.length > 0) {
      formattedValue = `(${value}` // Adiciona parênteses ao digitar o DDD
    }
  
    event.target.value = formattedValue;
  });

function setError(index){
    inputs[index].style.border = '2px solid #e63636'
    inputs[index].style.margin = '0'
    spans[index].style.display = 'block'
}

function removeError(index){
    inputs[index].style.border = ''
    inputs[index].style.margin = '0 0 15px 0'
    spans[index].style.display = 'none'
}

function nameValidate(){
    if(inputs[0].value.length < 5){
        setError(0)
    }else{
        removeError(0)
    }
}

function emailValidate(){
    if(emailRegex.test(inputs[1].value)){
        removeError(1)
    }else{
        setError(1)
    }
}

function phoneValidate(){
    let rawPhone = inputs[2].value.replace(/\D/g, "")

    if (phoneRegex.test(rawPhone)) {
        removeError(2);
    } else {
        setError(2);
    }
}