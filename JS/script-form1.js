var currentTab = 0; // Define la pestaña como la primera (0)
showTab(currentTab); // Muestra la pestaña actual

function showTab(n) {
  // Esta funcion mostrara en pantalla la pestaña actual del formulario
  var x = document.getElementsByClassName("card");
  x[n].style.display = "flex";
  // ... Arregla los botones de prev y next:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... Corrige la pestaña para que sea la actual:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // Esta funcion define que pestaña se mostrara en pantalla
  var x = document.getElementsByClassName("card");
  // Sale de la funcion si alguno de los inputs no esta validado:
  if (n == 1 && !validateForm()) return false;
  // Oculta la pestaña actual:
  x[currentTab].style.display = "none";
  // Realiza el salto de una pestaña a otra de 1 en 1:
  currentTab = currentTab + n;
  // Si se ha llegado al final del formulario :
  if (currentTab >= x.length) {
    //El formulario es enviado:
    alert('Gracias por llenar la encuesta!')
    document.getElementById("regForm").submit();
    
    return false;
  }
  // En cualquier otra situacion muestra la pestaña actual:
  showTab(currentTab);
}

function validateForm() {
  // Esta funcion realiza la validacion de los campos
  var x, y, valid = true;
  x = document.getElementsByClassName("card");
  y = x[currentTab].getElementsByTagName("input");
  // realizamos una comprobacion en cada uno de las pestañas por separado en busca de ciertos requisitos en cada uno de los campos
  if (currentTab == 0) {
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      document.getElementById('nombre').className += " invalid"
      valid = false
      alert('No has escrito nada en el usuario')
      return
  }
    var email = document.getElementById('email').value;
    if(email.length == 0) {
        document.getElementById('email').className += " invalid";
        valid = false
        alert('No has escrito nada en el email');
        return
    }
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
        document.getElementById('apellido').className += " invalid";
        valid = false
        alert('No has escrito nada en el apellido');
        return
    }
  }
  if (currentTab == 1) {
    if(!document.querySelector('input[name="redades"]:checked')) {
      valid = false
      alert('Por favor seleccione una de las opciones en edad')
      return
    }

    if(!document.querySelector('input[name="genero"]:checked')) {
      valid = false
      alert('Por favor seleccione un genero')
      return
    }
  }

  if (currentTab == 2) {
    if(!document.querySelector('input[name="redes1"]:checked')) {
      valid = false
      alert('Por favor seleccione una de las opciones en redes')
      return
    }
  }

  if (currentTab == 3) {
    var select = document.getElementById('genre').selectedIndex
    if(select == null || select == 0) {
      valid = false
      alert('Por favor seleccione una de las opciones en genero musical')
      return
    } else {
      valid = true
    }


    if(!document.querySelector('input[name="ip"]:checked')) {
      valid = false
      alert('Por favor seleccione una de las opciones en artistas')
      return
    }
  }

  // Si valido tiene el valor "true", marca la pestaña como finalizada y validada:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // devuelve el estatus de validacion
}

function fixStepIndicator(n) {
  // Esta funcion quita la clase "active" de todas las pestañas
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... y añade "active" a la pestaña actual:
  x[n].className += " active";
}