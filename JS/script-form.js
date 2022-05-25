const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step")]

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
}

multiStepForm.addEventListener("click", e => {
    let incrementor
    if (e.target.matches("[data-next]")) {
        incrementor = 1
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1
    }
    
    if (incrementor == null) return
    /*const allValid = validarFormulario()
    if (allValid) {
    currentStep += incrementor
            showCurrentStep()
    }*/
    const inputs = [...formSteps[currentStep].querySelectorAll("input")]
    const allValid = inputs.every(input => input.reportValidity())
    if (allValid) {
        currentStep += incrementor
        showCurrentStep()
    }
    
})

formSteps.forEach(step => {
    step.addEventListener("animationend", e => {
      formSteps[currentStep].classList.remove("hide")
      e.target.classList.toggle("hide", !e.target.classList.contains("active"))
    })
  })


function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)
    })
}

/*function validarFormulario(e) {
  var paso, email, i, valid = true;
  var paso = currentStep
  var email = [...formSteps[currentStep].querySelectorAll("input[name:'email']").value];
  for (i = 0; i < email.length; i++) {
    if(email.length == 0) {
    alert('Por favor escribe un correo');
    return;}
  }
  /*var nombre = [...formSteps[currentStep].getElementById('fname')].value;
  if (nombre.length < 6) {
    alert('Por favor ingrese un nombre');
    return;
  }
  if (valid) {
    formSteps[currentStep].className += " finish";
  }
  return valid
}*/
